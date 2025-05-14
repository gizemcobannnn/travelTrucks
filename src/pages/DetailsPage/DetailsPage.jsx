import { useParams } from "react-router-dom";
import { fetchCamper } from "../../redux/campers/campersOps";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const DetailsPage=() =>{
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCamper(id));
    },[dispatch, id]);

    const camper = useSelector(state => state.trucks.camper);
    console.log(camper);
  return (
    <>
    <div className="flex flex-col gap-5 justify-start items-start mt-20">
        <h1 className="text-2xl font-bold">{camper.name}</h1>
        <div className="flex flex-row gap-5">
                    <p>starts</p>
                    <p>{camper.location}</p>
        </div>
        <div className="text-2xl font-bold">$ {camper.price}</div>
        <div className="flex flex-row justify-between w-full">
            {camper && camper.gallery && (
                <ul className="flex flex-row justify-between w-full">{camper.gallery.map((image,index)=>{
                return(
                    <li  className="flex h-80 w-90 overflow-hidden rounded-lg" key={index}>
                        <img src={image.thumb} alt="camper" className="w-full h-full object-cover" />
                    </li>
                )
            }
            )}
            </ul>
            )}
        </div>
        <p>{camper.description}</p>
    </div>
    <div className="flex flex-row justify-start gap-10 flex-wrap mb-8">
        <p>Features</p>
        <p>Reviews</p>
    </div>
    <div className="flex flex-row justify-between flex-wrap">
        <div className="flex flex-col flex-wrap gap-5">
            <div className="flex flex-row gap-5 justify-between flex-wrap">
            <div className="featuresdiv">
                Automatic
            </div>
            <div className="featuresdiv">
                AC
            </div>
            <div className="featuresdiv">
                Petrol
            </div>
            <div className="featuresdiv">
                Kitchen
            </div>
            <div className="featuresdiv">
                Radio
            </div>
            </div>

        <div className="flex flex-col gap-5 justify- flex-wrap">
        <p>Vehicle Details</p>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Form</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Length</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Width</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Height</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Tank</p>
            <p>2</p>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
            <p>Consumption</p>
            <p>2</p>
        </div>
        </div>
    </div>
    {
        <div>
            <div className="flex flex-row">
                <img src="" alt="" />
                <div className="flex flex-col">
                    <p></p>
                    <div></div>
                </div>
            </div>
            <p className="comment"></p>
        </div>
    }

    <div className="comments flex flex-col items-start gap-1">
        <h3 className="font-bold text-xl">Book your campervan now</h3>
        <p className="text-slate-500">Stay connected! We are always ready to help you.</p>
        <form action="" className="flex flex-col gap-2 mt-3 ml-2 w-full">
            <input type="text" placeholder="Name*"/>
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Booking date*" />
            <input type="text" placeholder="Comment*"/>
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