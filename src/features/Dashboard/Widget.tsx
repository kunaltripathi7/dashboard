import { RxCross2 } from "react-icons/rx";
import { CategoryType, CategoryWidget } from "../../types";
import { Plus } from "lucide-react";
import { useWidgets } from "../../context/WidgetContext";

type Props =
  | { widget: CategoryWidget; category?: never }
  | { widget?: never; category: CategoryType };

function Widget({ widget, category }: Props) {
  const {
    handleRemoveWidget,

    onOpenModal,
    setSelectedCategory,
  } = useWidgets();

  function handleClick() {
    if (!widget) {
      setSelectedCategory(category!);
      onOpenModal();
    } else handleRemoveWidget(widget);
  }

  return (
    <div className="bg-[#F0F0F5] basis-1/3 rounded-3xl px-6 pt-4 pb-12 my-0.5 min-w-[245px]">
      {widget ? (
        <div className="rounded-lg shadow-md p-4 group bg-white h-52">
          <div className="flex justify-between mb-6 font-bold">
            <h2>{widget.name}</h2>
            <RxCross2
              className="h-6 w-6 text-red-500 cursor-pointer hidden group-hover:block hover:scale-125 transform transition-transform duration-300"
              onClick={handleClick}
            />
          </div>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/3d-fluency/94/chart.png"
            alt="chart"
          />
        </div>
      ) : (
        <div className="bg-[#FAFAFA] h-52 rounded-lg p-4 flex justify-center items-center">
          <button
            className="border-2 rounded-lg flex font-semibold text-gray-600 px-2 py-1 gap-2"
            onClick={handleClick}
          >
            <Plus />
            <span>Add widget</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Widget;
