import { AnnouncementPreview } from "@/entities/announcement/components/announcement-preview/announcement-preview.component";
import { AnnouncementSettings } from "@/entities/announcement/components/announcement-settings/announcement-settings.component";
import { FC } from "react";

const PublicView: FC = () => {
  return (
    <div className="w-full max-w-[750px] min-h-screen mx-auto pt-[80px]">
      <AnnouncementPreview />
      <AnnouncementSettings />
    </div>
  );
};

export default PublicView;
