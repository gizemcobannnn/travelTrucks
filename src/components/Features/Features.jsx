import { useSelector } from "react-redux"

import cupHot from '../../assets/cup-hot.svg';
import diagram from '../../assets/diagram.svg';
import shower from '../../assets/ph_shower.svg';
import wind from '../../assets/wind.svg';
import petrol from '../../assets/Group.svg';
export default function Features() {
    const camper = useSelector(state => state.trucks.camper);

  return (
    <>
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
    
    </>
  )
}
