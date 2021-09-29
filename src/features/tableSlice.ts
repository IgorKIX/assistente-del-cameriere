import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TableState {
    value: Table[]
}

interface Table {
    id: string,
    customerName: string,
    food: string[]
}

interface AddFoodToTablePayload {
    id:string,
    food: string
}

const initialState: TableState = {
    value: []
}

export const tableSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addTable: (state, action: PayloadAction<Table>) => {
            state.value.push(action.payload);
        },
        addFoodToTable: (state, action: PayloadAction<AddFoodToTablePayload>) => {
            state.value.forEach(customer => {
                if(customer.id === action.payload.id) {
                    customer.food.push(action.payload.food)
                }
            })
        }
    }
})

export const { addTable, addFoodToTable } = tableSlice.actions;

export default tableSlice.reducer;