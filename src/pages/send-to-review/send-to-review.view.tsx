import { useActions } from "@/shared/hooks/redux/redux.actions";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { Button, FloatingLabel } from "flowbite-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const SendToReviewView: FC = () => {
  const payload = useTypedSelector((state) => state.EditorSliceReducer);
  const { setEditorTitle } = useActions();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full max-w-[560px] min-h-screen mx-auto">
        <div className="w-full p-6 pt-10 flex justify-between flex-row mb-5">
          <h3 className="text-3xl font-bold">Отправка на рассмотрение</h3>
        </div>
        <div className="px-6">
          <FloatingLabel
            variant="outlined"
            label="Название"
            defaultValue={payload.wrapper.title}
            onChange={(e) => setEditorTitle(e.target.value)}
          />
          <div className="flex flex-col gap-1">
            <Button
              color="transparent"
              size="lg"
              className="w-full bg-[#835de1] hover:bg-[#9b7ef1] text-white transition"
            >
              <span>Отправить</span>
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
        </div>
      </div>
    </>
  );
};

export default SendToReviewView;
