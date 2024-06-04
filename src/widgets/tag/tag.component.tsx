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
        <span style={{ color: "#" + props.textColor }} className="opacity-70">
          #
        </span>
        <span style={{ color: "#" + props.textColor }}>
          {props.value ? props.value : "Название"}
        </span>
      </p>
    </Badge>
  );
};
