"use client"

const Navbar = ()=>{
    return(
        <div className="text-center flex justify-center">
            <div  className="font-serif border-2 p-3 text-white font-semibold text-lg rounded-3xl flex text-center justify-between w-[60%] lg:w-[80%]">
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">Service</div>
                <div className="cursor-pointer">
                    search
                </div>
            </div>
        </div>
    )
}

export default Navbar