import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const AreaChartComponent = () => {
  return (
    <Card className='mt-4'>
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className='mt-4 h-72'
        data={chartdata}
        index='date'
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default AreaChartComponent;
