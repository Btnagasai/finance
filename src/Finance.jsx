
const Finance = () =>{
return(
    <div>
        <div className="grid  justify-center items-center h-screen max-w-full m-auto  bg-[#f8f5f0]">
            
            <div className="grid grid-cols-8  grid-rows-4 gap-6 shadow-2xl shadow-black p-5">
                <div className="row-span-10 rounded-e-3xl bg-black shadow-2xl shadow-black  text-white text-[30px] pl-5 pt-5 font-bold font-public-sans  "> finance</div>
                <div className="col-span-6 rounded-xl text-[32px] font-bold font-public-sans pt-5  mt-16">Overview</div>
                <div className="col-span-2 rounded-xl shadow-2xl shadow-black p-[50px] bg-black"></div>
                <div className="col-span-2 rounded-xl shadow-2xl shadow-black  bg-white"></div>
                <div className="col-span-2 rounded-xl shadow-2xl shadow-black bg-white"></div>
               
                     <div className="bg-white col-span-3  row-span-1 font-public-sans p-4  text-[30px]  shadow-2xl shadow-black font-bold  rounded-2xl pt-4 text-black">Post
                    <span className="grid grid-cols-2 items-center justify-center text-black gap-5 ">
                        <span className="bg-[#f8f5f0] shadow shadow-black p-2 w-[200px] h-28 ml-14 rounded-2xl"></span>
                      
                        <span className=" p-2 w-[200px] h-28 rounded-2xl "></span>
                    </span>
                
                </div>
                <div className="col-span-3 rounded-xl row-span-2 shadow-2xl shadow-black bg-white"></div>
                <div className="col-span-3  rounded-xl row-span-7 shadow-2xl shadow-black bg-white"></div>
                <div className="col-span-3 rounded-xl row-span-6 shadow-2xl shadow-black bg-white"></div>
             
               </div> 
            </div>

      </div>
   
)
}
export default Finance