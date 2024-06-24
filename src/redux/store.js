import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    },
});
// export const sweApi = createApi({
//     reducerPath: "sweApi",
//     baseQuery: fetchBaseQuery({ baseUrl: }),
//     endpoints: (builder) => ({
//         getProductbyId: builder.query({
//             query: (name) => `product/${id}`,
//         }),
//     }),
// })

// export const store = configureStore({
