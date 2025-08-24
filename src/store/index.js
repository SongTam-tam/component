import { configureStore } from '@reduxjs/toolkit';

// import xxxReducer from './modules/xxxSlice';

const store = configureStore({
    reducer: {
        //  xxx: xxxReducer;
    },
});

export default store;
