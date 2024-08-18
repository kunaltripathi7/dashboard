import { useState } from "react";
import { useWidgets } from "../context/WidgetContext";
import TabNavigation from "./TabNavigation";
import WidgetItems from "./WidgetItems";

type Props = {
  onClose: () => void;
};

function SidebarWidget({ onClose }: Props) {
  const { categories } = useWidgets();
  const tabs = categories.map(
    (ctg) => ctg.id.charAt(0).toUpperCase() + ctg.id.slice(1)
  );
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className="right-0 w-[690px] flex flex-col h-screen bg-black fixed z-30">
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
      </main>
    </div>
  );
}

export default SidebarWidget;
