import { useSaveDraftMutation } from "@/entities/drafts/drafts.api";
import { useActions } from "@/shared/hooks/redux/redux.actions";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { useEffect } from "react";

export const useSaveDraft = () => {
  const payload = useTypedSelector((state) => state.EditorSliceReducer);
  const { setLockEditor, setOriginAndWrapper } = useActions();
  const [saveRequest, { isSuccess, data }] = useSaveDraftMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data.status == 201) {
        window.location.href = "/editor/" + data.data?.uuid;
      }
      setTimeout(() => setLockEditor(false), 1000);
      setOriginAndWrapper(data.data);
    }
  }, [isSuccess && data]);

  return async () => {
    if (JSON.stringify(payload.origin) !== JSON.stringify(payload.wrapper)) {
      setLockEditor(true);
      await saveRequest({
        uuid: payload.origin.uuid,
        body: payload.wrapper,
      });
    }
  };
};
