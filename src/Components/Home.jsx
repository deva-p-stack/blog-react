import { useEffect } from "react";

export default function Home(){


 useEffect(() => {
    document.title = "Home page"; 
  }, []);

return(

<>

<div className="w-full min-h-[80.5vh] bg-red-700 ">
     <h3>Home Page Content</h3>




</div>

</>

);


}