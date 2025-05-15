import { useSelector } from "react-redux"
import Stars from "../Star/Stars"
export default function ReviewsSection() {
    const camper = useSelector(state => state.trucks.camper)
  return (
    <div className="flex flex-col gap-5 justify-center flex-wrap p-12 w-full ">     
        <ul className="flex flex-col gap-7 justify-start items-start">
            {camper.reviews && camper.reviews.map((review,index)=>
                (
                    <li className="flex flex-col items-start justify-center gap-5" key={index}>
                        <div className="flex flex-row gap-5">
                            <div className="border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-200 text-red-700 font-bold">{review.reviewer_name.charAt(0)}</div>
                            <div className="flex flex-col gap-2">
                            <p>{review.reviewer_name}</p>
                            <Stars stars={review.reviewer_rating} />
                        </div>
                        </div>
                        <div className="flex flex-col">
                            {review.comment}
                        </div>
                    </li>
                )
            )}
            <img src="" alt="" />
            <div className="flex flex-col">
                <p></p>
                <div></div>
            </div>
        </ul>
        <p className="comment"></p>
    </div>
  )
}
