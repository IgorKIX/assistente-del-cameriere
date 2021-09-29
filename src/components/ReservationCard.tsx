import React from "react";
import { useDispatch } from "react-redux";
import { addTable } from "../features/tableSlice";
import { removeReservation, Reservation } from "../features/reservationSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  reservation: Reservation
}

export default function ReservationCard({ reservation }: ReservationCardTypes) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(reservation.id));
        dispatch(
          addTable({
            id: uuid(),
            customerName: reservation.customerName,
            food: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {reservation.customerName}
    </div>
  );
}
