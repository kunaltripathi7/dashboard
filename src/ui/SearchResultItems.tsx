import { useWidgets } from "../context/WidgetContext";
import { MdWidgets } from "react-icons/md";

type Props = {
  query: string;
};

function SearchResultItems({ query }: Props) {
  const { widgets } = useWidgets();
  if (!query) return;
  return (
    <ul className="absolute flex flex-col z-20 w-full mt-[2px] bg-white shadow-md ring-blue-400 ring-1 ">
      {widgets.map((widget) => {
        if (widget.name.toLowerCase().startsWith(query))
          return (
            <li
              className="cursor-pointer px-2 py-1 text-md flex items-center gap-4"
              key={widget.id}
            >
              <MdWidgets />
              {widget.name}
            </li>
          );
      })}
    </ul>
  );
}

export default SearchResultItems;
