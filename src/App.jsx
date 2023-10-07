
import './App.css'
import DisplayQr from './components/DisplayQr';
import QrGenerator from './components/QrGenerator'
import { StorageProvider } from './components/UseStorage';
function App() {
  return (
    <>
    <StorageProvider>
      <QrGenerator/>
      <DisplayQr/>
    </StorageProvider>
    </>
  );
}
  

export default App
