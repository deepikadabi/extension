import './App.css';
import {useEffect , useState} from 'react';

const App = () => {
  const [asins, setAsins] = useState([]);

  useEffect(() => {
    window.chrome.extension.onMessage.addListener( (message, sender, sendResponse) => { 
      setAsins(message.configData);
    });
  }, [])

  function getAsins() {

    window.chrome.tabs.query({currentWindow: true , active:true} , (tabs)=>{
      const activetab = tabs[0];
      window.chrome.tabs.sendMessage(activetab.id , {command: "Get Asins"});
    });
   }

  return (
    <div className="App">
      <button onClick={getAsins}>Get ASIN</button>
      <ul>
      {asins.map(asin =>(
        <li key={asin}>{asin}</li>
      ))}
      
      </ul>
    </div>
  );
}

export default App;
