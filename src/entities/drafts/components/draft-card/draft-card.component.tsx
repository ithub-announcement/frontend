import { Card, Dropdown } from "flowbite-react";
import { FC } from "react";
import { DraftType } from "../../types/drafts";
import { IoMdMore } from "react-icons/io";
import { useDeleteDraftMutation } from "../../drafts.api";

export const DraftCard: FC<DraftType> = (props) => {
  const [deleteRequest] = useDeleteDraftMutation();

  return (
    <Card className="w-full shadow-none">
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
            onClick={() => deleteRequest(props.uuid)}
          >
            <span className="text-red-500">Удалить публикацию</span>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
        {props.content}
      </p>
      <p>
        <span className="text-black font-normal">
          {new Date(props.dateTime).getUTCDate() == new Date().getUTCDate() ? (
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
  );
};
