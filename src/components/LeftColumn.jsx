import AreaChartComponent from "./AreaChartComponent";
import CardItem from "./CardItem";
import TableComponent from "./TableComponent";

const LeftColumn = () => {
  return (
    <div className='flex flex-col justify-between w-full p-2'>
      <div className='flex flex-col w-full gap-2 lg:flex-row'>
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className='flex-auto w-full'>
        <AreaChartComponent />
        <TableComponent />
      </div>
    </div>
  );
};

export default LeftColumn;
