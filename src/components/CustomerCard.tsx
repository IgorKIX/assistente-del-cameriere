import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToTable } from "../features/tableSlice";

interface CustomerCardTypes {
  id: string;
  customerName: string;
  food: string[];
}

export default function CustomerCard({
  id,
  customerName,
  food,
}: CustomerCardTypes) {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <p>{customerName}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (!customerFoodInput) return;
              dispatch(addFoodToTable({ id, food: customerFoodInput }));
              setCustomerFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
