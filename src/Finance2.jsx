function Finance2(){
    return(
        <div className="grid   gap-4 bg-[#f8f5f0] items-center  min-h-screen justify-center  m-auto ">
            <div className="grid grid-cols-4 grid-rows-6 shadow-md md:shadow-2xl shadow-black  gap-4 p-5 ">
            <div className="row-span-8 hidden md:block bg-black  shadow-2xl rounded-e-3xl shadow-black text-white  text-left pt-14 pl-10 font-public-sans text-[30px] font-bold">finance
                
            </div>
            {/* overview */}
            <div className="col-span-6 md:col-span-3 font-public-sans mt-10  text-[30px]">Overview</div>
            {/* first 3 cols */}
            <div className="col-span-2 md:col-span-1 bg-black shadow-2xl rounded-2xl shadow-black p-10"></div>
            <div className="col-span-2 md:col-span-1 bg-white shadow-2xl rounded-2xl shadow-black p-10"></div>
            <div className="col-span-2 md:col-span-1 bg-white shadow-2xl rounded-2xl shadow-black p-10"></div>
            {/* post box */}
            <div className="col-span-6 md:col-span-2 row-span-2 shadow-2xl rounded-2xl shadow-black bg-white p-10 font-public-sans text-[25px]">Post
            <span className="grid grid-cols-2 items-center justify-center text-black gap-5 ">
                        <span className="bg-[#f8f5f0] shadow shadow-black p-2 w-[200px] h-28 ml-14 rounded-2xl"></span>
                      
                        <span className=" p-2 w-[200px] h-28 rounded-2xl "></span>
                    </span>
            </div>

            <div className="row-span-4 md:row-span-3 col-span-2 md:col-span-1 bg-white shadow-2xl rounded-2xl shadow-black p-10"></div>
            <div className="col-span-4 md:col-span-2  row-span-4 shadow-2xl rounded-2xl shadow-black bg-white p-10"></div>
            <div className="row-span-3 col-span-5 md:col-span-1 bg-white shadow-2xl rounded-2xl shadow-black p-10"></div>
</div>
        </div>
    )
}
export default Finance2