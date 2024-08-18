import { useWidgets } from "./context/WidgetContext";

import Header from "./ui/Header";
import MainDashboard from "./ui/MainDashboard";

import SidebarWidget from "./ui/SidebarWidget";

function App() {
  const { handleSidebar, isSidebarOpen } = useWidgets();
  return (
    <div className="min-h-screen flex flex-col relative cursor-default">
      <Header />
      <MainDashboard onOpen={handleSidebar} />
      {isSidebarOpen && <SidebarWidget onClose={handleSidebar} />}
    </div>
  );
}

export default App;
