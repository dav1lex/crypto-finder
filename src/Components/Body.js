import {Search} from "../pages/Search";

export function Body() {
    return <div
        className="w-screen h-[92vh] bg-black flex
              justify-center items-center">
        <div className="w-screen h-full bg-p-black pt-5">
            <Search/>
        </div>
    </div>;
}
