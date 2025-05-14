import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ rating }) => {
  const totalStars = 5;
  const safeRating = Math.min(Math.max(rating, 0), 5); // 0-5 arası sınırla
  const filledStars = Math.floor(safeRating);
  const hasHalfStar = safeRating - filledStars >= 0.5;

  // Negatif ihtimal kalmaması için:
  let emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);
  if (emptyStars < 0) emptyStars = 0;

  return (
    <div className="flex">
      {[...Array(filledStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-400" />
      ))}

      {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}

      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-gray-400" />
      ))}
    </div>
  );
};

export default Stars;
