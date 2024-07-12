import { configureStore, createSlice } from '@reduxjs/toolkit';
interface SliderState {
    slideIndex: number;
    slides: {
        img_src: string;
        img_alt: string
    }[];
}
const initialState: SliderState = {
    slideIndex: 0,
    slides: [
        {
            img_src:
                "http://localhost:3000/slider/hl1.jpg", img_alt:
                "annoucment"
        },
        {
            img_src:
                "http://localhost:3000/slider/jt1.jpg", img_alt:
                "annoucment"
        },
        {
            img_src:
                "http://localhost:3000/slider/hl2.jpg", img_alt:
                "annoucment"
        },
        {
            img_src:
                "http://localhost:3000/slider/jt2.jpg", img_alt:
                "annoucment"
        },
        {
            img_src:
              "http://localhost:3000/slider/hl3.jpg", img_alt:
              "annoucment"
        },
        {
          img_src:
              "http://localhost:3000/slider/jt3.jpg", img_alt:
              "annoucment"
        },
    ],
};
const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        showNextSlide(state) {
            state.slideIndex = (state.slideIndex + 1) %
                state.slides.length;
        },
        showPreviousSlide(state) {
            state.slideIndex = (state.slideIndex - 1 +
                state.slides.length) % state.slides.length;
        },
    },
});
export const { showNextSlide, showPreviousSlide } = sliderSlice.actions;
export const store = configureStore({
    reducer: {
        slider: sliderSlice.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;