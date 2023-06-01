import React, { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut as DoughnutChart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  GetShowArchivedInfo,
  GetShowAtRiskInfo,
  GetShowDraftInfo,
  GetShowExecutedInfo,
} from "../../redux/contractSlice";

interface LegendType {
  color: string;
  name: string;
  detail: number;
  //   style: string;
}
const LegendItem: FC<LegendType> = ({ color, name, detail }) => {
  return (
    <div className="dashboard_totalorder_legend">
      {/* name and detail */}
      <div className="flex w-full justify-between items-center flex-wrap gap-2 text-center">
        {/* bullet with name */}
        <div className=" flex gap-2 items-center">
          <div className="flex items-center justify-center">
            <div
              className="w-[8px] h-[8px] rounded-[16px] flex-none flex-grow "
              style={{ backgroundColor: color }}
            />
          </div>
          <h3 className="flex text-[12px] leading-[18px] font-normal text-[#1C1C1C] font-Inter ">
            {name}
          </h3>
        </div>

        {/* detail */}
        <h3 className=" flex  text-[9px] leading-[14px] font-normal text-[#1C1C1C] font-Inter ">
          {detail}%
        </h3>
      </div>
    </div>
  );
};

const PieChart = () => {
  const draft = GetShowDraftInfo();
  const executed = GetShowExecutedInfo();
  const at_risk = GetShowAtRiskInfo();
  const archived = GetShowArchivedInfo();

  const draftLength = draft.length;
  const archivedLength = archived.length;
  const at_riskLength = at_risk.length;
  const executedLength = executed.length;

  const draftPercent = draftLength / 100;
  const executedPercent = executedLength / 100;
  const archivedPercent = archivedLength / 100;
  const at_riskPercent = at_riskLength / 100;

  const data = [
    { tagName: "Draft", percentage: draftPercent, color: "#E8E9F6" },
    { tagName: "Executed", percentage: executedPercent, color: "#D9DAF5" },
    { tagName: "At Risk", percentage: at_riskPercent, color: "#BCBDF5" },
    { tagName: "Archieve", percentage: archivedPercent, color: "#8E8FE1" },
  ];

  ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
  const chartData = {
    labels: data && data.map((item) => item.tagName),
    datasets: [
      {
        labels: ["sdsd", "sdsd"],
        data: data && data.map((item) => item.percentage || 0),
        backgroundColor: data && data.map((item) => item.color),
        borderColor: data && data.map((item) => item.color),
        borderWidth: 1,
        datalabels: {
          color: "white",
        },
        hoverOffset: 10,
        hoverBorderWidth: 10,
        hoverBorderJoinStyle: "miter",
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "black",
        bodyColor: "white",
        bodySpacing: 5,
        padding: 15,
        boxWidth: 8,
        boxHeight: 8,
        boxPadding: 5,
        usePointStyle: true,
        callbacks: {
          label: function (context: any) {
            const label = `${context.label} ${context.parsed}%`;
            return label;
          },
        },
      },
    },
    layout: {
      padding: 20,
    },
    // onClick: (evt, item) => {
  };

  return (
    <div className="flex flex-col  gap-3  ">
      <DoughnutChart data={chartData} options={options} />
      {data &&
        data.map((data) => (
          <LegendItem
            color={data.color}
            name={data.tagName}
            detail={data.percentage}
          />
        ))}
    </div>
  );
};

export default PieChart;
