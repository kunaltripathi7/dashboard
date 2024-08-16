import { BellRing, CircleUserRound } from "lucide-react";

function UserConfig() {
  return (
    <div className="grow-[1] text-gray-400 justify-end flex">
      <div className="flex gap-8 items-center px-10">
        <BellRing className="h-5 cursor-pointer" />
        <CircleUserRound className="h-8 cursor-pointer" />
      </div>
    </div>
  );
}

export default UserConfig;
