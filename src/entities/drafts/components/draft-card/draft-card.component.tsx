import { Card, Dropdown } from "flowbite-react";
import { FC, useState } from "react";
import { DraftType } from "../../types/drafts";
import { IoMdMore } from "react-icons/io";
import { useDeleteDraftMutation } from "../../drafts.api";
import { DeleteModal } from "@/widgets/delete-modal/delete-modal.component";

export const DraftCard: FC<DraftType> = (props) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [deleteRequest] = useDeleteDraftMutation();

  return (
    <>
      <DeleteModal
        id={props.uuid}
        active={activeModal}
        setActive={setActiveModal}
        deleteRequest={deleteRequest}
      />
      <Card className="w-full shadow-none">
        <div>
          <div className="flex flex-row justify-between w-full">
            <a href={`/editor/${props.uuid}`}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}
              </h5>
            </a>
            <Dropdown
              label={<IoMdMore className="text-2xl hover:cursor-pointer" />}
              dismissOnClick={false}
              arrowIcon={false}
              color="transparent"
            >
              <Dropdown.Item
                className="w-full flex disabled:bg-transparent disabled:cursor-no-drop disabled:opacity-70"
                onClick={() => setActiveModal(true)}
              >
                <span className="text-red-500">Удалить публикацию</span>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <p className="font-normal max-w-lg text-gray-700 dark:text-gray-400 line-clamp-1">
            {props.content}
          </p>
        </div>
        <p>
          <span className="text-black font-normal">
            {new Date(props.dateTime).getUTCDate() ==
            new Date().getUTCDate() ? (
              "Сегодня"
            ) : (
              <>
                {new Intl.DateTimeFormat("ru-Ru").format(
                  new Date(props.dateTime)
                )}
              </>
            )}
          </span>
        </p>
      </Card>
    </>
  );
};
