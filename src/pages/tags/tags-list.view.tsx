import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { Center } from "@/widgets/center/center.component";
import { Preloader } from "@/widgets/preloader/preloader.component";
import { TagsList } from "@/widgets/tags-list/tags-list.component";
import { TagsModal } from "@/widgets/tags-modal/tags-modal.component";
import { Button, Table, Tooltip } from "flowbite-react";
import { FC, useState } from "react";
import { VscAdd } from "react-icons/vsc";

const TagsListView: FC = () => {
  const payload = useTypedSelector((state) => state.GlobalSliceReducer);
  const [state, setState] = useState<boolean>(false);

  return (
    <>
      <TagsModal active={state} setActive={setState} />
      <Center>
        <div className="w-full max-w-[760px] min-h-screen mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div className="flex flex-row gap-5 justify-center items-center">
              <h1 className="text-3xl sm:text-5xl font-bold">Категории</h1>
              {payload.global.isLoading && <Preloader fullScreen={false} />}
            </div>
            <Tooltip content="Создать новый" placement="bottom">
              <Button
                className="h-full text-center flex justify-center items-center leading-none z-10"
                color="transparent"
                onClick={() => setState(true)}
              >
                <VscAdd className="text-xl" />
              </Button>
            </Tooltip>
          </div>
          <Table>
            <Table.Head>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Название категории</Table.HeadCell>
              <Table.HeadCell>Цвет</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <TagsList />
            </Table.Body>
          </Table>
        </div>
      </Center>
    </>
  );
};

export default TagsListView;
