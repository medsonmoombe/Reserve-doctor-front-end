/* eslint-disable radix */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
// import fetchDoctors from '../redux/doctors/doctors';

const DoctorDetails = () => {
  const params = useParams();

  const doctorsArray = useSelector((state) => state.doctors.doctor);
  const doctors = doctorsArray.filter((doc) => doc.id === parseInt(params.id));

  return (
    <div className="container w-full h-auto py-16 px-4 flex flex-col items-center">
      <div className="card w-full flex flex-col sm:flex-row md:flex-row md:w-10/12 mx-auto shadow-md p-4 gap-3 sm:gap-4 md:gap-6">
        <img src={doctors[0].avatar} alt={doctors[0].name} className="sm:w-6/12 md:w-[200px] md:h-auto w-[200px] h-[200px] rounded-md bg-lime-100" />
        <div className="w-full h-auto flex flex-col gap-3 pb-3">
          <span className="">
            <h2 className="font-bold text-xl">
              Name:
              {' '}
              <span className="font-normal text-grayDark">{doctors[0].name}</span>
            </h2>
          </span>
          <span className="">
            <h2 className="font-bold text-xl">
              Speciality:
              {' '}
              <span className="font-normal text-grayDark">{doctors[0].speciality}</span>
            </h2>
          </span>
          <div className="">
            <h2 className="font-bold text-xl">
              Bill:
              {' '}
              <span className="font-normal text-grayDark">
                $
                {doctors[0].bill}
              </span>
            </h2>
          </div>
          <div className="">
            <h2 className="font-bold text-xl">
              Location:
              {' '}
              <span className="font-normal text-grayDark">{doctors[0].location}</span>
            </h2>
          </div>
          <div className="">
            <h2 className="font-bold text-xl">
              Email:
              {' '}
              <span className="font-normal text-grayDark">{doctors[0].email}</span>
            </h2>
          </div>
          <span>
            <Link className="mt-2 py-2 bg-lime-500 hover:bg-lime-600 px-4 rounded-sm text-center" to="/reserve/"><span className="font-normal text-xl text-white">Reserve Now</span></Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
