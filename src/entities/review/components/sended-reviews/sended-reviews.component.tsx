import { FC } from "react";
import { useGetListOfSendedOnReviewQuery } from "../../review.api";
import { Preloader } from "@/widgets/preloader/preloader.component";
import { ReviewCard } from "../review-card/review-card.component";

export const SendedReviewsList: FC = () => {
  const { data, isLoading } = useGetListOfSendedOnReviewQuery();

  if (isLoading || !data) {
    return <Preloader fullScreen={false} />;
  }

  return (
    <div className="flex flex-col gap-2">
      {data.length == 0 && (
        <div className="w-full flex justify-center items-center rounded p-5">
          <h4>Пустота ваще...</h4>
        </div>
      )}
      {data.map((review) => (
        <ReviewCard key={review.uuid} {...review} isAuthor={true} />
      ))}
    </div>
  );
};
