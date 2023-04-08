import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from './pages/Home'
import {Coinpage} from "./pages/Coinpage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/coin/:api_symbol' element={<Coinpage/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;
