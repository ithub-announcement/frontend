import { TagPayloadType } from "@/entities/tags/types/tags";
import { Badge } from "flowbite-react";
import { FC } from "react";

export const TagCard: FC<
  TagPayloadType & {
    onClick?: () => void;
  }
> = (props) => {
  return (
    <Badge
      onClick={props.onClick}
      color="transparent"
      size="sm"
      className="border-2"
      style={{ borderColor: "#" + props.baseColor }}
      {...props}
    >
      <p className="flex gap-1">
        <span style={{ color: "#" + props.baseColor }} className="opacity-70">
          #
        </span>
        <span style={{ color: "#" + props.baseColor }}>
          {props.value ? props.value : "Название"}
        </span>
      </p>
    </Badge>
  );
};
