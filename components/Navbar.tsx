import { FC } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Navbar: FC = () => (
  <>
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon
        name="description"
        color="blue"
        size="5xl"
        className="hidden md:inline-flex pr-5"
      />
      <h1 className="ml-2 text-gray-700 text-2xl hidden md:inline-flex">
        Docs
      </h1>
      <div className="flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="inline-flex ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>

      {/* <img
        src=""
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        alt=""
      /> */}
    </header>
  </>
);

export default Navbar;
