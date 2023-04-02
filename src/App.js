import {useState} from "react";
import {logDOM} from "@testing-library/react";

function App() {
    const [searchitem, setsearchitem] = useState('')
    const [templist,setTemplist] = useState([])
    const SEARCH_URI = `https://api.coingecko.com/api/v3/search?query=${searchitem}`

    function inputhandler(ev) {
        setsearchitem(ev.target.value)
    }

    function searchcoin() {
        fetch(SEARCH_URI).then(r => r.json()).then(json =>
            setTemplist(json.coins)
        )
        console.log(templist)
        setsearchitem('')
    }

    return (
        <div className="w-screen h-screen bg-gray-500">
            <input onChange={inputhandler}/>
            <button onClick={searchcoin}>search</button>
           <div className='flex flex-wrap'>
               {templist.map((coin)=>{
                   return <div className='bg-yellow-300 w-52 h-24  m-5'>
                       <h3>{coin.name}</h3>
                       <img src={coin.large} width={50}/>

                   </div>
               })}
           </div>
        </div>
    );
}

export default App;
