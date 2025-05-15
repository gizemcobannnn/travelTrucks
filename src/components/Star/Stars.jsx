import Rating from "react-rating";


export default function Stars({stars}) {
  return (
    <div className="flex flex-row gap-20">
      <Rating className="text-yellow-500 text-[10px]"
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        initialRating={stars}
        readonly
      />
    </div>
  )
}
