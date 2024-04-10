import { BellIcon, PlayIcon } from "@/public/svg/icons";
import Image from "next/image";
const Header = () => {
  return (
    <div className="sticky top-0 w-full border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="size-10"
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
          <h1 className="text-textDark font-semibold">
            Oronium E-Commerce Store
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded bg-red-600 px-3 py-3 text-xs font-semibold text-white hover:bg-red-500">
            <PlayIcon className="size-4" />
            Preview Store
          </button>
          <button className="cursor-pointer rounded bg-gray-200 p-2 hover:bg-gray-300">
            <BellIcon className="size-5 stroke-2" />
            <span className="sr-only">Notifications</span>
          </button>
          <Image
            src="/avatar.png"
            alt="avatar"
            width={40}
            height={40}
            className="size-9 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
