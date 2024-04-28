import { useDeleteDraftMutation } from "@/entities/drafts/drafts.api";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { useEffect } from "react";

export const useDeleteDraft = () => {
  const payload = useTypedSelector((state) => state.EditorSliceReducer);
  const [deleteRequest, { isSuccess, data }] = useDeleteDraftMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data?.status == 418) {
        window.location.href = "/drafts";
      }
    }
  }, [isSuccess, data]);

  return async () => {
    if (payload.origin.uuid) {
      await deleteRequest(payload.origin.uuid);
    }
  };
};
