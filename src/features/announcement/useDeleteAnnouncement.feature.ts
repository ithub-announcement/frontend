import { useDeleteAnnouncementByUUIDMutation } from "@/entities/announcement/announcement.api";
import { useEffect } from "react";

export const useAnnouncementDelete = (uuid: string) => {
  const [deleteRequest, { isSuccess, isLoading, data }] =
    useDeleteAnnouncementByUUIDMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data.status == 418) {
        window.location.href = "/";
      }
    }
  }, [isSuccess, data]);

  const a = async () => {
    if (uuid) {
      await deleteRequest(uuid);
    }
  };

  return {
    a,
    isSuccess,
    isLoading,
  };
};
