import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cards({ setPhotos, filter, setNumStays, setFilter }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cuenta, setCuenta] = useState(0)

    async function fetchData(url) {
        try {
            const response = await axios.get(url);
            setPhotos(response.data)
            setFilter(response.data)


        } catch (error) {
            setError("Error al cargar las fotos: " + error.message);
            console.error("Error fetching photos:", error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchData('/stays.json');
    }, [])

    if (loading) {
        return <div className="text-center p-4 text-lg">Cargando fotos...</div>;
    }

    if (error) {
        return <div className="text-center p-4 text-red-500 text-lg">Error: {error}</div>;
    }


    setNumStays(filter.length)


    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <section id="container"
                    className="flex flex-wrap items-center justify-center  w-[100%] md:w-[90%] h-[100%] lg:h-[screen] gap-4 md:gap-7 lg:grid lg:grid-cols-3 lg:gap-8 lg:justyfy-center lg:items-center">
                    {filter?.map((photo) =>
                        < div key={photo.id} className="flex flex-col w-[330px] lg:w-[100%] lg:h-[300px] xl:h-[380px]" >
                            <div>
                                <div className="w-[100%] h-[228px] lg:h-[100%] items-center flex object-cover">
                                    <img className="rounded-2xl object-cover w-[100%] h-[100%] lg:h-[250px] xl:h-[340px]"
                                        src={photo.photo}
                                        alt="photo" />
                                </div>
                                <div className=" w-[100%] text-[14px] flex justify-between items-center pt-1  lg:-mt-4 text-gray-500">
                                    <span className="flex items-center">
                                        {photo.superHost && (<span className="text-black font-semibold border-1 py-1 px-2 rounded-xl mr-3">
                                            <p>SUPERHOST</p>
                                        </span>)}
                                        <p>{photo.type}</p>
                                        {photo.beds !== null && (<p>, {photo.beds} beds</p>)}
                                    </span>
                                    <span className="flex"><img className="w-[15px]" src="./starroja.svg" alt="star" />{photo.rating}</span>
                                </div>
                                <p className="font-semibold">{photo.title}</p>
                            </div>
                        </div>
                    )}
                </section >
            </div>

        </>
    )
}
