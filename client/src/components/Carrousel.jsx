import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useSearchParams } from "react-router-dom";
import { setSearch } from "../features/search/searchSlice";


export default function Carrousel() {

    const [searchParams, setSearchParams] = useState()

    const dispatch = useDispatch()


    const handleSearch = () => {
        dispatch(setSearch(searchParams))
        // console.log(searchRes);
    }
    return (
        <>
            <div className="flex max-w-screen-xl px-6 py-3 mx-auto place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible" onClick={handleSearch}>
                <figure className="relative w-full h-96 ">
                    <img className="object-cover object-center w-full h-full rounded-xl"
                        src="https://i.pinimg.com/564x/3c/4c/67/3c4c6701721f7031b95d5553c9e7122f.jpg"
                        alt="nature image" />
                    <figcaption
                        className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div className="flex flex-col">
                            <div className=" text-center mb-10 ">
                                <h5 className="block items-center font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    LIBRARY OF PROGRAMMER
                                </h5>
                            </div>
                            <div className="relative flex w-full gap-2 md:w-max">
                                <div class="items-center hidden gap-x-2 lg:flex">
                                    <div class="relative h-10 w-full  min-w-[288px]">
                                        <input type="search"
                                        onChange={(event)=> {setSearchParams(event.target.value)}}
                                        placeholder="Search"
                                            class="peer h-full w-full rounded-[7px] border border-black border-t-transparent !border-t-blue-gray-300 bg-white px-3 py-2.5 pl-9 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                        <label
                                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                                    </div>
                                    <div class="!absolute left-3 top-[13px]">
                                        <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                                                fill="#CFD8DC"></path>
                                            <path
                                                d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                                                stroke="#CFD8DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <button 
                                    className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button">
                                    Search
                                </button>
                            </div>
                        </div>
                    </figcaption>

                </figure >
            </div >
        </>
    )
}

