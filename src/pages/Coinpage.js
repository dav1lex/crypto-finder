import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function Coinpage() {
    const params = useParams();
    const coin = params.api_symbol
    const navigate = useNavigate()
    const COIN_URL = `https://api.coingecko.com/api/v3/coins/${coin}`
    const [showCoin, setShowCoin] = useState({})

    useEffect(() => {
        fetch(COIN_URL).then(r => r.json()).then(json =>
            setShowCoin(json)
        )

    }, [coin])

    function tohome() {
        navigate('/')
    }

    console.log(showCoin)
    return (
        <>
            <>
                <div id={'navbar'} className='w-screen h-[8vh] bg-gray-800 flex pl-20 pr-20 items-center'>
                    <h1 className='text-5xl text-white cursor-pointer' onClick={tohome}>Cryopto Finder</h1>
                </div>
                <div
                    className='w-screen h-[84vh] bg-gray-500 flex flex-col justify-center items-center justify-between overflow-y-scroll'>

                    <div className='w-5/6 h-[30vh] bg-yellow-400 flex'>
                        <div className='bg-red-900 h-full w-1/5 '>
                            <img src={''}/>
                        </div>
                        <div className='bg-blue-900 w-40 h-40 flex flex-col justify-center'>
                            <div className={'text-5xl text-white'}>{showCoin.name}</div>
                        </div>
                    </div>

                    <div className='w-5/6 h-[30vh] bg-green-900'></div>

                    {/*<Link to={'/'} className='butt'>go back home</Link>*/} {/*bu eve git tusu */}
                </div>


                <div className='w-screen h-[8vh] bg-gray-800 fixed bottom-0'></div>

            </>
        </>
    )
}