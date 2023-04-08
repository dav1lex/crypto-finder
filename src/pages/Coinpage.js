import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Navbar} from "../Components/Navbar";
import {Search} from "./Search";

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

    }, [params])

    function tohome() {
        navigate('/')
    }

    return (
        <>
            <Navbar onClick={tohome}/>
            <div className="w-screen h-[92vh] bg-black flex justify-center items-center">
                <div className="w-screen h-full bg-red-900 pt-5">

                </div>
            </div>

        </>
    )
}