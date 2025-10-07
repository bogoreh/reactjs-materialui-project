import { useState, useEffect, useRef } from 'react';

export const useWebRTC = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState([]);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [participants, setParticipants] = useState([]);

  const localVideoRef = useRef(null);
  const peerConnections = useRef({});

  useEffect(() => {
    initializeMedia();
    // Simulate participants for demo
    setParticipants([
      { id: 'local', name: 'You', isLocal: true, videoEnabled: true, audioEnabled: true },
      { id: '1', name: 'John Doe', videoEnabled: true, audioEnabled: true },
      { id: '2', name: 'Jane Smith', videoEnabled: true, audioEnabled: false },
      { id: '3', name: 'Mike Johnson', videoEnabled: false, audioEnabled: true },
    ]);
  }, []);

  const initializeMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const toggleAudio = () => {
    if (localStream) {
      const audioTracks = localStream.getAudioTracks();
      audioTracks.forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsAudioEnabled(!isAudioEnabled);
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      const videoTracks = localStream.getVideoTracks();
      videoTracks.forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsVideoEnabled(!isVideoEnabled);
    }
  };

  const toggleScreenShare = async () => {
    try {
      if (!isScreenSharing) {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true,
        });
        
        if (localStream) {
          localStream.getVideoTracks().forEach(track => track.stop());
        }
        
        setLocalStream(screenStream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = screenStream;
        }
        setIsScreenSharing(true);

        screenStream.getTracks().forEach(track => {
          track.onended = () => {
            toggleScreenShare();
          };
        });
      } else {
        const userStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        
        setLocalStream(userStream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = userStream;
        }
        setIsScreenSharing(false);
      }
    } catch (error) {
      console.error('Error sharing screen:', error);
    }
  };

  return {
    localStream,
    remoteStreams,
    localVideoRef,
    isAudioEnabled,
    isVideoEnabled,
    isScreenSharing,
    participants,
    toggleAudio,
    toggleVideo,
    toggleScreenShare,
  };
};