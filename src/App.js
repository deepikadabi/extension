import './App.css';
import {useEffect , useState} from 'react';

// const Div = styled.div`
//   width:300px;
//   padding: 10px;

// `

// const Button = styled.button`
// border: none;
//   color: white;
//   padding: 5px 18px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 10px;
//   font-weight:bold;
//   border-radius:5px;
//   margin: 4px 2px;
//   transition-duration: 0.4s;
//   cursor: pointer;
// `


const App = () => {
  const [asins, setAsins] = useState([]);

  useEffect(() => {

    window.chrome.extension.onMessage.addListener( (message, sender, sendResponse) => {
      console.log("message received is " + message.configData);
      setAsins(message.configData);
      console.log("asins" + asins);
    });
  }, [])

  function getAsins() {

    window.chrome.tabs.query({currentWindow: true , active:true} , (tabs)=>{
      var activetab = tabs[0];
      window.chrome.tabs.sendMessage(activetab.id , {command: "Get Asins"});
    });
   }

  
  return (
    <div className="App">      
      <button onClick={getAsins} className="MyButton">Get ASINS on this Page</button>
      <ul className="MyUList">
      {asins.map(asin =>(
        <li key={asin} className="MyList">{asin}</li>
      ))}
      
      </ul>
    </div>
  );
}

export default App;
