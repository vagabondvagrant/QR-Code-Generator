// import React, { useContext } from 'react';
// import { StorageContext } from './UseStorage'; 

// function DisplayQr() {
//   const { getSavedQrCodes, removeFromStorage } = useContext(StorageContext); 

//   const savedQrCodes = getSavedQrCodes();

//   const handleRemoveFromStorage = (index) => {
//     removeFromStorage(index); 
//   };

//   return (
//     <div>
//       <h2>Saved QR Codes</h2>
//       {savedQrCodes.map((qrCodeData, index) => (
//         <div key={index}>
//           <img src={`data:image/png;base64,${qrCodeData.code}`} alt="QR Code" />
//           <p>Size: {qrCodeData.size}</p>
//           <p>Color: {qrCodeData.color}</p>
//           <p>Error Correction Level: {qrCodeData.errorCorrectionLevel}</p>
//           <p>Customize: {qrCodeData.customize}</p>
//           <button onClick={() => handleRemoveFromStorage(index)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DisplayQr;
import React, { useContext } from 'react';
import { StorageContext } from './UseStorage';

function DisplayQr() {
  const { getSavedQrCodes, removeFromStorage } = useContext(StorageContext);

  const savedQrCodes = getSavedQrCodes();

  const handleRemoveFromStorage = (index) => {
    removeFromStorage(index);
  };

  return (
    <div>
      <h2>Saved QR Codes</h2>
      {savedQrCodes.map((qrCodeData, index) => (
        <div key={index}>
          <img src={qrCodeData.imageUrl} alt="QR Code" />
          <p>Size: {qrCodeData.size}</p>
          <p>Color: {qrCodeData.color}</p>
          <p>Error Correction Level: {qrCodeData.errorCorrectionLevel}</p>
          <p>Customize: {qrCodeData.customize}</p>
          <button onClick={() => handleRemoveFromStorage(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default DisplayQr;
