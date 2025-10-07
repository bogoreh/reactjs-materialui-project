import React, { useRef } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { AttachFile } from '@mui/icons-material';

const FileUpload = ({ onFileUpload, disabled = false }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
    // Reset input
    event.target.value = '';
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        accept="image/*,.pdf,.doc,.docx,.txt"
      />
      <Tooltip title="Attach file">
        <IconButton 
          onClick={handleClick} 
          disabled={disabled}
          color="primary"
        >
          <AttachFile />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default FileUpload;