import React, { useState, useEffect, useContext } from 'react';
import QRCode from 'qrcode.react';
import { StorageContext } from './UseStorage'; // Import your StorageContext

function QrGenerator() {
  const { saveQrCode } = useContext(StorageContext); // Access the saveQrCode function from the context

  const [code, setCode] = useState('');
  const [size, setSize] = useState(128);
  const [color, setColor] = useState('#000000');
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState('L');
  const [customize, setCustomize] = useState('');
  const [generatedQrCode, setGeneratedQrCode] = useState('');

  const triggerQr = (e) => {
    setCode(e.target.value);
  };

  const CustomizeQr = (e) => {
    setCustomize(e.target.value);
  };

  const downloadQrCode = () => {
    const canvas = document.getElementById('qrcode-canvas');
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
    a.click();
  };

  const generateQrCode = () => {
    const qrData = {
      code,
      size,
      color,
      errorCorrectionLevel,
    };
    setGeneratedQrCode(qrData);
  };

  const handleSaveQrCode = () => {
    if (generatedQrCode) {
      saveQrCode(generatedQrCode); 
      alert('QR Code saved successfully!');
    } else {
      alert('No QR Code to save. Generate a QR Code first.');
    }
  };

  useEffect(() => {
    generateQrCode();
  }, [code, size, color, errorCorrectionLevel]);

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={triggerQr}
        placeholder="Enter text"
      />
      <button onClick={downloadQrCode}>Download QR Code</button>
      <button onClick={handleSaveQrCode}>Save QR Code</button>
      <div>
        Size:
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          min="1"
        />
      </div>
      <div>
        Color:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        Error Correction Level:
        <select
          value={errorCorrectionLevel}
          onChange={(e) => setErrorCorrectionLevel(e.target.value)}
        >
          <option value="L">L (Low)</option>
          <option value="M">M (Medium)</option>
          <option value="Q">Q (Quartile)</option>
          <option value="H">H (High)</option>
        </select>
      </div>
      <div>
        Customize QR Code:
        <select value={customize} onChange={CustomizeQr}>
          <option value="">None</option>
          <option value="round">Round</option>
        </select>
      </div>
      {code && (
        <div>
          <QRCode
            value={code}
            size={size}
            fgColor={color}
            level={errorCorrectionLevel}
            id="qrcode-canvas"
          />
        </div>
      )}
    </div>
  );
}

export default QrGenerator;
