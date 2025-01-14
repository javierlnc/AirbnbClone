import CustomButton from "./CustomButton";
const SearchFilter = ({}) => {
  return (
    <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <p className="text-xs font-semibold">Where</p>
        <input className="text-sm bg-transparent" type="text" placeholder="Search destinations" />
      </div>
      <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <p className="text-xs font-semibold">Check in</p>
        <input className="text-sm bg-transparent" type="text" placeholder="Add dates" />
      </div>
      <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <p className="text-xs font-semibold">Check out</p>
        <input className="text-sm bg-transparent" type="text" placeholder="Add dates" />
      </div>
      <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
        <p className="text-xs font-semibold">Who</p>
        <input className="text-sm bg-transparent" type="text" placeholder="Add guests" />
      </div>
      <div className="p-2">

      <CustomButton text={"Search"} />
      </div>

    </div>

  );
};

export default SearchFilter;
