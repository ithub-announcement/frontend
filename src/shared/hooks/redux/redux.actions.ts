import { EditorSliceActions } from "@/app/store/slices/editor.slice";
import { GlobalSliceActions } from "@/app/store/slices/global.slice";
import { ReviewSliceActions } from "@/app/store/slices/rewview.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const AllActions = {
  ...EditorSliceActions,
  ...ReviewSliceActions,
  ...GlobalSliceActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
