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
      {isLoading && <Preloader fullScreen={false} />}
      {data.length <= 0 && (
        <div className="w-full rounded py-5 flex justify-start items-center">
          <div>
            <h3>Тут ничего нет =)</h3>
          </div>
        </div>
      )}
      {data.map((el) => (
        <AnnouncementCard key={el.uuid} {...el} />
      ))}
    </>
  );
};
