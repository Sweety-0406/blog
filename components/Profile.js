import { MdOutlineWavingHand } from "react-icons/md";
import Image from "next/image";


const Profile = ()=>{
    return(
        <div className="flex flex-col justify-center items-center mb-5">
            <div className="flex justify-center text-4xl mt-8">
                <h1 className="text-sky-300 mb-5">Welcome To My Blogs </h1>
                < MdOutlineWavingHand className="text-yellow-300 mt-2  mx-2"/>
                <h1 className="text-sky-300 mb-5">!!!</h1>
            </div>
            <div>
                <img 
                  className="rounded-full w-44 h-44"
                  src={"/images/logo.png"}
                />
            </div>
        </div>
    )
}


export default Profile