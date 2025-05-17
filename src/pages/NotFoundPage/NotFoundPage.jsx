import { LuSearchX } from "react-icons/lu";

function NotFoundPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-gray-500">
        <p className="text-slate-950 text-2xl">Not found page! Try home, campers and details</p>
        <LuSearchX className="text-6xl mt-5"></LuSearchX>

    </div>
  )
}

export default NotFoundPage;