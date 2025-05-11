import vanIcon from '../../assets/bi_grid-1x2.svg';
import fullyIcon from '../../assets/bi_grid.svg';
import alcoveIcon from '../../assets/bi_grid-3x3-gap.svg';
import cupHot from '../../assets/cup-hot.svg';
import diagram from '../../assets/diagram.svg';
import shower from '../../assets/ph_shower.svg';
import tv from '../../assets/tv.svg';
import wind from '../../assets/wind.svg';

const CatalogPage=()=>{
  return (
    <>
        <div id="leftSection" className="flex flex-col gap-4 items-start">
            <div className="flex flex-col gap-4 items-start">
                <p className="text-slate-500">Location</p>
                <input type="select" placeholder="Kyiv, Ukraine"></input>
            </div>
            <div id="vehicleType" className="flex flex-col gap-4 items-start">
                <p className="text-slate-500">Filters</p>
                <p>Vehicle Equipment</p>
                <div className="flex flex-wrap gap-2">
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
                <div className="flex flex-wrap gap-2">
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
            <button className="flex bg-red-600 text-amber-50 w-22 h-10 p-2">Search</button>
        </div>
        <div id="rightSection">

        </div>
    </>

  )
}

export default CatalogPage;