import vanIcon from '../../assets/bi_grid-1x2.svg';
import fullyIcon from '../../assets/bi_grid.svg';
import alcoveIcon from '../../assets/bi_grid-3x3-gap.svg';
import tv from '../../assets/tv.svg';
import {setFilters} from '../../redux/campers/camperSlice'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/campersOps';
import cupHot from '../../assets/cup-hot.svg';
import diagram from '../../assets/diagram.svg';
import shower from '../../assets/ph_shower.svg';
import wind from '../../assets/wind.svg';
export default function FiltersSection() {
const dispatch = useDispatch();
const filters = useSelector(state=>state.trucks.filters);
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
            <div id="leftSection" className="flex flex-col gap-4 items-start w-1/3">
                <div className="flex flex-col gap-2 items-start">
                    <p className="text-slate-500">Location</p>
                    <input type='text' placeholder='🗺 Enter the location' value={filters.location} list="location-list"  onChange={(e)=>dispatch(setFilters({...filters,location:e.target.value}))}
                      className='bg-slate-100 p-1 rounded-lg' />
                </div>
    
                <div id="filtersSection" className="flex flex-col gap-3 items-start">
                    <p className="text-slate-500 mt-1">Filters</p>
    
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
                    <div id="vehicleType" className="flex flex-col gap-3 items-start">
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
  )
}
