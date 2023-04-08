export function Navbar(props) {
    return <nav
        className="bg-white dark:bg-black
          max-w-screen h-[8vh]" onClick={props.onClick}>
        <div className=" flex flex-wrap items-center
                justify-between mx-auto p-4">
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
                    <a href='https://github.com/dav1lex/crypto-finder' > View Code On Github</a>
                </button>
                <button data-collapse-toggle="navbar-sticky" type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                 id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100
                         rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white
                          dark:bg-transparent md:dark:bg-p-black dark:border-gray-700">
                    <li>
                        <a className="block py-2 pl-3 pr-4 text-white
                                    rounded md:p-3
                                     md:dark:text-white cursor-pointer"
                           aria-current="page">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}