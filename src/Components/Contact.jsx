import { useEffect } from "react";

export default function Contact(){


     useEffect(() => {
        document.title = "Contact Page"; 
      }, []);

return(
<>
<div className="w-full min-h-[80.5vh] bg-amber-500 ">
     <h3>Contact Page Content</h3>




</div>
</>
);



}