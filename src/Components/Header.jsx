import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header(){

   const [open, setOpen] = useState(false)
return(

<>
<nav  className="bg-slate-800 w-full  flex-wrap flex justify-between items-center  px-20 h-auto border border-t-gray-200 py-2.5">

{/* left side content */}
<div className="logo py-2 text-white/50">
    <h3 className="cursor-pointer text-white/80 text-lg">Sakthi Blog</h3>
</div>

{/* right side content */}
<ul className=" hidden md:flex  space-x-10 py-2  text-lg text-white/50">
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="/blog">Blog</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
</ul>

{/* three lines  */}

<div onClick={() => setOpen(!open)} className=" md:hidden cursor-pointer flex flex-col w-8 h-6  justify-between">
  <span className="h-1 block bg-white  rounded"></span>
  <span className="block h-1 bg-white rounded"></span>
  <span className="block h-1 bg-white  rounded"></span>
</div>

{/* mobile view */}
 {open && (
      
        <ul className=" justify-center flex flex-col text-white/80 text-lg  hover:white/50 items-center w-full  gap-4 mt-4 md:hidden">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      )}


</nav>





</>

);


}