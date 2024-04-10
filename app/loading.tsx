import { LoadingIcon } from "@/public/svg/icons";

const loading = () => {
  return (
    <div className="animate:pulse flex h-full w-full items-center justify-center gap-2 text-xl font-bold">
      <LoadingIcon className="size-10" /> Loading
    </div>
  );
};
export default loading;
