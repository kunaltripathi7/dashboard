import { useWidgets } from "../../context/WidgetContext";
import WidgetItem from "./WidgetItem";

type Props = {
  activeIndex: number;
};

function WidgetItems({ activeIndex }: Props) {
  const { categories } = useWidgets();

  return (
    <ul className="flex flex-col gap-3 container mx-auto px-4 mt-4">
      {categories[activeIndex].widgets.map((wtg) => (
        <WidgetItem widget={wtg} key={wtg.id} />
      ))}
    </ul>
  );
}

export default WidgetItems;
