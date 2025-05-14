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
        <div className="flex flex-col gap-2 justify-center flex-wrap pl-14 pt-2 w-full ">
            <div className="flex gap-2 flex-row justify-start flex-wrap mb-3">
            {camper.AC===true &&(
                <div className='flex featuresdiv'>
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

        <div className="flex flex-col gap-5 justify- flex-wrap">
        <p className="text-xl font-bold border-b  border-gray-300 pb-5">Vehicle Details</p>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Form</p>
            <p>{camper.form}</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Length</p>
            <p>{camper.length}</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Width</p>
            <p>{camper.width}</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Height</p>
            <p>{camper.height}</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Tank</p>
            <p>{camper.tank}</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Consumption</p>
            <p>{camper.consumption}</p>
        </div>
        </div></div>
    </>
  )
}
