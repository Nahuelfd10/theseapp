import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';

const Button = ({handleCaptureClick}) => {
  return (
    <div className="btn-desc">
      <button onClick={handleCaptureClick}><DownloadIcon/>Descargar</button>
    </div>
  )
}

export default Button