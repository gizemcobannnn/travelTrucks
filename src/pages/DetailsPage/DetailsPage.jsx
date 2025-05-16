import { useParams } from "react-router-dom";
import { fetchCamper } from "../../redux/campers/campersOps";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Features from "../../components/Features/Features";
import Stars from "../../components/Star/Stars"
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
const DetailsPage=() =>{
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCamper(id));
    },[dispatch, id]);

    const camper = useSelector(state => state.trucks.camper);
    console.log(camper);
    const [activeTab, setActiveTab] = useState("features");
  return (
    <>
    <div className="flex flex-col gap-5 justify-start items-start mt-25 pl-10">
        <h1 className="text-2xl font-bold">{camper.name}</h1>
        <div className="flex flex-row gap-5">
                   {/**  <Stars rating={camper.rating} /> */}
                    <p>{camper.location}</p>
        </div>
        <div className="text-2xl font-bold">$ {camper.price}</div>
        <div className="flex flex-row justify-between w-full">
            {camper && camper.gallery && (
                <ul className="flex flex-row justify-between w-full">{camper.gallery.map((image,index)=>{
                return(
                    <li  className="flex h-80 w-90 overflow-hidden rounded-lg" key={index}>
                        <img src={image.original} alt="camper" className="w-full h-full object-cover" />
                    </li>
                )
            }
            )}
            </ul>
            )}
        </div>
        <p>{camper.description}</p>
    </div>
    <div className="flex flex-row justify-start gap-10 flex-wrap font-bold mb-8 pl-6">
        <button className={`${activeTab==="features"? "text-black !border-b-4  !border-red-500" : "text-gray"} tab`} onClick={()=>{setActiveTab("features")}}>Features</button>
        <button className={`${activeTab==="reviews" ? "text-black !border-b-4  !border-red-500" : "text-gray"} tab`} onClick={()=>{setActiveTab("reviews")}}>Reviews</button>
    </div>
    <div className="flex flex-row flex-wrap justify-between md:flex-nowrap">
        <div className="flex flex-col flex-wrap gap-5 bg-white">
            {activeTab==="features" && (<Features />)}
            {activeTab==="reviews" && (<ReviewsSection />)}
        </div>
 -

        <div className="comments flex flex-col items-start gap-1 p-10 border border-gray-200 rounded-lg w-1/2">
            <h3 className="font-bold text-xl">Book your campervan now</h3>
            <p className="text-slate-500">Stay connected! We are always ready to help you.</p>
            <form action="" className="flex flex-col gap-2 mt-3 ml-2 w-full">
                <input type="text" placeholder="Name*"/>
                <input type="text" placeholder="Email*" />
                <input type="text" placeholder="Booking date*" />
                <textarea rows="4" placeholder="Comment*" />
                <div className="flex justify-center w-full">
                    <button className="bg-red-500 text-slate-50 flex items-center justify-center">Send</button>
                </div>
            </form>
        </div>
    </div>

    </>
  )
}

export default DetailsPage;