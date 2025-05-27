import React from 'react'

export default function ModalMobile({ onClose, isOpen }) {

    function handleClose(e) {
        if (e.target.id === 'modal') {
            onClose()
        }
    }

    return (
        <>
            <div id="modal" onClick={handleClose} className={`fixed inset-0 bg-gray-600/60 flex flex-col items-baseline modal-entero ${isOpen ? 'flex' : 'hidden'}`}>
                <div className="bg-[#F2F2F2] w-[100%] h-[120px] max-md:h-[160px]  flex flex-col items-center justify-center">
                    <div className="flex items-center justify-between w-[100%] ">
                        <div className="pl-4 min-md:hidden">
                            <p className="font-bold text-[10px]">Edit your search</p>
                        </div>
                        <button onClick={onClose} id="cerrar" className="border-2 max-md:border-3 flex p-2 w-[110px] max-md:w-[50px] mt-2 ml-auto">
                            {/* <img
                                className="w-[20px]" src="./src/images/icons/Close Symbol.svg" alt="close" /> */}
                            <p className="max-md:hidden">CLOSE</p>
                        </button>
                    </div>
                    <div className="flex max-md:flex-col items-center justify-center md:pt-4 w-[90%]">
                        <button className="border-2 border-gray-200 min-md:rounded-l-xl max-md:rounded-t-xl w-[40%] max-md:w-[100%]  h-[50px] text-[10px] font-semibold text-left pl-5">Location<br />
                            <input autocomplete="off" id="inputlocation" type="text" className="text-[13px] w-[100%] outline-0"
                                placeholder="Location" />
                        </button>
                        <button id="guests"
                            className="min-md:border-y-2 max-md:border-x-2 max-md:border-b-2 max-md:rounded-b-xl font-semibold text-[10px] border-gray-200 w-[40%] max-md:w-[100%] py-2 h-[50px] text-left pl-5 flex flex-col"
                        >
                            <p>Guests</p>
                            <div className="flex"><input className=" w-[33px] text-center text-[15px]" type="number" name="name"
                                id="contGuests" readonly />
                                <p className="text-[13px]">guests</p>
                            </div>
                        </button>
                        <button
                            className="search border-2 border-gray-200 rounded-r-xl w-[20%] h-[50px] flex items-center justify-center max-md:hidden"
                            type="button"><span
                                className="flex bg-[#eb5757] py-2 px-5 gap-2 rounded-2xl text-white items-center"><img
                                    className="w-[13px] h-[15px]" src="./src/images/icons/search-13-32.png" alt="search" />
                                search</span></button>
                    </div>
                </div>
                <div id="menu" className="bg-[#F2F2F2] w-[100%] h-[380px]">
                    <section className="pl-[10%] gap-[10%] flex flex-wrap max-md:flex-col ">
                        <div className="w-[30%] h-[300px] max-md:h-[30px] pt-5 max-md:pt-3">
                            <button id="subLocations"> </button>

                        </div>
                        <div id="subGuests"
                            className="w-[30%] max-md:w-[40%] h-[300px] max-md:h-[200px] flex flex-col justify-evenly">
                            <div>
                                <h3 className="font-bold text-[15px]">Adults</h3>
                                <h3 className="font-semibold text-[15px] text-gray-400">Ages 13 or above</h3>
                                <span className="font-bold text-[15px] flex items-center gap-8">
                                    <button id="adultMinus"
                                        className="border-1 bg-[#cbcbcb] w-[25px] h-[25px] flex items-center justify-center rounded-sm">-</button><span
                                            id="contAdult">0</span><button id="adultPlus"
                                                className="border-1 bg-[#cbcbcb] w-[25px] h-[25px] flex items-center justify-center rounded-sm text-[12px]">
                                        +</button>
                                </span>
                            </div>
                            <div>
                                <div>
                                    <h3 className="font-bold text-[15px]">Children</h3>
                                    <h3 className="font-semibold text-[15px] text-gray-400">Ages less than 13</h3>
                                    <span className="font-bold text-[15px] flex items-center justify-start">
                                        <button id="childMinus"
                                            className="border-1 bg-[#cbcbcb] w-[25px] h-[25px] flex items-center justify-center rounded-sm">-</button><input
                                            id="contChild" type="number" readonly className="w-[70px] pl-3 text-center" />
                                        <button id="childPlus"
                                            className="border-1 bg-[#cbcbcb] w-[25px] h-[25px] flex items-center justify-center rounded-sm text-[12px]">
                                            +</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] pt-15 flex items-center justify-center"><button
                            className="search2 h-[50px] flex items-center justify-center pr-[10%] min-md:hidden"
                            type="button"><span
                                className="flex bg-[#eb5757] py-2 px-5 gap-2 rounded-2xl text-white items-center"><img
                                    className="w-[13px] h-[15px]" src="./src/images/icons/search-13-32.png" alt="search" />
                                search</span></button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
