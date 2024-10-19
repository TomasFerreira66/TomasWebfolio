import { IconHome } from "@tabler/icons-react";
import Link from "next/link";

const HomeButton = () => {
  return (
    <div>
    
   <div className="flex justify-center items-center pt-5">
   <Link href="/">
  <button className="flex md:block text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
    <IconHome size={80} />
  </button>
  </Link>
  </div> 
    
 



    </div>
  );
};

export default HomeButton;
