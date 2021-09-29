import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import { v4 as uuid } from "uuid";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;

    dispatch(
      addReservation({
        id: uuid(),
        customerName: reservationNameInput,
      })
    );
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((reservation) => (
                <ReservationCard key={reservation.id} reservation={reservation} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(({ id, customerName, food }) => (
            <CustomerCard
              key={id}
              id={id}
              customerName={customerName}
              food={food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
