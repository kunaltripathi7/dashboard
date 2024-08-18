import { ChevronDown, EllipsisVertical, RefreshCw, Tally1 } from "lucide-react";
import { GoClockFill } from "react-icons/go";

type Props = {
  onOpen: () => void;
};

function DashboardHeader({ onOpen }: Props) {
  return (
    <div className="flex justify-between py-6 items-center">
      <h1 className="font-bold text-xl mx-3">CNAPP Dashboard</h1>
      <div className="text-gray-500 flex gap-4 mt-6">
        <button
          className="bg-white px-2 rounded-md py-2 font-semibold flex gap-3 text-[13px]"
          onClick={onOpen}
        >
          <span>Add Widget</span>
          <span>+</span>
        </button>
        <button className="bg-white px-2 py-1 rounded-md">
          <RefreshCw className="h-6 w-4" />
        </button>
        <button className="bg-white px-2 py-1 rounded-md">
          <EllipsisVertical className="h-6 w-4" />
        </button>
        <button className="bg-white px-2 border-blue-950 border-[1px] py-1 rounded-md flex items-center gap-4 text-blue-950 relative">
          <GoClockFill className="h-6 w-5" />
          <Tally1 className="h-6 absolute left-[28px] transform scale-y-150 py-0" />
          <div className="flex">
            <span className="font-bold text-xs">Last 2 days</span>
            <ChevronDown className="h-4" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default DashboardHeader;
