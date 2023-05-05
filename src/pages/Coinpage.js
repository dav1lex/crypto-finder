import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Navbar} from "../Components/Navbar";
import Select from "react-select";

const currency = [
    {value: 'USD', label: "U.S Dollar",},
    {value: 'EUR', label: "Euro",},
    {value: 'TRY', label: "Turkish Lira",},
    {value: 'PLN', label: "Polish Zloty",},
]

export function Coinpage() {
    const params = useParams();
    const coin = params.api_symbol
    const navigate = useNavigate()
    const COIN_URL = `https://api.coingecko.com/api/v3/coins/${coin}`
    const [showCoin, setShowCoin] = useState({})
    const [selectedCurrency, setSelectedCyrrency] = useState(null)


    useEffect(() => {
        fetch(COIN_URL).then(r => r.json()).then(json =>
            setShowCoin(json)
        )

    }, [params])

    function tohome() {
        navigate('/')
    }

    console.log(showCoin)
    return (
        <>
            <Navbar onClick={tohome}/>
            <div className="w-screen h-[92vh] bg-p-black flex justify-center items-center overflow-y-scroll">
                <div className="w-screen h-full bg- pt-5 flex flex-col items-center ">
                    <div className='w-[90vw] flex justify-center sm:justify-start'>
                        <button className={'text-white bg-p-gray p-3 rounded' +
                            ' ring ring-neutral-600 focus:ring-red-600' +
                    ' self-center '}><Link to={`/`}>Home</Link>
                        </button>
                    </div>
                    <div className='w-[90vw] h-auto my-5 flex flex-col items-center sm:flex-row'>
                        <div className={'flex flex-col items-center justify-center  w-1/4'}>
                            <img src={showCoin.image?.large} alt={showCoin.id} className='w-64 mb-3'/>
                        </div>
                        <div className={'bg-p-bar-gray w-3/4'}>

                            <div className={'flex flex-col items-center p-5 sm:items-start'}>
                                <div className='flex flex-col  w-full sm:flex-row sm:items-center    '>
                                    <h1 className='text-3xl font-bold capitalize text-white p-2.5  rounded-2xl cursor-default block w-full '>{showCoin.id}
                                        <span
                                            className='text-3xl my-auto lowercase text-black bg-p-orange rounded-2xl p-1 ml-2'>{showCoin.symbol}</span>
                                    </h1>
                                    <div className={'w-full flex flex-col items-center   '}>
                                        <div className='w-1/4 mb-3'>
                                            <Select options={currency}
                                                    defaultValue={currency[0].value}
                                                    onChange={setSelectedCyrrency}
                                                    placeholder={'Currency'}/>
                                        </div>
                                        <div className='w-1/4 my-3 sm:my-0'>
                                            {selectedCurrency?.value === 'USD' ?
                                                <div
                                                    className='text-black   text-center
                                             font-bold bg-p-orange text-2xl rounded-2xl min-w-[150px]  '>{showCoin?.market_data.current_price.usd} $</div>
                                                : selectedCurrency?.value === 'EUR' ?
                                                    <div
                                                        className='text-black   text-center
                                             font-bold bg-p-orange text-2xl rounded-2xl  min-w-[150px]'>{showCoin?.market_data?.current_price.eur} €</div>
                                                    : selectedCurrency?.value === 'TRY' ?
                                                        <div
                                                            className='text-black   text-center
                                             font-bold bg-p-orange text-2xl rounded-2xl  min-w-[150px]'>{showCoin?.market_data?.current_price.try} ₺</div>
                                                        : selectedCurrency?.value === 'PLN' ?
                                                            <div
                                                                className='text-black   text-center
                                             font-bold bg-p-orange text-2xl rounded-2xl  min-w-[150px]'>{showCoin?.market_data?.current_price.pln} zł</div> :
                                                            <></>

                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className=" m-3 p-3 w-fit font-bold rounded-lg border border-p-orange  border-gray-600 text-p-gray sm:w-2/3">
                                    {showCoin.description?.en.match(/[^.!?]+[.!?]+/g).slice(0, 5)}
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='w-[90vw] h-20 bg-p-orange my-5 p-5 text-center'>
                       I really don't know what to add more but overall looks and works just fine
                    </div>
                </div>
            </div>

        </>
    )
}



