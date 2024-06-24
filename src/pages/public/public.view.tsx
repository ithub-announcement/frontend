import { AnnouncementPreview } from "@/entities/announcement/components/announcement-preview/announcement-preview.component";
import { FC } from "react";

const PublicView: FC = () => {
  return (
    <div className="w-full max-w-[750px] min-h-screen mx-auto pt-[80px]">
      <AnnouncementPreview />
    </div>
  );
};

export default PublicView;
