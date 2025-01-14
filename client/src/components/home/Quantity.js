import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Quantity = ({ quantity, inc, dec, theme }) => {
  return (
    <div className="flex overflow-hidden rounded-lg border">
      <span
        className={`flex  items-center  border-r p-4 cursor-pointer hover:bg-indigo-500 hover:text-white transition-all ${
          theme === "indigo" && "bg-indigo-600 text-white"
        }`}
        onClick={dec}
      >
        <AiOutlineMinus />
      </span>
      <span className="flex-1 px-2 flex items-center justify-center font-medium">
        {quantity}
      </span>
      <span
        className={`flex  items-center  border-l p-4 cursor-pointer hover:bg-indigo-500 hover:text-white transition-all ${
          theme === "indigo" && "bg-indigo-600 text-white"
        }`}
        onClick={inc}
      >
        <AiOutlinePlus />
      </span>
    </div>
  );
};

export default Quantity;
