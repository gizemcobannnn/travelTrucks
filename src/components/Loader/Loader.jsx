import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#4fa94d" size={100} />
    </div>
  )
}

export default Loader;