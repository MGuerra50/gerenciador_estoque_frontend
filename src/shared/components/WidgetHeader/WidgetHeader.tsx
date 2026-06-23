import { BsThreeDotsVertical } from "react-icons/bs";

interface WidgetHeaderProps {
  title: string;
}

export default function WidgetHeader({ title }: WidgetHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-semibold pl-[5px]">{title}</h2>
      <BsThreeDotsVertical className="cursor-pointer text-gray-500" size={20} />
    </div>
  );
}
