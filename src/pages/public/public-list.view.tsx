import { AnnouncementList } from "@/entities/announcement/components/announcement-list/announcement-list.component";
import { FC } from "react";

const PublicListView: FC = () => {
  return (
    <div className="w-full max-w-[1440px] flex flex-col-reverse xl:flex-row gap-2 m-auto pt-[80px]">
      <div className="w-full min-h-screen flex flex-col gap-2 px-6">
        <AnnouncementList />
      </div>
      <aside className="w-full xl:w-1/3 sticky top-30 min-h-fit"></aside>
    </div>
  );
};

export default PublicListView;
