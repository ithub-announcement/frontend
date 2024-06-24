import { Button, Radio } from "flowbite-react";
import { FC, HTMLAttributes } from "react";

export const ReviewRadio: FC<
  HTMLAttributes<HTMLInputElement> & {
    title: string;
    description: string;
    active?: boolean;
    onClick?: <T>(args?: T) => void;
    another?: (() => void)[];
    disabled?: boolean;
  }
> = (props) => {
  const checkBoxHandler = () => {
    props.another && props.another.map((fn) => fn());
    props.onClick && props.onClick();
  };

  return (
    <Button
      disabled={props.disabled}
      color="transparent"
      className="*:w-full hover:bg-gray-100"
      onClick={() => checkBoxHandler()}
    >
      <div className="w-full flex justify-start items-start gap-5">
        <div className="py-2">
          <Radio
            className="w-5 h-5 select-none pointer-events-none"
            checked={props.active}
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="w-full text-lg text-gray-600">{props.title}</span>
          <span className="w-full text-gray-400">{props.description}</span>
        </div>
      </div>
    </Button>
  );
};
