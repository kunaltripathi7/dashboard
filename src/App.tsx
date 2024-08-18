import { useWidgets } from "./context/WidgetContext";

import Header from "./ui/Header";
import MainDashboard from "./features/Dashboard/MainDashboard";

import SidebarWidget from "./features/Sidebar/SidebarWidget";
import { createWidget } from "./utils/widget";
import { CategoryType } from "./types";
import CreateWidgetModal from "./ui/CreateWidgetModal";

function App() {
  const {
    handleSidebar,
    isSidebarOpen,
    handleAddWidget,
    onCloseModal,
    isModalOpen,
  } = useWidgets();

  function handleSave(category: CategoryType, name: string, content: string) {
    handleAddWidget(createWidget(category, name, content));
    onCloseModal();
  }

  return (
    <div className="min-h-screen flex flex-col relative cursor-default min-w-[420px]">
      <Header />
      <MainDashboard onOpen={handleSidebar} />
      {isSidebarOpen && <SidebarWidget onClose={handleSidebar} />}
      <CreateWidgetModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;
