import {
  DropdownIcon2,
  FacebookIcon,
  InstagramIcon,
  UploadIcon,
  XIcon,
} from "@/public/svg/icons";

export default function Home() {
  return (
    <div className="flex h-full w-full justify-between gap-4">
      <FormSection />
      <MockUp />
    </div>
  );
}

const FormSection = () => {
  const SocialLinks = [
    {
      name: "Instagram",
      icon: <InstagramIcon className="size-5 fill-gray-600" />,
      placeholder: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon className="size-5 fill-gray-600" />,
      placeholder: "https://www.facebook.com/",
    },
    {
      name: "Twitter",
      icon: <XIcon className="size-5 fill-gray-600" />,
      placeholder: "https://twitter.com/",
    },
  ];
  return (
    <div className="w-1/2 font-semibold">
      {/* Header Section */}
      <h1 className="text-md py-2 font-bold">Header</h1>
      <h2 className="pb-2 text-sm text-gray-600">Store Logo</h2>
      <div className="flex h-28 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed text-gray-500 hover:bg-gray-50">
        <UploadIcon className="size-5" />
      </div>

      {/* Footer Section */}
      <h1 className="text-md py-2 pt-4 font-bold">Footer</h1>
      <h2 className="pb-2 text-sm text-gray-600">Footer Text</h2>
      <input
        className="w-full rounded border-2 px-4 py-2 text-sm font-normal"
        placeholder="Live your fashion"
        type="text"
      />

      {/* Social Section */}
      <h2 className="pb-2 pt-4 text-sm text-gray-600">Social Media</h2>
      <div className="flex flex-col gap-2">
        {SocialLinks.map((link) => (
          <div key={link.name} className="flex h-10 w-full gap-2">
            <div className="flex w-14 cursor-pointer items-center justify-around gap-1 rounded border-2">
              {link.icon}
              <DropdownIcon2 className="size-3" />
            </div>
            <input
              className="flex-grow rounded border-2 px-2 text-sm"
              type="text"
              placeholder={link.placeholder}
            />
          </div>
        ))}
        <p className="text-xs text-gray-400">Resolution (32x32px)</p>
      </div>

      {/* Store name Section */}
      {/* <h2 className="pb-1 pt-4 text-sm text-gray-500">Store Name</h2>
      <input
        className="w-full rounded border-2 px-4 py-2 text-sm font-normal"
        placeholder="Here and now"
        type="text"
      />

      <button className="mt-2 w-24 rounded bg-red-600 py-2 text-sm text-white hover:bg-red-500">
        Save
      </button> */}
    </div>
  );
};

const MockUp = () => {
  return (
    <div className="flex h-full w-2/3 items-center justify-center rounded-xl border shadow-xl">
      <h1 className="text-xl font-bold">MockUp Section</h1>
    </div>
  );
};
