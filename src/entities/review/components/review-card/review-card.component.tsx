import { FC } from "react";
import { ReviewType } from "../../types/review";
import { Card, Tooltip } from "flowbite-react";
import { GrStatusGood } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";

export const ReviewCard: FC<ReviewType> = (_props) => {
  return (
    <Card className="w-full shadow-none">
      <div className="flex flex-row gap-2 items-center">
        {_props.statusReview == "accept" && (
          <Tooltip
            content={
              <p className="text-gray-300">
                Одобренно <span className="text-white">@i22s0646</span>
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
                Отклоненно <span className="text-white">@i22s0646</span>
              </p>
            }
          >
            <IoIosCloseCircleOutline className="text-2xl text-red-500" />
          </Tooltip>
        )}
        <a href={`/review/${_props.uuid}`}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {_props.title}
          </h5>
        </a>
      </div>
      <p>{_props.content}</p>
    </Card>
  );
};
