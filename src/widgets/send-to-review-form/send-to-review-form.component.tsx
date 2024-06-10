import { usePostSendToReviewMutation } from "@/entities/review/review.api";
import { useActions } from "@/shared/hooks/redux/redux.actions";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { Button, FloatingLabel, Spinner } from "flowbite-react";
import { FC, useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const SendToReviewForm: FC = () => {
  const payload = useTypedSelector((state) => state.EditorSliceReducer);
  const { setEditorTitle } = useActions();
  const navigate = useNavigate();

  const [request, { isLoading, isError, error }] =
    usePostSendToReviewMutation();

  return (
    <>
      <div className="mb-5">
        <FloatingLabel
          variant="outlined"
          label="Название"
          defaultValue={payload.wrapper.title}
          onChange={(e) => setEditorTitle(e.target.value)}
        />
        <FloatingLabel variant="outlined" label="Категории" />
      </div>
      {isError && error && (
        <div className="flex gap-1 justify-start items-center mb-5">
          <BiErrorAlt className="text-red-500 text-sm" />
          <p className="text-red-500 text-sm">Ошибка отправки</p>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <Button
          color="transparent"
          size="lg"
          className="w-full bg-[#835de1] hover:bg-[#9b7ef1] text-white transition"
          onClick={() =>
            request({
              uuid: payload.origin.uuid,
              tags: [12],
            })
          }
        >
          {isLoading ? (
            <Spinner color="purple" size="sm" />
          ) : (
            <span>Отправить</span>
          )}
        </Button>
        <Button
          color="transparent"
          size="lg"
          className="w-full bg-transparent hover:bg-gray-100 text-gray-500 transition"
          onClick={() => navigate(-1)}
        >
          <span>Назад</span>
        </Button>
      </div>
    </>
  );
};
