import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { Avatar, Card } from "flowbite-react";
import { FC } from "react";

export const ReviewInfo: FC = () => {
  const payload = useTypedSelector((state) => state.ReviewSliceReducer);

  return (
    <Card className="w-full shadow-none">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col gap-1">
          <p className="text-xs font-bold">Статус:</p>
          <p>
            {payload.origin.statusReview == "reject" && "Отклоненно"}
            {payload.origin.statusReview == "accept" && "Одобренно"}
            {payload.origin.statusReview == "review" && "Ожидание"}
          </p>
        </div>
        {payload.origin.inspector && (
          <div className="w-full flex flex-col gap-2">
            <p className="text-xs font-bold">Проверил:</p>
            <div className="flex flex-row gap-1">
              <Avatar size="xs" rounded />
              <p>@{payload.origin.inspector}</p>
            </div>
          </div>
        )}
        {payload.origin.reason && (
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs font-bold">Причина:</p>
            <p>{payload.origin.reason}</p>
          </div>
        )}
      </div>
    </Card>
  );
};
