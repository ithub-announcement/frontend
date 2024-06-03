import { useDeleteTagMutation } from "@/entities/tags/tags.api";
import { TagType } from "@/entities/tags/types/tags";
import { Button, Spinner, Table, Tooltip } from "flowbite-react";
import { FC, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { TiFolderDelete } from "react-icons/ti";
import { DeleteModal } from "../delete-modal/delete-modal.component";

export const TagRow: FC<TagType> = (props) => {
  const [state, setState] = useState<boolean>(false);
  const [request, { isLoading }] = useDeleteTagMutation();

  return (
    <>
      <DeleteModal
        id={props.id}
        active={state}
        setActive={setState}
        deleteRequest={request}
      />
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap dark:text-white">
          {props.id}
        </Table.Cell>
        <Table.Cell className="text-gray-900">{props.value}</Table.Cell>
        <Table.Cell className="text-gray-900">
          <div className="flex gap-1 justify-start items-center">
            <GoDotFill className="text-xl" style={{ color: props.baseColor }} />
            {props.baseColor}
          </div>
        </Table.Cell>
        <Table.Cell className="whitespace-nowrap dark:text-white flex justify-end">
          <Button as="span" color="transparent" onClick={() => setState(true)}>
            <Tooltip content="Удалить">
              {isLoading ? (
                <Spinner color="purple" size="sm" />
              ) : (
                <TiFolderDelete className="text-xl hover:cursor-pointer" />
              )}
            </Tooltip>
          </Button>
        </Table.Cell>
      </Table.Row>
    </>
  );
};
