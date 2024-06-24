import { FC } from "react";
import { ReviewComment } from "./review-comment/review-comment.component";
import { ReviewInfo } from "./review-info/review-info.component";

export const ReviewSidebar: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <ReviewInfo />
      <ReviewComment />
    </div>
  );
};
