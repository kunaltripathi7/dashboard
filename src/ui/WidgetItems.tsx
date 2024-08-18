import { Plus } from "lucide-react";
import { useWidgets } from "../context/WidgetContext";
import WidgetItem from "./WidgetItem";
import CreateWidgetModal from "./CreateWidgetModal";

type Props = {
  activeIndex: number;
};

function WidgetItems({ activeIndex }: Props) {
  const { categories, isModalOpen, onCloseModal } = useWidgets();

  return (
    <>
      <div className="container mx-auto px-4 mt-4">
        <ul className="flex flex-col gap-3">
          {categories[activeIndex].widgets.map((wtg) => (
            <WidgetItem widget={wtg} key={wtg.id} />
          ))}
        </ul>
        <button
          className="items-center bg-[#14147D] text-white px-2 py-1 rounded-md mt-4 flex gap-1 text-sm"
          onClick={() => onCloseModal()}
        >
          <span>Add</span>
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}

export default WidgetItems;
