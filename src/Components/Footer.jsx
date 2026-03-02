export default function Footer(){

return(

<>

<footer className="bg-slate-800 w-full  flex-wrap flex justify-between items-center  px-20 h-auto  py-2">

{/* left side  */}
<div className=" text-white/80 ">

    <h3>© 2026 <a href="#" className="text-white" target="_blank">SakthiBlog.</a> All rights reserved.</h3>
</div>



{/* right side */}
<div className=" flex py-3 space-x-6">

<a href="https://www.facebook.com/profile.php?id=100028829837491" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" className="text-white opacity-50" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path strokeDasharray="24" strokeDashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"><animate fill="freeze" attributeName="strokeDashoffset" dur="0.4s" values="24;0"></animate></path><path strokeDasharray="8" strokeDashoffset="8" d="M8 12h7"><animate fill="freeze" attributeName="strokeDashoffset" begin="0.5s" dur="0.2s" values="8;0"></animate></path></g></svg>
    </a>

    <a href="https://www.linkedin.com/in/deva-web/" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" className="text-white opacity-50" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0" clipRule="evenodd"></path></svg>
     </a>


<a href="https://www.instagram.com/deva__0701/" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white opacity-50" width="25" height="25" viewBox="0 0 24 24"><circle cx="17" cy="7" r="1.5" fill="currentColor" fillOpacity="0"><animate fill="freeze" attributeName="fillOpacity" begin="1.3s" dur="0.15s" values="0;1"></animate></circle><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="72" strokeDashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"><animate fill="freeze" attributeName="strokeDashoffset" dur="0.6s" values="72;0"></animate></path><path strokeDasharray="28" strokeDashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"><animate fill="freeze" attributeName="strokeDashoffset" begin="0.7s" dur="0.6s" values="28;0"></animate></path></g></svg>
      </a>


</div>

</footer>


</>

);

}