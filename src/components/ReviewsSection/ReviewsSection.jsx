import { useSelector } from "react-redux"
export default function ReviewsSection() {
    const camper = useSelector(state => state.trucks.camper)
  return (
    <div className="flex flex-col gap-5 justify-center flex-wrap p-12 w-full ">     
        <ul className="flex flex-col gap-7 justify-start items-start">
            {camper.reviews && camper.reviews.map((review,index)=>
                (
                    <li className="flex flex-row gap-5" key={index}>
                        <div className="flex flex-col items-center gap-2">
                            <div className="border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-200">{review.reviewer_name.charAt(0)}</div>
                            <p>{review.reviewer_rating}</p>
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
