import { useDeleteDraft } from "@/features/drafts/useDeleteDraft.feature";
import { useSaveDraft } from "@/features/drafts/useSaveDraft.feature";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { Button, Dropdown, Tooltip } from "flowbite-react";
import { FC, useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { LuSaveAll } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "../delete-modal/delete-modal.component";

export const EditorHead: FC = () => {
  const [IsActiveDeleteModal, setIsActiveDeleteModal] =
    useState<boolean>(false);
  const payload = useTypedSelector((state) => state.EditorSliceReducer);
  const navigate = useNavigate();

  const save = useSaveDraft();
  const deleteRequest = useDeleteDraft();

  return (
    <>
      <DeleteModal
        id={payload.origin.uuid}
        active={IsActiveDeleteModal}
        setActive={setIsActiveDeleteModal}
        deleteRequest={deleteRequest}
      />
      <div className="w-full h-fit flex justify-center items-center p-2 mb-5 z-20 absolute">
        {payload.origin.uuid && (
          <div className="absolute">
            <p className="text-gray-400 font-medium">
              {new Date(payload.origin.dateTime).getUTCDate() ==
              new Date().getUTCDate() ? (
                "Сегодня"
              ) : (
                <>
                  {new Intl.DateTimeFormat("ru-Ru").format(
                    new Date(payload.origin.dateTime)
                  )}
                </>
              )}
            </p>
          </div>
        )}
        <div className="w-full max-w-[1280px] flex justify-between">
          <div>
            <Button as="span" color="transparent" onClick={() => navigate("/")}>
              <Tooltip content="Выйти">
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
            {payload.origin.uuid && (
              <>
                <Dropdown
                  label={
                    <div className="flex justify-center items-center">
                      <IoMdMore className="text-2xl hover:cursor-pointer" />
                    </div>
                  }
                  dismissOnClick={false}
                  arrowIcon={false}
                  color="transparent"
                >
                  <Dropdown.Item
                    className="w-full flex disabled:bg-transparent disabled:cursor-no-drop disabled:opacity-70"
                    disabled={payload.origin == payload.wrapper}
                    onClick={() => setIsActiveDeleteModal(true)}
                  >
                    <span className="text-red-500">🗑 Удалить</span>
                  </Dropdown.Item>
                </Dropdown>
                <Button color="purple">
                  <span>Опубликовать</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
