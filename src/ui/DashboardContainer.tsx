import { CategoryType } from "../types";
import Widget from "./Widget";
type Props = {
  category: CategoryType;
};

function DashboardContainer({ category }: Props) {
  return (
    <div className="flex flex-col gap-2 relative">
      <h2 className="text-lg font-bold absolute left-5 top-[-15px]">
        {category.name}
      </h2>
      <div className="flex flex-wrap">
        {category.widgets.map((wgt) => (
          <Widget widget={wgt} key={wgt.id} />
        ))}
        <Widget category={category} />
      </div>
    </div>
  );
}

export default DashboardContainer;
