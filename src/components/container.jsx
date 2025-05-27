import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./cards";


export default function Container() {


    return (
        <div className="flex flex-col items-center justify-center w-[100%] h-[100%] lg:min-w-[1024px]">
            <div id="fondo" className="bg-gray-500 opacity-40 w-[100%] h-[100%] absolute z-1 hidden"></div>
            <section className="flex flex-col items-center justify-center w-[90%] h-[100%]  ">
                <div className="flex items-center justify-between h-[80px] w-[100%]">
                    <div>
                        <p id="staysin" className="font-bold text-[25px]">Stays in Finland</p>
                    </div>
                    <div className="text-[15px]">
                        <span id="numberstays">12+</span>
                        <span>Stays</span>
                    </div>
                </div>

            </section>
        </div>
    )
}
