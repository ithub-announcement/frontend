import { useGetListOfTagsQuery } from "@/entities/tags/tags.api";
import { Button, Card, Select } from "flowbite-react";
import { FC, useState } from "react";
import { TagCard } from "../tag/tag.component";
import { useActions } from "@/shared/hooks/redux/redux.actions";
import { FaSearch } from "react-icons/fa";

export const SearchByTagsCard: FC = () => {
  const [state, setState] = useState<number[]>([]);
  const { data: TagList, isLoading: TagLoading } = useGetListOfTagsQuery();
  const { setPublicationsSearchParams } = useActions();

  const handleClearState = () => setState([]);

  const saveTagsToGlobalState = () => {
    setPublicationsSearchParams(state);
  };

  const handleCategoryChange = (tag: string) => {
    const isSelected: boolean = state.includes(+tag);
    console.log(state);
    if (!isNaN(+tag)) {
      if (isSelected) {
        setState(state.filter((item) => item !== +tag));
      } else {
        setState([...state, +tag]);
      }
    }
  };

  return (
    <Card className="w-full shadow-none">
      <h6 className="text-lg font-medium">
        Поиск по категориям {state.length !== 0 && `(${state.length})`}
      </h6>
      <div className="flex flex-row flex-wrap gap-1">
        {state.map((el) => (
          <TagCard
            key={el}
            {...TagList!.find((x) => x.id === el)!}
            onClick={() => handleCategoryChange(el.toString())}
          />
        ))}
      </div>
      <Select
        className="w-full"
        disabled={TagLoading}
        onChange={(ev) => handleCategoryChange(ev.target.value)}
      >
        <option defaultChecked>Выбрать категории</option>
        {TagList?.map((el) => (
          <option key={el.id} value={el.id} disabled={state.includes(el.id)}>
            {el.value}
          </option>
        ))}
      </Select>
      <div className="flex flex-col gap-1">
        <Button
          color="transparent"
          size="lg"
          className="w-full bg-transparent hover:bg-gray-100 text-gray-500 transition"
          onClick={() => saveTagsToGlobalState()}
        >
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaSearch className="text-sm" />
            <span>Поиск</span>
          </div>
        </Button>
        <Button
          color="transparent"
          size="lg"
          className="w-full bg-transparent hover:bg-gray-100 text-gray-500 transition"
          onClick={() => handleClearState()}
        >
          <span>Очистить</span>
        </Button>
      </div>
    </Card>
  );
};
