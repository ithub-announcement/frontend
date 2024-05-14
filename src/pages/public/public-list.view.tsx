import { Button } from "flowbite-react";
import { FC } from "react";
import { FaClock } from "react-icons/fa6";

const PublicListView: FC = () => {
  return (
    <div className="w-full max-w-[1440px] flex flex-row gap-2 m-auto pt-[80px]">
      <div className="w-full min-h-screen flex flex-col gap-2"></div>
      <aside className="w-1/3">
        <Button
          color="transparent"
          className="w-full bg-[#FFBB55] text-white text-start flex justify-start items-center"
          size="xl"
        >
          <div className="w-full flex flex-row gap-2 justify-start items-start text-center">
            <FaClock />
            <span>Заявки на публикацию</span>
          </div>
        </Button>
      </aside>
    </div>
  );
};

export default PublicListView;
