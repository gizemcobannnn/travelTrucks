

import { useEffect } from "react";
import { fetchCampers } from '../../redux/campers/campersOps';

import { useSelector, useDispatch } from 'react-redux';
import FiltersSection from '../../components/FiltersSection/FiltersSection';
import ResultSection from "../../components/ResultSection/ResultSection";
const CatalogPage=()=>{

    const dispatch = useDispatch();

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



    
  return (
    <>
    <div className='flex flex-row justify-around items-start flex-wrap w-full mt-25 pl-10 pr-2'>
        <FiltersSection/>
        <ResultSection />
    </div>
    </>

  )
}

export default CatalogPage;