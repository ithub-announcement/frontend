import { useActions } from "@/shared/hooks/redux/redux.actions";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import NotFoundView from "../notfound/notfound.view";
import { Preloader } from "@/widgets/preloader/preloader.component";
import { useGetReviewRequestByUUIDQuery } from "@/entities/review/review.api";

export const ReviewPreviewLayout = () => {
  const { review_uuid } = useParams();

  if (review_uuid) {
    const { data, isLoading, isSuccess } =
      useGetReviewRequestByUUIDQuery(review_uuid);
    const { setReviewOriginState } = useActions();

    useEffect(() => {
      if (isSuccess) setReviewOriginState(data);
    }, [isSuccess]);

    if (isSuccess && !data) {
      return <NotFoundView />;
    }

    if (isLoading || !data) {
      return <Preloader fullScreen={true} />;
    }
  }

  return <Outlet />;
};
