import Picture from '../../assets/Picture.svg';
const HomePage = () => {
  return (
      <div style={{backgroundImage: `url(${Picture})`}} className="h-60 w-full" >
        <div className="flex flex-col justify-center items-start h-full gap-3 bg-opacity-50">
            <p>Campers of your dream</p>
            <p>You can find everything you want in our catalog</p>
            <button className='bg-red-500 border-b  border-amber-50 text-slate-50 w-45 flex items-center justify-center'>View Now</button>
        </div>
    </div>
  )
}
export default HomePage;