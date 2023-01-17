/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchDoctors } from '../redux/doctor/DoctorListReducer';

function Reserve() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const doctor = useSelector((state) => state.doctors.doctor);
  const doctors = Array.from(doctor);
  const user = useSelector((state) => state.user);

  const reserveDoctor = async (reservations) => {
    await axios
      .post(
        `https://doctor-re.onrender.com/api/v1/reservations/${user.user.id}`, reservations,
      )
      .then((res) => res);
  };

  // const path = window.location.pathname;
  const { register, handleSubmit } = useForm();

  // onSubmit go to the path /reservations
  const onSubmit = (doctors) => {
    reserveDoctor(doctors);
    if (doctors.doctor_id === 'undefined') {
      setError(true);
    }
    // window.location.href = '/reservations';
  };

  return (
    <div className="container-fluid flex w-full">
      <div className="container-fluid w-full h-screen flex flex-col items-center p-8">
        <h1 className="text-3xl md:text-4xl sm:text-md font-bold text-lime-600 md:mt-16 mt-24 mb-6">Add Reservation</h1>
        {error ? <p className="text-red-700"> Please kindly select a Doctor, doctor field cant be empty! </p> : '' }
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" className="card w-full md:w-8/12 p-8 rounded-lg bg-mySpend-blueDoctorLight shadow-md">
          <div className="card-body w-full  md:flex gap-1 ">
            <div className="flex flex-col md:w-4/12">
              <label htmlFor="name" className="block text-grayDark text-bold text-lg md:text-center mt-2 md:mb-2">
                Date
              </label>
              <input type="date" name="date" {...register('datetime', { required: true })} />
            </div>
            <div className="flex flex-col md:w-4/12">
              <label htmlFor="name" className="block text-grayDark text-lg md:text-center mt-2 md:mb-2">
                Location
              </label>
              <input type="text" name="city" placeholder="Add City" {...register('city', { required: true })} />
            </div>
            <div className="flex flex-col md:w-4/12">
              <label htmlFor="name" className="block text-grayDark text-lg md:text-center mt-2 md:mb-2">
                Select Doctor
              </label>
              <select className=" bg-red-700 " name="doctor" placeholder="Choose a doctor" {...register('doctor_id')}>
                {
                  doctors.map((doctor) => (
                    <option className="cursor-pointer" key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>
          <button type="submit" className="bg-lime-600 text-white text-xl hover:bg-lime-700 font-semi-bold px-4 py-2 rounded-sm mt-6">Add Reservation</button>
        </form>
      </div>
    </div>
  );
}

export default Reserve;
