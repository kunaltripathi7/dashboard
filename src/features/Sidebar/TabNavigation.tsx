interface TabProps {
  tabs: string[];
  onClick: (tab: number) => void;
  activeTab: number;
}

const TabNavigation: React.FC<TabProps> = ({ tabs, activeTab, onClick }) => {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`py-3 px-6 text-base font-semibold focus:outline-none ${
            activeTab === index
              ? "text-[#14147D] border-b-4 border-[#14147D]"
              : "text-gray-400 hover:text-[#14147D] hover:border-[#14147D]"
          }`}
          onClick={() => onClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
