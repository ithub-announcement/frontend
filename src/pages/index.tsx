import { DefaultLayout } from "@/shared/layouts/default.layout";
import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { EditorLayoutView } from "./editor/editor.layout";

const EditorView = lazy(() => import("./editor/editor.view"));

const DraftsListView = lazy(() => import("./drafts/drafts-list.view"));

export const AppRouting: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<></>} />
        <Route path="drafts" element={<DraftsListView />} />
      </Route>
      <Route path="/editor" element={<EditorLayoutView />}>
        <Route index element={<EditorView />} />
        <Route path=":uuid_draft" element={<EditorView />} />
      </Route>
    </Routes>
  );
};
