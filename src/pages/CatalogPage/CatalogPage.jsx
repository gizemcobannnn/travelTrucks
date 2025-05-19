import vanIcon from '../../assets/bi_grid-1x2.svg';
import fullyIcon from '../../assets/bi_grid.svg';
import alcoveIcon from '../../assets/bi_grid-3x3-gap.svg';
import cupHot from '../../assets/cup-hot.svg';
import diagram from '../../assets/diagram.svg';
import shower from '../../assets/ph_shower.svg';
import tv from '../../assets/tv.svg';
import wind from '../../assets/wind.svg';
import petrol from '../../assets/Group.svg';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { fetchCampers } from '../../redux/campers/campersOps';
import {setFilters} from '../../redux/campers/camperSlice'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
const CatalogPage=()=>{

    const [expanded, setExpanded] = useState(false);
    const [visibleCount, setVisibleCount] = useState(4);
    const [favorites,setFavorite] = useState([]);

    const dispatch = useDispatch();
    const loading = useSelector((state)=>state.trucks.loading);
    const error = useSelector((state)=>state.trucks.error);
    const filters = useSelector((state)=>state.trucks.filters)
    
    useEffect(() => {
      const fetchData = async () => {
        try {
            await dispatch(
            fetchCampers({
              location: filters.location,
              vehicleType: filters.vehicleType,
              vehicleEquipment: filters.vehicleEquipment,
            })
          ).unwrap();
          console.log(filters)
        } catch (err) {
          throw new Error(`Fetching campers failed: ${err.message}`);
        }
      };
      fetchData();
    }, [dispatch]);
    const toggleFavorite = (id) => {
        if(favorites.includes(id)){
            setFavorite(favorites.filter((favid)=>favid !== id))
        }else{
            setFavorite([...favorites,id])
        }
    };

    const toggleEquipment = (item) => {
      const isSelected = filters.vehicleEquipment.includes(item);
      const updatedEquipment = isSelected
        ? filters.vehicleEquipment.filter((e) => e !== item)
        : [...filters.vehicleEquipment, item];

      dispatch(setFilters({ ...filters, vehicleEquipment: updatedEquipment }));
    };

    const toggleType = (item) => {
      const isSelected = filters.vehicleType.includes(item);
      const updatedType = isSelected
        ? filters.vehicleType.filter((e) => e !== item)
        : [...filters.vehicleType, item];

      dispatch(setFilters({ ...filters, vehicleType: updatedType }));
    };


    const loadMore = () => {
        setVisibleCount((prev)=>prev+4)
    }
      const camperItems = useSelector(state => state.trucks.campers); 

    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        await dispatch(
          fetchCampers({
            location:filters.location,
            vehicleEquipment:filters.vehicleEquipment,
            vehicleType:filters.vehicleType
          })
        ).unwrap();
        console.log(filters)
      } catch (e) {
        throw new Error(`Fetching campers failed: ${e.message}`);
      }
    };

    
  return (
    <>
    <div className='flex flex-row justify-around items-start flex-wrap w-full mt-25 pl-10'>
        <div id="leftSection" className="flex flex-col gap-4 items-start w-1/3">
            <div className="flex flex-col gap-5 items-start">
                <p className="text-slate-500">Location</p>
                <input type='text' placeholder='Enter the location' value={filters.location} list="location-list"  onChange={(e)=>dispatch(setFilters({...filters,location:e.target.value}))} />
            </div>

            <div id="filtersSection" className="flex flex-col gap-6 items-start">
                <p className="text-slate-500">Filters</p>

                <p>Vehicle Equipment</p>
                <div className="grid grid-cols-3 grid-rows-2  gap-2 md:gap-5">
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${filters.vehicleEquipment.includes("AC")?"selected":""}`}
                        onClick={()=> toggleEquipment("AC")}>
                        <img src={wind} alt="ac" />
                        <p>AC</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${filters.vehicleEquipment.includes("automatic")?"selected":""}`}
                        onClick={()=> toggleEquipment("automatic")}>
                        <img src={diagram} alt="auto" />
                        <p>Automatic</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${filters.vehicleEquipment.includes("kitchen")?"selected":""}`}
                        onClick={()=>  toggleEquipment("kitchen")}>
                        <img src={cupHot} alt="cup" />
                        <p>Kitchen</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${filters.vehicleEquipment.includes("TV")?"selected":""}`}
                        onClick={()=> toggleEquipment("TV")}>
                        <img src={tv} alt="tv" />
                        <p>TV</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${filters.vehicleEquipment.includes("bathroom")?"selected":""}`}
                        onClick={()=> toggleEquipment("bathroom")}>
                        <img src={shower} alt="bathroom" />
                        <p>Bathroom</p>
                    </div>
            </div>
        </div>
                <div id="vehicleType" className="flex flex-col gap-4 items-start">
                <p>Vehicle Type</p>
                <div className="flex flex-wrap gap-2 md:gap-5">
                    <div className={`w-20 h-20 flex flex-col items-center justify-center gap-1 bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${filters.vehicleType.includes("panelTruck")?"selected":""}`}
                        onClick={()=> toggleType("panelTruck")}>
                        <img src={vanIcon} alt="van" />
                        <p className='text-sm'>Van</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center gap-1 bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${filters.vehicleType.includes("fullyIntegrated")?"selected":""}`}
                        onClick={()=> toggleType("fullyIntegrated")}>
                        <img src={fullyIcon} alt="fully" />
                        <p className='text-sm text-center leading-tight' >Fully integrated</p>
                    </div>
                    <div className={`w-20 h-20 flex flex-col items-center justify-center gap-1 bg-slate-100 rounded-lg text-slate-950 cursor-pointer ${filters.vehicleType.includes("alcove")?"selected":""}`}
                        onClick={()=> toggleType("alcove")}>
                        <img src={alcoveIcon} alt="alcove" />
                        <p className='text-sm'>Alcove</p>
                    </div>
            </div>
            </div>
            <button className="flex items-center justify-center bg-red-600 border rounded-3xl text-amber-50 w-22 h-10 p-2" onClick={handleSearch} >Search</button>
        </div>
        <div id="rightSection" className='flex flex-col justify-start w-2/3 bg-white '>
            {error && !loading && (  <p className="text-red-600 text-lg p-4">{error}</p>)}
            {!loading && !error && (
                camperItems.length > 0 ? (
                <ul className='flex flex-col gap-4'>
                    {
                    camperItems.slice(0,visibleCount).map((camper)=>{
                        return(
                            <div key={camper.id} className='flex flex-col gap-2'>
                                <li  className='flex flex-row gap-4 items-start justify-start bg-white border border-gray-300 rounded-lg p-4'>
                                    <div className='imageSide'>
                                        <img src={camper.gallery[0].thumb}  className="w-[292px] h-[320px] object-cover rounded-xl" alt="thumb"/>
                                    </div>
                                    <div className='textSide w-1/2'>
                                        <div className='flex flex-col justify-center items-start w-full max-w-[400px]'>
                                            <div className='flex flex-row justify-between items-center w-full'>
                                                <h2 className='text-2xl font-bold'>{camper.name}</h2>
                                                <div className='flex flex-row gap-1 items-center'>
                                                    <h2 className='text-2xl font-bold'>€{camper.price}</h2>
                                                    {favorites.includes(camper.id) ? (
                                                        <MdFavorite className={`h-7 w-7 font-light text-amber-300 cursor-pointer`} onClick={()=>toggleFavorite(camper.id)} />
                                                    ):(
                                                        <MdFavoriteBorder className={`h-7 w-7 font-light text-black cursor-pointer`} onClick={()=>toggleFavorite(camper.id)} />

                                                    )}
                                                </div>

                                            </div>

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
                                            
                                            <Link to={`/catalog/${camper.id}/details`} 
                                                className='button flex !flex-row items-center justify-center'>                                        
                                                Show more
                                            </Link>

                                        </div>
                                        
                                    </div>
                                </li>
                            </div>
                            )
               }
                    )}
                </ul>

            ):(
                <div className='flex justify-center items-center'>
                    <p className='text-2xl text-red-600 mt-60 '>There is no camper according to filters. Try different filters.</p>
                </div>
            )
            ) }
            {visibleCount < camperItems.length && (
                <div className='flex justify-center items-center'>
                    <button onClick={loadMore} className='!text-slate-900 !bg-white flex !border !border-gray-300 mb-2 !flex-row items-center justify-center'>Load More</button>
                </div>
            )}
        </div>
    </div>
    </>

  )
}

export default CatalogPage;