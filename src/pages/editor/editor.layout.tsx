import { useGetDraftByUUIDQuery } from "@/entities/drafts/drafts.api";
import { useActions } from "@/shared/hooks/redux/redux.actions";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { Preloader } from "@/widgets/preloader/preloader.component";
import { FC, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

export const EditorLayoutView: FC = () => {
  const { uuid_draft } = useParams();

  if (uuid_draft) {
    const payload = useTypedSelector((state) => state.EditorSliceReducer);
    const { data, isLoading, isSuccess } = useGetDraftByUUIDQuery(uuid_draft);
    const { setOriginAndWrapper } = useActions();

    useEffect(() => {
      setOriginAndWrapper(data);
    }, [isSuccess, !payload.origin.uuid]);

    if (isLoading || !data) {
      return <Preloader />;
    }

    if (isSuccess && !data) {
      return "not found.";
    }
  }

  return <Outlet />;
};
