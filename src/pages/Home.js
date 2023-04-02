import {useNavigate} from "react-router-dom";
import {Search} from "./Search";

export function Home() {

    const navigate = useNavigate()

    function tohome() {
        navigate('/')
    }

    return (
        <>
            <div id={'navbar'} className='w-screen h-[8vh] bg-gray-800 flex pl-20 pr-20 items-center'>
                <h1 className='text-5xl text-white' onClick={tohome}>Cryopto Finder</h1>
            </div>
            <div className='w-screen h-[84vh] bg-gray-500 flex items-center justify-center'>
                <Search/>
            </div>


            <div className='w-screen h-[8vh] bg-gray-800 fixed bottom-0'></div>

        </>
    )
}