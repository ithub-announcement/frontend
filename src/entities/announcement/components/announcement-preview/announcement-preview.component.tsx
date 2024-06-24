import { Preview } from "@/widgets/preview/preview.component";
import { FC } from "react";
import { useGetAnnouncementByUUIDQuery } from "../../announcement.api";
import { useParams } from "react-router-dom";
import { Preloader } from "@/widgets/preloader/preloader.component";

export const AnnouncementPreview: FC = () => {
  const { uuid } = useParams();
  const { data, isLoading } = useGetAnnouncementByUUIDQuery(uuid!);

  if (isLoading || !data) {
    return <Preloader fullScreen />;
  }

  return <Preview {...data} />;
};
