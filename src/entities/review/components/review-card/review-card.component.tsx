import { FC } from "react";
import { ReviewType } from "../../types/review";
import { Avatar, Card, Tooltip } from "flowbite-react";
import { GrStatusGood } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";

export const ReviewCard: FC<ReviewType & { isAuthor?: boolean }> = (_props) => {
  return (
    <Card className="w-full shadow-none">
      <div className="flex flex-row gap-2 items-center">
        {_props.statusReview == "accept" && (
          <Tooltip
            content={
              <p className="text-gray-300">
                Одобренно{" "}
                <span className="text-white">@{_props.inspector}</span>
              </p>
            }
          >
            <GrStatusGood className="text-xl text-green-400" />
          </Tooltip>
        )}
        {_props.statusReview == "review" && (
          <Tooltip content={<p className="text-gray-300">Ожидание</p>}>
            <FaRegClock className="text-xl text-yellow-300" />
          </Tooltip>
        )}
        {_props.statusReview == "reject" && (
          <Tooltip
            content={
              <p className="text-gray-300">
                Отклоненно{" "}
                <span className="text-white">@{_props.inspector}</span>
              </p>
            }
          >
            <IoIosCloseCircleOutline className="text-2xl text-red-500" />
          </Tooltip>
        )}
        <a href={`/review/${_props.uuid}`}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {_props.title}
          </h5>
        </a>
      </div>
      <p className="font-normal max-w-lg text-gray-700 dark:text-gray-400 line-clamp-2">
        {_props.content}
      </p>
      {!_props.isAuthor && (
        <div className="flex flex-row gap-2 items-center">
          <Avatar size="xs" rounded />
          <p className="text-sm">{_props.authorId}</p>
        </div>
      )}
    </Card>
  );
};
