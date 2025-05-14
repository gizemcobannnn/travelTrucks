import { Link } from 'react-router-dom';
import Picture from '../../assets/Picture.svg';
const HomePage = () => {
  return (
      <div style={{backgroundImage: `url(${Picture})`}} 
        className="home flex h-screen w-screen bg-cover bg-no-repeat justify-start" >
        <div className="flex flex-col justify-center items-start gap-3 bg-opacity-50  pl-20">
            <p className='text-3xl font-bold text-slate-50'>Campers of your dream</p>
            <p className='text-xl font-bold text-slate-50'>You can find everything you want in our catalog</p>
            <Link to={`/catalog`}  className='view button bg-red-500 border-b  border-amber-50 text-slate-50 !w-40 !p-6 flex items-center justify-center'>View Now</Link>
        </div>
    </div>
  )
}
export default HomePage;