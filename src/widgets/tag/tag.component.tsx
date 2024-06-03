import { TagPayloadType } from "@/entities/tags/types/tags";
import { Badge } from "flowbite-react";
import { FC } from "react";

export const TagCard: FC<TagPayloadType> = (props) => {
  return (
    <Badge
      color="transparent"
      size="sm"
      style={{ backgroundColor: "#" + props.baseColor }}
    >
      <p className="flex gap-1">
        <span className="opacity-70">#</span>
        {props.value ? props.value : "Название"}
      </p>
    </Badge>
  );
};
