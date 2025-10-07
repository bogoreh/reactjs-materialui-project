import { useState, useCallback } from 'react';

export const useChat = () => {
  const [currentRoom, setCurrentRoom] = useState('general');
  const [user, setUser] = useState('');
  const [rooms, setRooms] = useState(['general', 'random', 'tech', 'gaming']);

  const joinRoom = useCallback((roomName) => {
    setCurrentRoom(roomName);
  }, []);

  const createRoom = useCallback((roomName) => {
    setRooms(prev => [...prev, roomName]);
    setCurrentRoom(roomName);
  }, []);

  return {
    currentRoom,
    user,
    setUser,
    rooms,
    joinRoom,
    createRoom
  };
};