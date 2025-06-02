import { useState } from 'react'

export default function ModalMobile({ onClose, isOpen, photos, setFilter, location, setLocation }) {

    const [chil, setChil] = useState(0)
    const [adult, setAdult] = useState(0)
    const array = photos

    function add() {
        setChil((chil) => chil + 1)
    }

    function min() {
        if (chil > 0) {
            setChil((chil) => chil - 1)
        }
    }
    function addA() {
        setAdult((e) => e + 1)
    }

    function minA() {
        if (adult > 0) {
            setAdult((e) => e - 1)
        }
    }

    function handleClose(e) {
        if (e.target.id === 'modal') {
            onClose()
        }
    }

    const handleLocation = (e) => {
        e.preventDefault()
        const newValue = e.target.value
        setLocation(newValue)
    }

    function copyLocation(e) {
        setLocation(stay.innerText)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            location: location,
            totalGuests: adult + chil
        }

        if (formData.totalGuests === 0 && location === "") {
            setFilter(array)
            onClose()

        } else if (formData.totalGuests > 0 && location === "") {
            let filtrado = array.filter((stay) => stay.maxGuests >= formData.totalGuests)
            setFilter(filtrado)
            console.log(filtrado)
            onClose()

        } else if (formData.totalGuests === 0 && location != "") {
            let filtrado = array.filter((stay) => stay.city === formData.location)
            setFilter(filtrado)
            console.log(filtrado)
            onClose()
        } else if (formData.totalGuests > 0 && location != "") {
            let filtrado = array.filter((stay) => stay.city === formData.location && stay.maxGuests >= formData.totalGuests)
            setFilter(filtrado)
            console.log(filtrado)
            onClose()
        }


    }

    const uniqueLocations = Array.from(new Set(photos.map(item =>
        JSON.stringify({ city: item.city, country: item.country })
    ))).map(item => JSON.parse(item));



    return (
        <>
            <div id="modal" onClick={handleClose} className={`fixed inset-0 bg-gray-600/60 flex flex-col items-baseline modal-entero ${isOpen ? 'flex' : 'hidden'}`}>
                <div className="bg-[#F2F2F2] w-[100%] h-[130px] max-md:h-[160px]  flex flex-col items-center justify-center">
                    <div className="flex items-center justify-between w-[100%] ">
                        <div className="pl-4 min-md:hidden">
                            <p className="font-bold text-[10px]">Edit your search</p>
                        </div>
                        <button onClick={onClose} id="cerrar" className="flex items-center gap-5  p-2 w-[100px] max-md:w-[50px] mt-2 mr-5 ml-auto">
                            <p className="max-md:hidden">CLOSE</p>
                            <p className=" text-[20px]">X</p>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="flex max-md:flex-col items-center justify-center w-[100%]">
                        <div className="border-2 border-gray-200 min-md:rounded-l-xl max-md:rounded-t-xl w-[40%] max-md:w-[100%] h-[50px] text-[10px] font-semibold text-left pl-5">
                            Location<br />
                            <input autoComplete="off" name="inputlocation" type="search" className="text-[13px] w-[100%] outline-0"
                                placeholder="Location" value={location} onChange={handleLocation} />
                        </div>
                        <button
                            id="guests"
                            className="min-md:border-y-2 max-md:border-x-2 max-md:border-b-2 max-md:rounded-b-xl font-semibold text-[10px] border-gray-200 w-[40%] max-md:w-[100%] py-2 h-[50px] text-left pl-5 flex flex-col"
                            type="button">
                            <p>Guests</p>
                            <div className="flex">
                                <input className=" w-[33px] text-center text-[15px]" type="number" name="totalGuests"
                                    id="contGuests" readOnly value={chil + adult} />
                                <p className="text-[13px]">guests</p>
                            </div>
                        </button>
                        <button className="search border-2 border-gray-200 rounded-r-xl w-[20%] h-[50px] flex items-center justify-center max-md:hidden"
                            type="submit" >
                            <span className="flex bg-[#eb5757] py-2 px-5 gap-2 rounded-2xl text-white items-center">
                                <img className="w-[13px] h-[15px]" src="/search-13-32.png" alt="search" />
                                search
                            </span>
                        </button>
                    </form>
                </div>
                <div id="menu" className="bg-[#F2F2F2] w-[100%] h-[380px]">
                    <section className="pl-[10%] gap-[10%] flex flex-wrap max-md:flex-col">
                        <div className="max-md:w-[30%] w-[350px] max-md:h-[30px] flex flex-col pt-5 max-md:pt-3">
                            {location.trim() !== "" && uniqueLocations
                                .filter((stay) => stay.city.toLowerCase().startsWith(location.toLowerCase()))
                                .map((stay) => (
                                    <button key={stay.city} onClick={copyLocation} id="subLocations ">
                                        <div className="flex items-center gap-3 w-50">
                                            <img className="w-[18px] h-[18px] " src="/location-pointer.png" alt="location" />
                                            <p id="stay" name="stay" className="font-semibold text-[13px]">{stay.city}</p>
                                            <p className="font-semibold text-[13px]">, {stay.country}</p>
                                        </div>
                                    </button>
                                ))
                            }
                        </div>
                        <div id="subGuests"
                            className="w-[30%] max-md:w-[40%] h-[300px] max-md:h-[200px] max-md:pt-5 flex flex-col justify-evenly">
                            <div>
                                <h3 className="font-bold text-[15px]">Adults</h3>
                                <h3 className="font-semibold text-[15px] text-gray-400">Ages 13 or above</h3>
                                <span className="font-bold text-[15px] flex items-center justify-start">
                                    <button id="adultMinus" onClick={minA}
                                        className="border-1 bg-[#cbcbcb] w-[25px] h-[25px] flex items-center justify-center rounded-sm">-</button><input
                                        id="contChild" type="number" readOnly className="w-[70px] pl-3 text-center" value={adult} />
                                    <button id="adultPlus" onClick={addA}
                                        className="border-1 bg-[#cbcbcb] w-[25px] h-[25px] flex items-center justify-center rounded-sm text-[12px]">
                                        +</button>
                                </span>
                            </div>
                            <div>
                                <div>
                                    <h3 className="font-bold text-[15px]">Children</h3>
                                    <h3 className="font-semibold text-[15px] text-gray-400">Ages less than 13</h3>
                                    <span className="font-bold text-[15px] flex items-center justify-start">
                                        <button id="childMinus" onClick={min}
                                            className="border-1 bg-[#cbcbcb] w-[25px] h-[25px] flex items-center justify-center rounded-sm">-</button><input
                                            id="contChild" type="number" readOnly className="w-[70px] pl-3 text-center" value={chil} />
                                        <button id="childPlus" onClick={add}
                                            className="border-1 bg-[#cbcbcb] w-[25px] h-[25px] flex items-center justify-center rounded-sm text-[12px]">
                                            +</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] pt-15 flex items-center justify-center">
                            <form onSubmit={handleSubmit}>
                                <button
                                    className="search2 h-[50px] flex items-center justify-center pr-[10%] min-md:hidden"
                                    type="submit"><span
                                        className="flex bg-[#eb5757] py-2 px-5 gap-2 rounded-2xl text-white items-center"><img
                                            className="w-[13px] h-[15px]" src="/search-13-32.png" alt="search" />
                                        search</span>
                                </button>
                            </form>

                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
