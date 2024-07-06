import { FC } from "react";

export const Chart: FC = () => {
  const options = {
    chart: {
      id: 1,
    },
    xaxis: {
      categories: ["Январь", "Февраль", "Март"],
    },
  };

  const series = [
    {
      name: "Доход",
      data: [50000, 60000, 75000],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="500"
      height="500"
    />
  );
};
