import {NavLink} from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center justify-between h-15 px-8 bg-[#f6f4f4] w-full fixed top-0 left-0 z-50 mb-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <p className="text-slate-950 font-bold text-xl">Travel</p>
        <p className="text-slate-600 font-bold text-xl">Trucks</p>
      </div>

      {/* Navigation */}
      <nav className="flex items-center absolute left-1/2 -translate-x-1/2 gap-6">
        <NavLink to="/" className="text-orange-500 font-medium cursor-pointer hover:text-orange-600 transition">Home</NavLink>
        <NavLink  to="/catalog" className="text-slate-900 font-medium cursor-pointer hover:text-orange-500 transition">Catalog</NavLink>
      </nav>
    </header>
  );
};

export default Header;
