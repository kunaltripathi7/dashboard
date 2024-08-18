import { useEffect, useState } from "react";
import { useWidgets } from "../../context/WidgetContext";
import TabNavigation from "./TabNavigation";
import WidgetItems from "./WidgetItems";
import { Plus } from "lucide-react";

type Props = {
  onClose: () => void;
};

function SidebarWidget({ onClose }: Props) {
  const { categories, setSelectedCategory, onOpenModal } = useWidgets();
  const tabs = categories.map(
    (ctg) => ctg.id.charAt(0).toUpperCase() + ctg.id.slice(1)
  );
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [categories, setSelectedCategory]);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
    setSelectedCategory(categories[tab]);
  };

  return (
    <div className="right-0 md:w-[690px] flex flex-col h-screen bg-black fixed z-30">
      <header className="font-semibold bg-[#14147D] text-slate-50 flex justify-between px-6 py-4">
        <span>Add Widget</span>
        <button className="text-lg" onClick={onClose}>
          X
        </button>
      </header>
      <main className="bg-white h-full">
        <p className="px-4 py-4 font-medium">
          Personalise your dashboard by adding the following widget
        </p>
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onClick={handleTabClick}
        />
        <WidgetItems activeIndex={activeTab} />
        <button
          className="items-center bg-[#14147D] text-white px-2 py-1 rounded-md mt-4 flex gap-1 text-sm mx-5"
          onClick={() => onOpenModal()}
        >
          <span>Add</span>
          <Plus className="h-4 w-4" />
        </button>
      </main>
    </div>
  );
}

export default SidebarWidget;
