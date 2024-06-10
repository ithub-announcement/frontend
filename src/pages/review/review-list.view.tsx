import { ReviewList } from "@/entities/review/components/review-list/review-list.component";
import { useTitle } from "@/shared/hooks/react/useTitle.hook";
import { Center } from "@/widgets/center/center.component";
import { Tooltip, Button } from "flowbite-react";
import { FC } from "react";
import { VscAdd } from "react-icons/vsc";

const ReviewListView: FC = () => {
  useTitle("Заявки на рассмотрение");
  return (
    <Center>
      <div className="w-full min-h-screen h-full">
        <div>
          <div>
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-3xl sm:text-5xl font-bold">Модерация</h1>
              <Tooltip content="Создать новый" placement="bottom">
                <Button
                  className="h-full text-center flex justify-center items-center leading-none z-10"
                  color="transparent"
                  href="/editor"
                >
                  <VscAdd className="text-xl" />
                </Button>
              </Tooltip>
            </div>
            <div>
              <ReviewList />
            </div>
          </div>
        </div>
      </div>
    </Center>
  );
};

export default ReviewListView;
