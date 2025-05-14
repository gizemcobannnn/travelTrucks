import vanIcon from '../../assets/bi_grid-1x2.svg';
import fullyIcon from '../../assets/bi_grid.svg';
import alcoveIcon from '../../assets/bi_grid-3x3-gap.svg';
import cupHot from '../../assets/cup-hot.svg';
import diagram from '../../assets/diagram.svg';
import shower from '../../assets/ph_shower.svg';
import tv from '../../assets/tv.svg';
import wind from '../../assets/wind.svg';
import petrol from '../../assets/Group.svg';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/campersOps';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const CatalogPage=()=>{
   // const [location, setLocation] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleEquipment, setVehicleEquipment] = useState('');
   // const [campers, setCampers] = useState([]);
   const [expanded, setExpanded] = useState(false);

   // const [selectedCamper, setSelectedCamper] = useState(null);
    const dispatch = useDispatch();
      const camperItems = useSelector(state => state.trucks.campers); 
console.log(camperItems);
    const handleSearch = async (e) => {
    e.preventDefault();
     await dispatch(fetchCampers()).unwrap();

    };


  return (
    <>
    <div className='flex flex-row justify-around items-start flex-wrap w-full mt-15'>
        <div id="leftSection" className="flex flex-col gap-4 items-start w-1/3">
            <div className="flex flex-col gap-5 items-start">
                <p className="text-slate-500">Location</p>
                <input type="select" placeholder="Kyiv, Ukraine"></input>
            </div>
            <div id="vehicleType" className="flex flex-col gap-6 items-start">
                <p className="text-slate-500">Filters</p>
                <p>Vehicle Equipment</p>
                <div className="grid grid-cols-3 grid-rows-2  gap-2 md:gap-5">
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${vehicleEquipment === "AC"?"selected":""}`}
                        onClick={()=> setVehicleEquipment("AC")}>
                        <img src={wind} alt="ac" />
                        <p>AC</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${vehicleEquipment === "Automatic"?"selected":""}`}
                        onClick={()=> setVehicleEquipment("Automatic")}>
                        <img src={diagram} alt="auto" />
                        <p>Automatic</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${vehicleEquipment === "Kitchen"?"selected":""}`}
                        onClick={()=> setVehicleEquipment("Kitchen")}>
                        <img src={cupHot} alt="cup" />
                        <p>Kitchen</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${vehicleEquipment === "TV"?"selected":""}`}
                        onClick={()=> setVehicleEquipment("TV")}>
                        <img src={tv} alt="tv" />
                        <p>TV</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${vehicleEquipment === "Bathroom"?"selected":""}`}
                        onClick={()=> setVehicleEquipment("Bathroom")}>
                        <img src={shower} alt="bathroom" />
                        <p>Bathroom</p>
                    </div>
            </div>
        </div>
                <div id="vehicleType" className="flex flex-col gap-4 items-start">
                <p>Vehicle Type</p>
                <div className="flex flex-wrap gap-2 md:gap-5">
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${vehicleType === "Van"?"selected":""}`}
                        onClick={()=> setVehicleType("Van")}>
                        <img src={vanIcon} alt="van" />
                        <p className='text-sm'>Van</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${vehicleType === "Fully integrated"?"selected":""}`}
                        onClick={()=> setVehicleType("Fully integrated")}>
                        <img src={fullyIcon} alt="fully" />
                        <p className='text-sm flex leading-tight'>Fully integrated</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${vehicleType === "Alcove"?"selected":""}`}
                        onClick={()=> setVehicleType("Alcove")}>
                        <img src={alcoveIcon} alt="alcove" />
                        <p className='text-sm'>Alcove</p>
                    </div>
            </div>
            </div>
            <button className="flex items-center justify-center bg-red-600 border rounded-3xl text-amber-50 w-22 h-10 p-2" onClick={handleSearch} >Search</button>
        </div>
        <div id="rightSection" className='flex flex-col justify-start w-2/3 bg-white '>
            {camperItems.length > 0 ? (
                <ul className='flex flex-col gap-4'>
                    {camperItems.map((camper)=>{
                        return(
                            <div key={camper.id} className='flex flex-col gap-2'>
                                <li  className='flex flex-row gap-4 items-start justify-start bg-white rounded-lg p-4'>
                                    <div className='imageSide w-1/2'>
                                        <img src={camper.gallery[0].thumb} alt="thumb" width="292px" height="320px"/>
                                    </div>
                                    <div className='textSide w-1/2'>
                                        <div className='flex flex-col justify-center items-start w-full max-w-[400px]'>
                                            <h2 className='text-2xl font-bold'>{camper.name}</h2>
                                            <div className='flex flex-row gap-2 items-center'>
                                                <p>Reviews</p>
                                                <p>{camper.location}</p>
                                            </div>
                                            <p className={`${expanded ? "": "truncate"} cursor-pointer flex w-full`} onClick={()=>{setExpanded(!expanded)}}>{camper.description}</p>
                                            <div className='features flex flex-row justify-start items-center gap-2 w-full flex-wrap'>
                                                {camper.AC===true &&(
                                                    <div className='featuresdiv'>
                                                        <img src={wind} alt="ac" />
                                                        <p>AC</p>
                                                    </div>)}
                                                {camper.transmission==="automatic" &&(
                                                    <div className='featuresdiv'>
                                                        <img src={diagram} alt="diagram" />
                                                        <p>Automatic</p>
                                                    </div >)}
                                                {camper.bathroom===true &&(<div className='featuresdiv'>
                                                    <img src={shower} alt="shower" />
                                                    <p>Bathroom</p>
                                                </div>)}
                                                {camper.kitchen===true &&(
                                                    <div className='featuresdiv'>
                                                        <img src={cupHot} alt="cupHot" />
                                                        <p>Kitchen</p>
                                                    </div>)}
                                                {camper.engine==="petrol" ? (<div className='featuresdiv'>
                                                    <img src={petrol} alt="petrol" />
                                                    <p>Petrol</p>
                                                </div>): (<div className='featuresdiv'>
                                                    <img src={petrol} alt="petrol" />
                                                    <p>Gas</p>
                                                </div>)}
                                            </div>
                                            <Link to={`/catalog/${camper.id}/details`} className='button flex items-center justify-center'>Show more</Link>
                                        </div>
                                        
                                    </div>
                                </li>
                            </div>
                            )
               }
                    )}
                </ul>
            ):(
                <p>No campers,try again</p>
            )}

        </div>
    </div>
    </>

  )
}

export default CatalogPage;