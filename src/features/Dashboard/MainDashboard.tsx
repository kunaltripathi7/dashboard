import { useWidgets } from "../../context/WidgetContext";
import { CategoryType } from "../../types";
import DashboardContainer from "./DashboardContainer";
import DashboardHeader from "./DashboardHeader";
type Props = {
  onOpen: () => void;
};

function MainDashboard({ onOpen }: Props) {
  const { categories } = useWidgets();

  return (
    <div className="bg-[#F0F5FA] h-full">
      <div className="container mx-auto px-4">
        <DashboardHeader onOpen={onOpen} />
        {categories.map((ctg: CategoryType) => (
          <DashboardContainer category={ctg} key={ctg.id} />
        ))}
      </div>
    </div>
  );
}

export default MainDashboard;
