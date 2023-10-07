import React, { createContext, useContext, useState } from 'react';

export const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
  const [savedQrCodes, setSavedQrCodes] = useState([]);

  const saveQrCode = (qrCodeData) => {
    const existingQrCodes = JSON.parse(localStorage.getItem('savedQrCodes')) || [];
    const updatedQrCodes = [...existingQrCodes, qrCodeData];
    localStorage.setItem('savedQrCodes', JSON.stringify(updatedQrCodes));
    setSavedQrCodes(updatedQrCodes);
  };
  
  const getSavedQrCodes = () => {
    const savedQrCodes = JSON.parse(localStorage.getItem('savedQrCodes')) || [];
    return savedQrCodes; // Just return the savedQrCodes without setting them again
  };

  const removeFromStorage = (index) => {
    const existingQrCodes = JSON.parse(localStorage.getItem('savedQrCodes')) || [];

    if (index >= 0 && index < existingQrCodes.length) {
      existingQrCodes.splice(index, 1);
      localStorage.setItem('savedQrCodes', JSON.stringify(existingQrCodes));
      setSavedQrCodes(existingQrCodes); // You can set the state here if needed
    }
  };

  const contextValue = {
    saveQrCode,
    getSavedQrCodes,
    removeFromStorage,
  };

  return (
    <StorageContext.Provider value={contextValue}>
      {children}
    </StorageContext.Provider>
  );
};
