import Link from "next/link";
import Image from "next/image";
import SearchFilter from "./SearchFilter";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 border-b py-6 bg-white z-10">
      <nav className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/airbnb-1.svg"}
              width={36}
              height={54}
              alt="Home Page"
            />
          </Link>
          <div className="flex space-x-6">
          <SearchFilter/>
        </div>
        <div>
          botums
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
