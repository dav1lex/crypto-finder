import {Link, useNavigate, useParams} from "react-router-dom";

export function Coinpage() {
    const params = useParams();
    const coin = params.api_symbol
    const navigate = useNavigate()
    const COIN_URL = `https://api.coingecko.com/api/v3/coins/${coin}`
    function tohome() {
        navigate('/')
    }

    console.log(COIN_URL)
    return (
        <>
            <>
                <div id={'navbar'} className='w-screen h-[8vh] bg-gray-800 flex pl-20 pr-20 items-center'>
                    <h1 className='text-5xl text-white cursor-pointer' onClick={tohome}>Cryopto Finder</h1>
                </div>
                <div className='w-screen h-[84vh] bg-gray-500 flex items-center justify-center'>
                    {params.api_symbol}
                    <Link to={'/'} className='butt'>go back home</Link>
                </div>


                <div className='w-screen h-[8vh] bg-gray-800 fixed bottom-0'></div>

            </>
        </>
    )
}