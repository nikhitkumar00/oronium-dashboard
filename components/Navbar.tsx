"use client";
import {
  DropdownIcon,
  HomeIcon,
  ProfileIcon,
  SettingIcon,
  StoreIcon,
} from "@/public/svg/icons";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navData = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon className="size-4 stroke-2" />,
    },
    {
      name: "Store",
      path: "/store",
      icon: <StoreIcon className="size-4 stroke-2" />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <ProfileIcon className="size-4 stroke-2" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <SettingIcon className="size-4" />,
    },
  ];
  return (
    <div className="sticky bottom-0 flex w-60 flex-col items-center justify-between border-r px-3 py-4 shadow-lg">
      <div className="flex w-full flex-col gap-1 p-2">
        {navData.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={`flex cursor-pointer items-center gap-4 rounded-md p-2 hover:bg-red-50 ${
              pathname == item.path ? "bg-red-50" : ""
            }`}
          >
            <div
              className={`flex size-8 items-center justify-center rounded-md ${
                pathname == item.path
                  ? "bg-red-600 fill-none stroke-white"
                  : "fill-none stroke-red-600"
              }`}
            >
              {item.icon}
            </div>
            <h1
              className={`text-textDark text-sm font-semibold ${pathname == item.path ? "text-red-600" : ""}`}
            >
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
      <div className="flex w-full flex-col gap-1 text-sm font-semibold">
        <p>Theme</p>
        <div className="flex cursor-pointer items-center justify-between rounded-md border bg-gray-100 p-3 hover:bg-gray-200">
          <p className="font-medium">Primary Colour</p>
          <div className="size-4 rounded-full bg-red-600"></div>
        </div>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-around rounded-md border bg-gray-100 hover:bg-gray-200">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <p className="font-semibold">Oronium Store</p>
        <DropdownIcon className="size-3" />
      </div>
    </div>
  );
};
export default Navbar;
