import { FC } from "react";
import { useGetListOfAnnouncementsQuery } from "../../announcement.api";
import { Preloader } from "@/widgets/preloader/preloader.component";
import { AnnouncementCard } from "../announcement-card/announcement-card.component";

export const AnnouncementList: FC = () => {
  const { data, isLoading } = useGetListOfAnnouncementsQuery();

  if (isLoading || !data) {
    return <Preloader />;
  }

  return (
    <>
      {isLoading && <Preloader />}
      {data.map((el) => (
        <AnnouncementCard key={el.uuid} {...el} />
      ))}
    </>
  );
};
