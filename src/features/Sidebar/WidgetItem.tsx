import { useState } from "react";
import { CategoryWidget } from "../../types";
import { useWidgets } from "../../context/WidgetContext";

type Props = {
  widget: CategoryWidget;
};

function WidgetItem({ widget }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const { handleRemoveWidget } = useWidgets();

  function handleCheck() {
    setIsChecked((prev) => !prev);
    handleRemoveWidget(widget);
  }

  return (
    <li className="border-[1px] border-gray-400 rounded-md py-2 hover:bg-blue-50">
      <label className="items-center cursor-pointer select-none flex gap-4 mx-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          className="h-4 w-6"
        />
        <span className="font-semibold">{widget.name}</span>
      </label>
    </li>
  );
}

export default WidgetItem;
