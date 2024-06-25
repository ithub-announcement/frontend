import { usePostSendToReviewMutation } from "@/entities/review/review.api";
import { useGetListOfTagsQuery } from "@/entities/tags/tags.api";
import { useActions } from "@/shared/hooks/redux/redux.actions";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { Button, FloatingLabel, Select, Spinner } from "flowbite-react";
import { FC, useEffect, useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { TagCard } from "../tag/tag.component";

export const SendToReviewForm: FC = () => {
  const payload = useTypedSelector((state) => state.EditorSliceReducer);
  const { setEditorTitle } = useActions();
  const navigate = useNavigate();
  const [state, setState] = useState<number[]>([]);

  const { data: TagList, isLoading: TagLoading } = useGetListOfTagsQuery();
  const [request, { isLoading, isSuccess, data, isError, error }] =
    usePostSendToReviewMutation();

  const handleCategoryChange = (tag: string) => {
    const isSelected = state.includes(+tag);
    console.log(state);
    if (isSelected) {
      setState(state.filter((item) => item !== +tag));
    } else {
      setState([...state, +tag]);
    }
  };

  useEffect(() => {
    if (isSuccess) navigate("/drafts");
  }, [isSuccess, data, !isLoading]);

  return (
    <>
      <div className="mb-5">
        <FloatingLabel
          variant="outlined"
          label="Название"
          defaultValue={payload.wrapper.title}
          onChange={(e) => setEditorTitle(e.target.value)}
        />
        <div>
          <div className="flex flex-col gap-2 my-5">
            <p>Выбранные категории:</p>
            <div className="flex flex-row gap-3">
              {state.map((el) => (
                <TagCard
                  key={el}
                  {...TagList!.find((x) => x.id === el)!}
                  onClick={() => handleCategoryChange(el.toString())}
                />
              ))}
            </div>
          </div>
          <Select
            className="w-full"
            disabled={TagLoading}
            onChange={(ev) => handleCategoryChange(ev.target.value)}
          >
            <option defaultChecked>Выбрать категории</option>
            {TagList?.map((el) => (
              <option
                key={el.id}
                value={el.id}
                disabled={state.includes(el.id)}
              >
                {el.value}
              </option>
            ))}
          </Select>
        </div>
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
              tags: state,
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
