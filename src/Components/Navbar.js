export function Navbar(props) {
    return <nav
        className="bg-white dark:bg-black
          max-w-screen h-[8vh]" onClick={props.onClick}>
        <div className=" flex flex-wrap items-center
                justify-between mx-auto pt-5 sm:pt-5 md:pt-5 lg:pt-5 px-10 sm:px-20">
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:cursor-pointer">
                        <span className='text-white'>Crypto </span>
                        <span className='text-p-black bg-p-orange rounded
                        p-1'>Finder</span>
                    </span>
            <div className="flex md:order-2">
                <button type="button"
                        className="text-p-black bg-p-orange hover:bg-p-dark-orange focus:ring-4
                                     focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                                     text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-p-orange
                                      dark:hover:bg-p-dark-orange dark:focus:ring-blue-800">
                    <a href='https://github.com/dav1lex/crypto-finder ' target="_blank"> View Code On Github</a>
                </button>

            </div>

        </div>
    </nav>;
}