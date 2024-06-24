import { ReviewType } from "@/entities/review/types/review";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { origin: ReviewType } = {
  origin: {
    uuid: "",
    title: "",
    content: "",
    authorId: "",
    dateTime: null!,
    reason: "",
    inspector: "",
    tags: [],
    statusReview: "review",
  },
};

export const ReviewSlice = createSlice({
  name: "ReviewSlice",
  initialState,
  reducers: {
    setReviewOriginState: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const ReviewSliceReducer = ReviewSlice.reducer;
export const ReviewSliceActions = ReviewSlice.actions;
