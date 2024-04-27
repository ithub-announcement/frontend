import { useSaveDraft } from "@/features/drafts/useSaveDraft.feature";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { Button, Tooltip } from "flowbite-react";
import { FC } from "react";
import { GoChevronLeft } from "react-icons/go";
import { LuSaveAll } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const EditorHead: FC = () => {
  const payload = useTypedSelector((state) => state.EditorSliceReducer);
  const navigate = useNavigate();

  const save = useSaveDraft();

  return (
    <>
      <div className="w-full h-fit flex justify-center items-center p-2 mb-5 absolute">
        <div className="w-full max-w-[1280px] flex justify-between">
          <div>
            <Button as="span" color="transparent" onClick={() => navigate(-1)}>
              <Tooltip content="Назад">
                <GoChevronLeft className="text-2xl hover:cursor-pointer" />
              </Tooltip>
            </Button>
          </div>
          <div className="flex gap-2">
            {JSON.stringify(payload.origin) !==
              JSON.stringify(payload.wrapper) &&
              payload.wrapper.title &&
              payload.wrapper.content && (
                <Button
                  color="transparent"
                  onClick={save}
                  className="disabled:bg-transparent disabled:cursor-no-drop disabled:opacity-70 ring-0"
                  disabled={payload.editor.disable_editor}
                >
                  <Tooltip content="Сохранить">
                    <LuSaveAll className="text-2xl hover:cursor-pointer" />
                  </Tooltip>
                </Button>
              )}
          </div>
        </div>
      </div>
    </>
  );
};
