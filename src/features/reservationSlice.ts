import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Reservation {
    id: string,
    customerName: string
}

interface ReservationState {
    value: Reservation[]
}

const initialState: ReservationState = {
    value: []
}

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<Reservation>) => {
            state.value.push(action.payload);
        },
        removeReservation: (state, action: PayloadAction<string>) => {
            const filteredList = state.value.filter(item => item.id !== action.payload)
            state.value = filteredList;
        }
    }
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;