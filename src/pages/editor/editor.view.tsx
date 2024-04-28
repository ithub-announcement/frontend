import { useTitle } from "@/shared/hooks/react/useTitle.hook";
import { Editor } from "@/widgets/editor/editor.component";
import { FC } from "react";

const EditorView: FC = () => {
  useTitle("Редактор");
  return <Editor />;
};

export default EditorView;
