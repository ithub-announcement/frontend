import { TagType } from "@/entities/tags/types/tags";
import { Table } from "flowbite-react";
import { FC } from "react";
import { GoDotFill } from "react-icons/go";

export const TagRow: FC<TagType> = (props) => {
  return (
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
    </Table.Row>
  );
};
