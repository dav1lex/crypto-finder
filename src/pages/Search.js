import {useState} from "react";
import {Link} from "react-router-dom";

export function Search() {

    const [searchitem, setsearchitem] = useState('')
    const [templist, setTemplist] = useState([])
    const [tempcoin, settempcoin] = useState('')
    const SEARCH_URI = `https://api.coingecko.com/api/v3/search?query=${searchitem}`

    function inputhandler(ev) {
        setsearchitem(ev.target.value)
    }

    function searchcoin(e) {
        e.preventDefault()
        fetch(SEARCH_URI).then(r => r.json()).then(json =>
            setTemplist(json.coins)
        )
    }

    console.log(templist)
    return (
        <div>
            <div className='flex flex-col items-center'>
                <form onSubmit={searchcoin}>
                    <input className='mr-4 p-3 rounded shadow shadow-black w-[400px] bg-gray-200'
                           onChange={inputhandler}/>
                    <button type='submit' className='bg-gray-50 w-20 p-3 border border-blue-200 mt-5  shadow shadow-black
                 rounded-2xl hover:bg-gray-600 hover:text-gray-300 transition  '>search
                    </button>
                </form>

            </div>
            <div className='flex flex-wrap items-center justify-center'>
                {templist.slice(0, 10).map((coin, key) => {
                    return <div key={key} className='bg-gray-600  w-52 h-24 m-5 pl-2 flex items-center rounded shadow
                    shadow-gray-700 transition ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-110
                     group'>
                        <div className='flex flex-col items-center'>
                            <img src={coin.large} width={50}/>
                            <span className='italic font-bold'>{coin.symbol}</span>
                        </div>
                        <div className='flex flex-col pl-4'>
                            <div className='group-hover:underline'>{coin.name}</div>
                            <div className='text-red-300'>Rank:{coin.market_cap_rank}</div>
                            <Link to={`/coin/${templist[key].api_symbol}`}>More info</Link>
                        </div>
                    </div>
                })}

            </div>
            <div className='w-screen flex justify-center'>
            {templist.length > 0 && (
                <button className='bg-gray-50 w-32 p-3 border border-blue-200 mt-5  shadow shadow-black
                 rounded-2xl hover:bg-gray-600 hover:text-gray-300 transition ' onClick={()=>setTemplist([])}>clear results</button>
            )}
            </div>
        </div>
    );
}