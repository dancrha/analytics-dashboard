import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <div
      id='top'
      className='relative items-center justify-between w-full p-2 sm:flex'
    >
      <h1 className='font-bold text-gray-300'>Sample Analytics Dashboard</h1>

      <div className='py-2'>
        <TextInput icon={SearchIcon} placeholder='Search...' />
      </div>
    </div>
  );
};

export default Navbar;
