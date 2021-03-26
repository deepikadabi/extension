import './App.css';
import {useEffect , useState} from 'react';

const App = () => {
  const [asins, setAsins] = useState([]);
  const [copied, setCopied] = useState(false);

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
    setCopied(false);
   }


  return (
    <div className="App">      
    <button onClick={getAsins} className="MyButton">Get ASINS on this Page</button>
    <br /><br />
    {asins.length > 0 && copied===false && <button className="MyButton" onClick={() => {navigator.clipboard.writeText(asins.join("\r\n")); setCopied(true);}} >Copy all ASINS</button>}
    {asins.length > 0 && copied=== true && <button className="MyButtonDisabled" disabled > &#10004; Copied</button>}
    <ul className="MyUList" id="asins">
    {asins.map(asin =>(
      <li key={asin} className="MyList">{asin}</li>
    ))}
    </ul>
  </div>
  );
}

export default App;
