import { ReivewPreview } from "@/entities/review/components/review-preview/review-preview.component";
import { ReviewSidebar } from "@/entities/review/components/review-sidebar/review-sidebar.component";
import { FC } from "react";

const ReviewPreviewView: FC = () => {
  return (
    <div className="w-full max-w-[1440px] flex flex-col-reverse xl:flex-row gap-2 m-auto pt-[80px]">
      <div className="w-full min-h-screen flex flex-col gap-2">
        <ReivewPreview />
      </div>
      <aside className="w-full xl:w-1/3 sticky top-30 min-h-fit">
        <ReviewSidebar />
      </aside>
    </div>
  );
};

export default ReviewPreviewView;
