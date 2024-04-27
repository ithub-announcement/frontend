import { FC } from "react";
import { EditorBody } from "./editor-body.component";
import { Center } from "../center/center.component";
import { EditorHead } from "./editor-head.component";

export const Editor: FC = () => {
  return (
    <>
      <EditorHead />
      <div className="w-full min-h-screen flex justify-center items-center">
        <Center>
          <div>
            <EditorBody />
          </div>
        </Center>
      </div>
    </>
  );
};
