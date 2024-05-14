import { useActions } from "@/shared/hooks/redux/redux.actions";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { ChangeEvent, useEffect, useRef } from "react";

export const EditorBody = () => {
  const payload = useTypedSelector((state) => state.EditorSliceReducer);
  const { setEditorTitle, setEditorValue } = useActions();

  // TODO
  const textAreaRef = useRef<any>(null);

  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditorValue(event.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [payload.wrapper.content]);

  return (
    <>
      <h1 className="*:text-4xl font-bold mb-5">
        <input
          type="text"
          defaultValue={payload.wrapper.title}
          maxLength={64}
          className="w-full h-fit bg-transparent outline-none focus:ring-0 border-none p-2 disabled:opacity-50 disabled:cursor-wait"
          placeholder="Заголовок"
          autoFocus={true}
          onChange={(e) => setEditorTitle(e.target.value)}
          disabled={payload.editor.disable_editor}
        />
      </h1>
      <p className="*:text-xl">
        <textarea
          defaultValue={payload.wrapper.content}
          className="w-full h-auto bg-transparent outline-none focus:ring-0 border-none p-2 min-h-screen disabled:opacity-50 disabled:cursor-wait overflow-hidden pb-10"
          placeholder="Текст объявления"
          rows={1}
          onChange={(e) => handleBodyChange(e)}
          disabled={payload.editor.disable_editor}
          ref={textAreaRef}
        />
      </p>
    </>
  );
};
