import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: "cartSlice",
    initialState: {
        items: [],
        countOfOrders: 0,
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push({ ...action.payload, quantity: 1 });
            state.countOfOrders++;
        },
        incrementCart: (state, action) => {
            const element = state.items.find((item) => item.id === action.payload.id);
            element.quantity += 1;
            state.countOfOrders++;
        },
        decrementCart: (state, action) => {
            const element = state.items.find((item) => item.id === action.payload.id);
            if (element.quantity > 1) {
                element.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id != action.payload.id);
            }
            state.countOfOrders--;
        }
    }

});

export const { addItems, incrementCart, decrementCart } = cart.actions;
export default cart.reducer;