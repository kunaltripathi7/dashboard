import Widget from "./Widget";

function DashboardContainer() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold ml-4">CSPM Executive Dashboard</h2>
      <div className="flex">
        <Widget />
        <Widget />
        <Widget />
      </div>
    </div>
  );
}

export default DashboardContainer;
