import DashboardContainer from "./DashboardContainer";
import DashboardHeader from "./DashboardHeader";

function MainDashboard() {
  return (
    <div className="bg-[#F0F5FA] h-screen">
      <div className="container mx-auto px-4">
        <DashboardHeader />
        <DashboardContainer />
        <DashboardContainer />
        <DashboardContainer />
      </div>
    </div>
  );
}

export default MainDashboard;
