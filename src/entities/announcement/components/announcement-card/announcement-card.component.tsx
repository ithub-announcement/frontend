import { Avatar, Card } from "flowbite-react";
import { FC } from "react";
import { AnnouncementType } from "../../types/announcement";

export const AnnouncementCard: FC<AnnouncementType> = (props) => {
  return (
    <Card className="w-full shadow-none">
      <div>
        <a href={`/${props.uuid}`}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {props.title}
          </h5>
        </a>
      </div>
      <div>
        <p className="font-normal max-w-lg text-gray-700 dark:text-gray-400 line-clamp-1">
          {props.content}
        </p>
      </div>
      <div>
        <div className="w-full flex flex-row justify-start items-center gap-2 mb-2">
          <Avatar size="xs" rounded />
          <p className="text-sm">
            <span className="font-bold">@{props.authorId}</span>
            {" • "}
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
        </div>
      </div>
    </Card>
  );
};
