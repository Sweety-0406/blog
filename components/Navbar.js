// "use client"

// import { useRouter } from "next/navigation"

// const Navbar = ()=>{
//     const router = useRouter()
//     return(
//         <div className="text-center flex justify-center z-10">
//             <div  className="font-serif border-2 p-3 text-white font-semibold text-lg rounded-3xl flex text-center justify-between w-[90%] lg:w-[80%]">
//                 <div className="cursor-pointer" onClick={()=>router.push("/")}>Home</div>
//                 <div className="cursor-pointer" onClick={()=>router.push("/about")}>About</div>
//                 <div className="cursor-pointer" onClick={()=>router.push("/contact")}>Contact</div>
//                 <div className="cursor-pointer" >
//                     search
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar


// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//     const router = useRouter();
//     const [isSticky, setIsSticky] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setIsSticky(true);
//             } else {
//                 setIsSticky(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         // <div className={`text-center flex justify-center`}>
//             <div className={`font-serif border-2 p-3 text-white font-semibold text-lg rounded-3xl flex text-center justify-between w-[90%] lg:w-[80%]  ${isSticky ? 'sticky top-0 z-50 bg-blue-950 mx-[10]' : ''} items-center text-center `}>
//                 <div className="cursor-pointer" onClick={() => router.push("/")}>Home</div>
//                 <div className="cursor-pointer" onClick={() => router.push("/about")}>About</div>
//                 <div className="cursor-pointer" onClick={() => router.push("/contact")}>Contact</div>
//                 <div className="cursor-pointer">
//                     Search
//                 </div>
//             </div>
//         // </div>
//     );
// };

// export default Navbar;



import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`font-serif border-2 p-3 text-white font-semibold text-lg rounded-3xl flex justify-center items-center w-[90%] lg:w-[80%] mx-auto ${isSticky ? 'sticky  top-0 z-50 bg-blue-950' : ''}`}>
            <div className="flex justify-between w-full">
                <div className="cursor-pointer" onClick={() => router.push("/")}>Home</div>
                {/* <div className="cursor-pointer" onClick={() => router.push("/about")}>About</div> */}
                <div className="cursor-pointer" onClick={() => router.push("/contact")}>Contact</div>
                <div className="cursor-pointer">Search</div>
            </div>
        </div>
    );
};

export default Navbar;
