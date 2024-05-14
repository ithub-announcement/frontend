import { FC } from "react";
import { DeleteModalProps } from "./delete-modal";
import { Button, Modal } from "flowbite-react";

export const DeleteModal: FC<DeleteModalProps> = (props) => {
  return (
    <Modal
      show={props.active}
      size="md"
      onClose={() => props.setActive(false)}
      popup
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-start">
          <h5 className="text-black text-xl font-bold">Подтвердите действие</h5>
          <p>Вы действительно хотите удалить этот ресурс?</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="w-full"
          color="gray"
          onClick={() => props.setActive(false)}
        >
          <span>Отмена</span>
        </Button>
        <Button
          className="w-full bg-[#32343A]"
          color="failure"
          onClick={() => props.deleteRequest(props.id)}
        >
          <span>Удалить</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
