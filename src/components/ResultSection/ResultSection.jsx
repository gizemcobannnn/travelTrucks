import cupHot from '../../assets/cup-hot.svg';
import diagram from '../../assets/diagram.svg';
import shower from '../../assets/ph_shower.svg';
import wind from '../../assets/wind.svg';
import petrol from '../../assets/Group.svg';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { setFavorites } from '../../redux/campers/camperSlice';



export default function ResultSection() {

    const [expanded, setExpanded] = useState(false);
    const [visibleCount, setVisibleCount] = useState(4);
    const loading = useSelector((state)=>state.trucks.loading);
    const error = useSelector((state)=>state.trucks.error);
    const favorites = useSelector((state)=>state.trucks.favorites);
    const dispatch = useDispatch();
        const loadMore = () => {
            setVisibleCount((prev)=>prev+4)
        }
          const camperItems = useSelector(state => state.trucks.campers); 
    
        const toggleFavorite = (id) => {
          dispatch(setFavorites(id));
        };

  return (
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
  )
}
