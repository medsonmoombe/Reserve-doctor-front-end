import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useSelector } from 'react-redux';
import DoctorCard from './DoctorCard';

const DeleteDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  // const [loading, setLoading] = useState(false);

  const currentUser = localStorage.getItem('user') || '';
  const json = JSON.parse(currentUser);
  const user = (json);
  //  console.log(user.user);
  useEffect(() => {
    // setLoading(true);
    axios
      .get(`http://127.0.0.1:3000/api/v1/users/doctor/${user.user.id}`)
      .then((response) => {
        setDoctors(response.data.doctors);
        // setLoading(false);
      });
  }, []);

  // if (doctors.length <= 0) {
  //   if (loading) {
  //     return (
  //       <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
  //         <i className="fa-solid fa-spinner fa-spin fs-1" />
  //       </div>
  //     );
  //   }
  // }
  return (
    <>
      { doctors.length <= 0 ? (
        <div className="flex lg:absolute lg:left-[30%] lg:top-[5%] justify-center items-center">
          <h2 className="mt-5 text-center text-amber-700">
            You don&apos;t have any doctors in our system yet.
          </h2>
        </div>
      )
        : (
          <div className="delete-doc-div">
            <h2 className="h2 text-center mt-5 text-uppercase">
              <strong>WELCOME TO THE DELETE AREA</strong>
            </h2>
            <p className="text-center text-muted mb-5">
              Please click on delete button below to delete a doctor
            </p>
            <div className="container-fluid d-flex flex-wrap justify-content-center">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  id={doctor.id}
                  avatar={doctor.avatar}
                  name={doctor.name}
                  speciality={doctor.speciality}
                  doctors={doctors}
                  setDoctors={setDoctors}
                />
              ))}
            </div>
          </div>
        )}
    </>
  );
};
export default DeleteDoctor;
