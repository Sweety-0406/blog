
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";

const Navbar = ({ allPostsData }) => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push({
        pathname: '/search',
        query: { q: searchQuery }
      });
    }
  };

  return (
    <div className={`font-serif border-2 px-3 py-1 text-white font-semibold text-lg rounded-3xl flex justify-center items-center w-[90%] lg:w-[80%] mx-auto ${isSticky ? 'sticky top-0 z-50 bg-blue-950' : ''}`}>
      <div className="flex justify-between w-full relative"> {/* Added relative positioning */}
        <div className="cursor-pointer mt-1" onClick={() => router.push("/")}>Home</div>
        <div className="cursor-pointer mt-1" onClick={() => router.push("/contact")}>Contact</div>
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-2 py-1 rounded-3xl text-black border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search..."
          />
          <button type="submit" className="cursor-pointer ml-2  w-10 h-10 flex items-center justify-center absolute right-0 top-0"> 
            <FcSearch className="w-6 h-6 " />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
