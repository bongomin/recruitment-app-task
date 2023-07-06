import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import jobPostingReducer from './slices/jobPosting';
import { createWrapper } from "next-redux-wrapper"

export const store = configureStore({
    reducer: {
        jobPostingList: jobPostingReducer,
    }
});

// export type AppStore = ReturnType<typeof store>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

// export const wrapper = createWrapper<AppStore>(store)