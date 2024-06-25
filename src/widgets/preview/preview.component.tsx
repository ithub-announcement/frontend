import { FC } from "react";
import { PreviewProps } from "./preview";
import { Avatar } from "flowbite-react";
import { TagCard } from "../tag/tag.component";

export const Preview: FC<PreviewProps> = (_props) => {
  return (
    <div className="w-full min-h-full flex flex-col gap-5 px-4">
      <div>
        <h2 className="w-full text-5xl text-black dark:text-white font-bold mb-8">
          {_props.title}
        </h2>
        {_props.tags.length !== 0 && (
          <div className="flex gap-2 mb-5">
            {_props.tags.map((el) => (
              <TagCard key={el.id} {...el} />
            ))}
          </div>
        )}
        <div className="w-full flex gap-2 justify-start items-center">
          <Avatar size="xs" rounded />
          <span>
            {_props.authorId} •{" "}
            {new Date(_props.dateTime).getUTCDate() ==
            new Date().getUTCDate() ? (
              "Сегодня"
            ) : (
              <>
                {new Intl.DateTimeFormat("ru-Ru").format(
                  new Date(_props.dateTime)
                )}
              </>
            )}
          </span>
        </div>
      </div>
      <div>
        <span className="w-full text-xl text-black dark:text-white font-normal whitespace-pre-line">
          {_props.content}
        </span>
      </div>
    </div>
  );
};
