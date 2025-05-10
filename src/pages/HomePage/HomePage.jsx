
const HomePage = () => {
  return (
      <div className="bg-[url('/assets/Picture.png')] bg-cover bg-no-repeat h-64 w-full" >
        <div className="flex flex-col justify-center items-start h-full gap-3 bg-black bg-opacity-50">
            <p>Campers of your dream</p>
            <p>You can find everything you want in our catalog</p>
            <button className='bg-red-500 border-b  border-amber-50 text-slate-50 w-45'>View Now</button>
        </div>
    </div>
  )
}
export default HomePage;