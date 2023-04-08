import {useNavigate} from "react-router-dom";
import {Navbar} from "../Components/Navbar";
import {Body} from "../Components/Body";


export function Home() {
    const navigate = useNavigate()

    function tohome() {
        navigate('/')
    }

    return (
        <div className='overflow-x-hidden'>
            <Navbar onclick={tohome}/>
            <Body/>


        </div>
    )
}