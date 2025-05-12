import vanIcon from '../../assets/bi_grid-1x2.svg';
import fullyIcon from '../../assets/bi_grid.svg';
import alcoveIcon from '../../assets/bi_grid-3x3-gap.svg';
import cupHot from '../../assets/cup-hot.svg';
import diagram from '../../assets/diagram.svg';
import shower from '../../assets/ph_shower.svg';
import tv from '../../assets/tv.svg';
import wind from '../../assets/wind.svg';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/campersOps';
const CatalogPage=()=>{
   // const [location, setLocation] = useState('');
   // const [vehicleType, setVehicleType] = useState('');
   // const [vehicleEquipment, setVehicleEquipment] = useState('');
   // const [campers, setCampers] = useState([]);
    const dispatch = useDispatch();
    let campers = []
    const handleSearch = (e) => {
    e.preventDefault();
     campers=dispatch(fetchCampers(e.target.value));
    };

  return (
    <>
    <div className='flex flex-row justify-around items-start flex-wrap w-full'>
        <div id="leftSection" className="flex flex-col gap-4 items-start w-1/3">
            <div className="flex flex-col gap-5 items-start">
                <p className="text-slate-500">Location</p>
                <input type="select" placeholder="Kyiv, Ukraine"></input>
            </div>
            <div id="vehicleType" className="flex flex-col gap-6 items-start">
                <p className="text-slate-500">Filters</p>
                <p>Vehicle Equipment</p>
                <div className="grid grid-cols-3 grid-rows-2  gap-2 md:gap-5">
                    <div className='w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950'>
                        <img src={wind} alt="ac" />
                        <p>AC</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950'>
                        <img src={diagram} alt="auto" />
                        <p>Automatic</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950'>
                        <img src={cupHot} alt="cup" />
                        <p>Kitchen</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950'>
                        <img src={tv} alt="tv" />
                        <p>TV</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950'>
                        <img src={shower} alt="bathroom" />
                        <p>Bathroom</p>
                    </div>
            </div>
        </div>
                <div id="vehicleType" className="flex flex-col gap-4 items-start">
                <p>Vehicle Type</p>
                <div className="flex flex-wrap gap-2 md:gap-5">
                    <div className='w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950'>
                        <img src={vanIcon} alt="van" />
                        <p className='text-sm'>Van</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950'>
                        <img src={fullyIcon} alt="fully" />
                        <p className='text-sm flex leading-tight'>Fully integrated</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col items-center justify-center bg-slate-100 rounded-lg text-slate-950'>
                        <img src={alcoveIcon} alt="alcove" />
                        <p className='text-sm'>Alcove</p>
                    </div>
            </div>
            </div>
            <button className="flex items-center justify-center bg-red-600 border rounded-3xl text-amber-50 w-22 h-10 p-2" onSubmit={handleSearch}>Search</button>
        </div>
        <div id="rightSection" className='flex flex-col justify-start w-2/3 '>
            {campers.length > 0 ? (
                <ul className='flex flex-col gap-4'>
                    {campers.map((camper,index)=>{
                        <li key={index}>{camper}</li>
                    })}
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