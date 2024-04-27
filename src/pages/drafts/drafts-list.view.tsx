import { DraftsList } from "@/entities/drafts/components/drafts-list/drafts-list.component";
import { Center } from "@/widgets/center/center.component";
import { Button, Tooltip } from "flowbite-react";
import { FC } from "react";
import { VscAdd } from "react-icons/vsc";

const DraftsListView: FC = () => {
  return (
    <Center>
      <div className="w-full min-h-screen h-full">
        <div>
          <div>
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-3xl sm:text-5xl font-bold">Ваши черновики</h1>
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
              <DraftsList />
            </div>
          </div>
        </div>
      </div>
    </Center>
  );
};

export default DraftsListView;
