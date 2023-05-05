import {useState} from "react";
import {Link} from "react-router-dom";

export function Search() {
    const [searchitem, setsearchitem] = useState('')
    const [templist, setTemplist] = useState([])
    const SEARCH_URI = `https://api.coingecko.com/api/v3/search?query=${searchitem}`
    const [loading, setloading] = useState(false)
    const [notfound, setnotfound] = useState(false)

    function inputhandler(ev) {
        const val = ev.target.value;
        setsearchitem(val)
    }

    function attach(json) {
        setTemplist(json.coins)
        console.log(json.coins)
        json.coins.length === 0 ? setnotfound(true) : setnotfound(false)
    }

    function searchcoin(e) {
        e.preventDefault()
        setloading(true)
        fetch(SEARCH_URI)
            .then(r => r.json())
            .then(json => attach(json))
            .then(() => setloading(false))
    }

    function clearfields() {
        setsearchitem('')
        setTemplist([])
    }

    function showNotfound() {
        setTimeout(() => {
            setnotfound(false)
        }, 5000)
        return <div id="toast-danger"
                    className="flex items-center  max-w-xs p-4 mt-4
                     text-gray-500 bg-white rounded-lg shadow dark:text-black dark:bg-p-orange
                     border border-p-dark-orange"
                    role="alert">
            <div className="font-bold text-sm ">Not Found</div>

        </div>
    }

    function showloading() {
        return <div role="status">
            <svg aria-hidden="true"
                 className="w-14 h-14 mt-5  animate-spin dark:text-black fill-p-orange"
                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"/>
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"/>
            </svg>

        </div>;
    }

    return (
        <div>
            <div className='flex  flex-col items-center'>

                <form onSubmit={searchcoin} className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input value={searchitem} onChange={inputhandler} type="text" id="simple-search"
                               className=" border border-gray-300 text-red-600 text-sm rounded-lg
                               focus:ring-blue-500 focus:border-blue-500 block
                                w-96 pl-10  dark:bg-neutral-700 dark:border-gray-600
                                 dark:placeholder-neutral-400
                                 dark:text-white dark:focus:ring-neutral-600 dark:focus:border-blue-500"
                               placeholder="Search CryptoFinder" required/>

                    </div>

                    <button type="submit"
                            className="p-2.5 ml-2 text-sm font-medium text-p-black bg-p-orange
                             rounded-lg border border-p-dark-orange hover:bg-p-dark-orange
                              focus:ring-4 focus:outline-none focus:ring-orange-500
                               dark:bg-p-orange dark:hover:bg-p-dark-orange
                                dark:focus:bg-p-dark-orange">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
            <div className='flex  flex-wrap items-center justify-center'>
                {loading ? showloading() :
                    //loading
                    notfound ? showNotfound() :
                        //if not found show error
                        //if found show only 10 coins ;
                        templist.slice(0,10).map((coin, key) => {
                            return <div key={key} className='bg-neutral-800  w-56 h-24 m-5 pl-2
                             flex items-center rounded shadow transition ease-in-out cursor-pointer
                              hover:-translate-y-1 hover:scale-110 group'>

                                <div className='flex flex-col items-center '>
                                    <img src={coin.large} alt={coin.id} width={50}/>
                                    <span className='italic font-bold text-p-orange'>{coin.symbol}</span>
                                </div>
                                <div className='flex flex-col pl-4 '>
                                    <div className='text-sm text-white '>{coin.name}</div>
                                    <div
                                        className='text-red-600'>Rank: {coin.market_cap_rank == null ? ' N/A' : coin.market_cap_rank}</div>
                                    <Link className='font-bold group-hover:underline
                                    group-hover:text-p-orange transition delay-75'
                                          to={`/coin/${templist[key].api_symbol}`}>More info></Link>
                                </div>


                            </div>
                        })}

            </div>
            <div className=' flex justify-center'>
                {templist.length > 0 && (
                    <button className='p-4 font-medium capitalize text-black bg-p-orange
                             rounded-lg border border-p-dark-orange hover:bg-p-dark-orange
                              focus:ring-4 focus:outline-none focus:ring-orange-500
                               dark:bg-p-orange dark:hover:bg-p-dark-orange
                                dark:focus:bg-p-dark-orange '
                            onClick={clearfields}>clear
                        results</button>
                )}
            </div>
        </div>
    );
}