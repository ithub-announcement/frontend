import { ModalType } from "@/app/types/components";
import { useCreateNewTagMutation } from "@/entities/tags/tags.api";
import { TagPayloadType } from "@/entities/tags/types/tags";
import {
  Button,
  FloatingLabel,
  Modal,
  Spinner,
  TextInput,
} from "flowbite-react";
import { FC, useEffect, useState } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import { TagCard } from "../tag/tag.component";

export const TagsModal: FC<ModalType> = (props) => {
  const [state, setState] = useState<TagPayloadType>({
    value: "",
    baseColor: "000000",
  });
  const [request, { isLoading, isSuccess }] = useCreateNewTagMutation();

  useEffect(() => {
    if (isSuccess) props.setActive(false);
  }, [isSuccess]);

  return (
    <>
      <Modal show={props.active} onClose={() => props.setActive(false)}>
        <Modal.Header>Создать категорию</Modal.Header>
        <Modal.Body>
          <div className="p-10 border-dashed border-2 border-gray-200 rounded-md mb-8 flex justify-center items-center">
            <TagCard {...state} />
          </div>
          <div className="flex flex-col gap-2">
            <FloatingLabel
              variant="outlined"
              label="Название категории"
              defaultValue={state.value}
              onChange={(ev) =>
                setState((prev) => ({ ...prev, value: ev.target.value }))
              }
            />
            <FloatingLabel
              variant="outlined"
              label="Цвет категории"
              defaultValue={state.baseColor}
              onChange={(ev) =>
                setState((prev) => ({ ...prev, baseColor: ev.target.value }))
              }
            />
            <TextInput className="w-full" type="color" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="transparent"
            size="lg"
            className="w-full bg-transparent hover:bg-gray-100 text-gray-500 transition"
            onClick={() => props.setActive(false)}
          >
            <span>Отмена</span>
          </Button>
          <Button
            color="transparent"
            size="lg"
            className="w-full bg-[#835de1] hover:bg-[#9b7ef1] text-white transition"
            onClick={() => request(state)}
            disabled={state.value.length <= 2}
          >
            {isLoading ? (
              <Spinner color="purple" size="sm" />
            ) : (
              <div className="flex justify-center items-center gap-2">
                <MdCreateNewFolder className="text-xl" />
                <span>Создать</span>
              </div>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
