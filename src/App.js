import './App.css';
import {useEffect , useState} from 'react';

function App() {
  const [asins, setAsins] = useState([]);

  useEffect(() => {
    console.log("hiiii");
    window.chrome.extension.onMessage.addListener( (message, sender, sendResponse) => {
      console.log("useffect msg received is " + message.configData);
      setAsins(message.configData);
    });
  }, [])

  function getAsins() {
    console.log("hello world on click");
    const port = window.chrome.runtime.connect(window.chrome.runtime.id);
    // push a message to the channel
    port.sendMessage({ greeting: 'hello' });

    console.log("tried sending msg");
   }

  return (
    <div className="App">      
      <button onClick={getAsins}>Get ASIN</button>
      {asins}
    </div>
  );
}

export default App;
