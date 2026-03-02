import { useState } from "react";


export default function AddBlog(){

const [blog, setBlog] = useState({
  title: "",
  publishDate: "",
  category: "",
  authorName: "",
  tags: "",
  status: "",
  blogContent: ""
});

const handledata = (e) => {

      e.preventDefault();

    //   old blogs
       const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    //    add  new one
      const updatedBlogs = [...existingBlogs, blog];

 localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
 
}

return(

    <>
    <div className="w-full min-h-[80.5vh] bg-gray-500  flex justify-center items-center   ">

         <form className="bg-amber-300 gap-5  flex-col rounded-lg h-[70vh] flex justify-center items-center w-full max-w-lg" >

            <div>
              <h3 className="text-2xl font-semibold">Create New Blog</h3>
            </div>
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4  ">

        
            


            <div className="flex flex-col py-1 space-x-3 ">
                <label className="text-xs" htmlFor="name">Blog Title</label>
                <input onChange={(e)=> setBlog({...blog,title: e.target.value})} className="bg-red-400 outline-none rounded-lg py-2 px-3" type="text" name="name" id="name" aria-label="name" />
            </div>

             <div className="flex flex-col py-1 space-x-3 ">
                <label className="text-xs" htmlFor="date">Publish Date</label>
                <input className="bg-red-400 outline-none rounded-lg py-2 px-3" type="text" name="date" id="date" aria-label="date" />
            </div>


         
            <div className="flex flex-col pt-1.5 space-x-3 ">
                <label className="text-xs" htmlFor="name">Category</label>
                <select onChange={(e)=> setBlog({...blog,category: e.target.value})} className="py-2 px-3 bg-red-400 outline-none rounded" name="Category" id="Category">
                <option value="">Web Development</option>
                <option value="">App Development</option>
                <option value="">Develops</option>
                <option value="">Networking</option>
                <option value="">Database Management</option>

                </select>
            </div>  


            <div className="flex flex-col py-1 space-x-3 ">
                <label className="text-xs" htmlFor="authorname">Author Name</label>
                <input onChange={(e)=> setBlog({...blog,authorName: e.target.value})}  className="bg-red-400 outline-none rounded-lg py-2 px-3" type="text" name="authorname" id="authorname" aria-label="authorname" />
            </div>

             <div className="flex flex-col py-1 space-x-3 ">
                <label className="text-xs" htmlFor="tags">Tags</label>
                <input onChange={(e)=> setBlog({...blog,tags: e.target.value})} className="bg-red-400 outline-none rounded-lg py-2 px-3" type="text" name="tags" id="tags" aria-label="tags" />
            </div>

            
             <div className="flex flex-col py-1 space-x-3 ">
                <label className="text-xs" htmlFor="tags">Status</label>
                <input onChange={(e)=> setBlog({...blog,status: e.target.value})} className="bg-red-400 outline-none rounded-lg py-2 px-3" type="text" name="status" id="status" aria-label="status" />
            </div>
           

                  <div className="flex flex-col col-span-full py-1 space-x-3  ">
                <label className="text-xs" htmlFor="Blog Content">Blog Content</label>
                <textarea 
                onChange={(e)=> setBlog({...blog,blogContent: e.target.value})} className="bg-red-400 outline-none rounded-lg py-2 px-3" type="textarea" name="Blog Content" id="Blog Content" aria-label="Blog Content">
                </textarea>


                <div className=" flex justify-center items-center pt-3">
                    <button onClick={handledata} className="px-3 py-2 hover:bg-red-300 bg-red-400 rounded  cursor-pointer active:scale-95 transition-all ease-in-out duration-300 "  type="submit">



                    submit </button>
                </div>



                            </div>

           


        
    </div>



         </form>


    </div>
    
    </>
);

}