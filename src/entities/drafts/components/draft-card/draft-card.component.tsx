import { Card } from "flowbite-react";
import { FC } from "react";
import { DraftType } from "../../types/drafts";

export const DraftCard: FC<DraftType> = (props) => {
  return (
    <Card className="w-full shadow-none">
      <a href={`/editor/${props.uuid}`}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
      </a>
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
