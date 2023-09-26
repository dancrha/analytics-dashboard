import CardItem from "./CardItem";

const LeftColumn = () => {
  return (
    <div className='w-full flex flex-col justify-between p-2'>
      <div className='flex flex-col lg:flex-row gap-2 w-full'>
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default LeftColumn;
