import { DeleteModal } from "@/widgets/delete-modal/delete-modal.component";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { PiEyesFill } from "react-icons/pi";
import { useAnnouncementDelete } from "@/features/announcement/useDeleteAnnouncement.feature";

export const AnnouncementSettings: FC = () => {
  const { uuid } = useParams();
  const [active, setActive] = useState<boolean>(false);

  const deleteRequest = useAnnouncementDelete(uuid!);

  return (
    <>
      <DeleteModal
        id={uuid}
        active={active}
        setActive={setActive}
        deleteRequest={deleteRequest.a}
        isLoading={deleteRequest.isLoading}
      />
      <div className="my-5 px-4 flex flex-row justify-between">
        <div className="flex flex-row gap-1 justify-center items-center">
          <PiEyesFill className="text-gray-400" />
          <span className="text-gray-400">0</span>
        </div>
        <a
          className="text-sm text-red-400 cursor-pointer hover:underline"
          onClick={() => setActive(true)}
        >
          Удалить публикацию
        </a>
      </div>
    </>
  );
};
