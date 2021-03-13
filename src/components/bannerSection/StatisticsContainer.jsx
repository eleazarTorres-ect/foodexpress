import StatisticsComponent from "./StatisticsComponent";
const StatisticsContainer = () => {
  return (
    <div className="flex justify-start w-full">
      <StatisticsComponent number="144" label="products"></StatisticsComponent>
      <StatisticsComponent
        number="3000 +"
        label="satisfied customers"
      ></StatisticsComponent>
    </div>
  );
};

export default StatisticsContainer;
