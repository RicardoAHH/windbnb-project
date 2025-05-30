import React from 'react'

export default function Header({ onClose }) {
    return (
        <header className="md:flex w-[90%] items-center justify-center">
            <div className=" w-[100%] h-[70px] flex items-center pb-2 pl-1 md:pt-3"> <img
                src="/logo-f7862584.svg" alt="Logo" />
            </div>
            <div className="flex items-center justify-center md:pt-3">
                <button id="location"
                    onClick={onClose}
                    className="border-2 border-gray-200 rounded-l-xl w-[130px] xl:w-[160px] h-[50px] text-[13px] font-semibold text-gray-400">Add
                    location
                </button>
                <button id="guests"
                    onClick={onClose}
                    className="border-y-2  text-gray-400 font-semibold text-[13px] border-gray-200 w-[120px] xl:w-[150px] h-[50px]">Add
                    guests</button>
                <button
                    className="border-2 border-gray-200 rounded-r-xl w-[50px] xl:w-[70px] h-[50px] flex items-center justify-center"
                    onClick={onClose}
                    type="button"><img className="w-[13px] lg:w-[16px]" src="/searchrojo.svg"
                        alt="search" /></button>
            </div>
        </header>
    )
}
