import { Card, Button, Textarea, Spinner } from "flowbite-react";
import { FC, useEffect, useState } from "react";
import { ReviewRadio } from "../review-radio/review-radio.component";
import {
  useApproveReviewMutation,
  useRejectReviewMutation,
} from "@/entities/review/review.api";
import { useParams, useNavigate } from "react-router-dom";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";

export const ReviewComment: FC = () => {
  const [state, setState] = useState({
    isApprove: false,
    isReject: false,
    reason: "",
  });
  const { review_uuid } = useParams();
  const payload = useTypedSelector((state) => state.ReviewSliceReducer);

  const navigate = useNavigate();
  const [
    approve_request,
    { isLoading: ApproveLoading, isSuccess: ApproveSuccess },
  ] = useApproveReviewMutation();
  const [
    reject_request,
    { isLoading: RejectLoading, isSuccess: RejectSuccess },
  ] = useRejectReviewMutation();

  useEffect(() => {
    if (ApproveSuccess || RejectSuccess) window.location.reload();
  }, [ApproveSuccess || RejectSuccess]);

  return (
    <Card className="w-full shadow-none">
      <div className="flex flex-col gap-1">
        <ReviewRadio
          title="Одобрить"
          description="Нажмите чтобы одобрить публикацию этого объявления."
          onClick={() => setState((prev) => ({ ...prev, isApprove: true }))}
          another={[() => setState((prev) => ({ ...prev, isReject: false }))]}
          active={state.isApprove}
          disabled={
            payload.origin.statusReview == "accept" ||
            payload.origin.statusReview == "reject"
          }
        />
        <ReviewRadio
          title="Отказать"
          description="Нажмите чтобы отказать в публикации этого объявления."
          onClick={() => setState((prev) => ({ ...prev, isReject: true }))}
          another={[() => setState((prev) => ({ ...prev, isApprove: false }))]}
          active={state.isReject}
          disabled={
            payload.origin.statusReview == "accept" ||
            payload.origin.statusReview == "reject"
          }
        />
      </div>
      <Textarea
        placeholder="Leave a comment..."
        required
        rows={2}
        disabled={
          !state.isReject ||
          payload.origin.statusReview == "accept" ||
          payload.origin.statusReview == "reject"
        }
        value={state.reason}
        onChange={(ev) =>
          setState((prev) => ({ ...prev, reason: ev.target.value }))
        }
      />
      <hr />
      <div className="flex flex-col gap-2">
        <Button
          color="transparent"
          size="lg"
          className="w-full bg-[#835de1] hover:bg-[#9b7ef1] text-white transition"
          disabled={
            payload.origin.statusReview == "accept" ||
            payload.origin.statusReview == "reject"
          }
          onClick={() => {
            if (state.isApprove) approve_request(review_uuid!);
            if (state.isReject)
              reject_request({
                uuid: review_uuid!,
                reason: state.reason,
              });
          }}
        >
          {ApproveLoading || RejectLoading ? (
            <Spinner color="purple" />
          ) : (
            <span>Отправить</span>
          )}
        </Button>
        <Button
          color="transparent"
          size="lg"
          className="w-full hover:bg-gray-100 text-gray-500 transition"
          onClick={() => navigate(-1)}
        >
          <span>Назад</span>
        </Button>
      </div>
    </Card>
  );
};
