import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {

  const [blogs ] = useState(() => {
    const storedBlogs = localStorage.getItem("blogs");
    console.log(JSON.parse(localStorage.getItem("blogs")));
    return storedBlogs ? JSON.parse(storedBlogs) : [];
  });

  return(
  <>
  <div className="w-full min-h-[80.5vh] bg-blue-500">

    <div className="w-full  py-10">
      <div className="flex flex-col items-center justify-center space-y-5">

        <h3 className="text-lg">Sakthi Blog – Tamil Tech & Tips</h3>

        <div className="flex space-x-10">
          <input className="bg-red-700 px-3 rounded-lg py-2 outline-none" type="search" />
          <button className="px-5 py-2 bg-red-400 rounded-lg">Search</button>

          <Link to="/add-blog">
            <button className="px-5 py-2 bg-red-400 rounded-lg">
              Add Blog
            </button>
          </Link>
        </div>

      </div>
    </div>
      

  <div className=" w-full   flex gap-5 px-5  items-center">

  {blogs.map((item)=>(

    //  title: "",
  // publishDate: "",
  // category: "",
  // authorName: "",
  // tags: "",
  // status: "",
  // blogContent: ""

    <div className="bg-red-800 p-5 rounded-lg " >
            <h3>{item.title}</h3>
            <p>{item.blogContent}</p>
            <p>{item.tags}</p>
            <p>{item.blogContent}</p>
            <p>{item.status}</p>
            <p>{item.authorName}</p>
            <p>{item.publishDate}</p>
            
          </div>


  ))}



  </div>    
      
      
      {/* container end below */}
      </div>





  {/* card container card below */}


  </>
  );

  }