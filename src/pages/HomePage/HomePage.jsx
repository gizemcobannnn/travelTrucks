import Picture from '../../assets/Picture.svg';
const HomePage = () => {
  return (
      <div style={{backgroundImage: `url(${Picture})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} 
        className="flex w-full h-auto pl-20 min-h-[600px]  " >
        <div className="flex flex-col justify-center items-start gap-3 bg-opacity-50">
            <p className='text-3xl font-bold text-slate-50'>Campers of your dream</p>
            <p className='text-xl font-bold text-slate-50'>You can find everything you want in our catalog</p>
            <button className='view bg-red-500 border-b  border-amber-50 text-slate-50 !w-40 !p-6 flex items-center justify-center'>View Now</button>
        </div>
    </div>
  )
}
export default HomePage;