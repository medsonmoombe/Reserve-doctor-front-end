import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Reservations() {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);

  const fetchReservations = async () => {
    await axios
      .get(
        'https://doctor-re.onrender.com/api/v1/reservations',
      )
      .then((res) => setData(res.data));
  };

  const result = data.filter((reservedDoctor) => reservedDoctor.user_id === user.user.id);

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="container-fluid p-0 flex w-full">
      <div className="container-fluid flex flex-col w-full h-screen items-center px-4 md:px-0 sm:px-4">
        <h1 className="text-3xl md:text-4xl sm:text-md font-bold text-lime-600 md:mt-16 mt-24 mb-6">List of reservations</h1>
        <table className="table table-striped md:w-8/12 w-full mx-2 bg-lime-600 mt-6">
          <thead className="text-white font-normal uppercase">
            <tr className="text-left">
              <th className="pl-2 py-2">Doctor(s)</th>
              <th>City</th>
              <th>Bill</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="bg-slate-300">
            {
              result?.map((reservation) => (
                <tr key={reservation.id} className="odd:bg-white even:bg-slate-100">
                  <td className="pl-2 py-2">{reservation.doctor.name}</td>
                  <td>{reservation.city}</td>
                  <td>
                    $
                    {' '}
                    {reservation.doctor.bill}
                  </td>
                  <td>{reservation.datetime}</td>
                </tr>
              )) ?? <tr><td colSpan="12"> No reservations Available yet.</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
