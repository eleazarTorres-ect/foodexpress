const StatisticsComponent = ({ number, label }) => {
  return (
    <div className="justify-center block mx-10 text-center">
      <div className="text-4xl text-center public_semibold text-food-A-400">
        {number}
      </div>
      <div className="text-xl text-center public_thin">{label}</div>
    </div>
  );
};

export default StatisticsComponent;
