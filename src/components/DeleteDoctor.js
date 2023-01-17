import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DoctorCard from './DoctorCard';

const DeleteDoctor = () => {
  const [doc, setDoc] = useState([]);
  const user = useSelector((state) => state.user.user);
  const doctors = useSelector((state) => state.doctors.doctor);
  const userDoctor = doctors.filter((doc) => Number(doc.user_id) === Number(user.id));
  console.log(doc);
  useEffect(() => {
    setDoc(userDoctor);
  }, []);
  return (
    <>
      { userDoctor.length === 0 ? (
        <div className="flex lg:absolute lg:left-[30%] lg:top-[5%] justify-center items-center">
          <h2 className="mt-5 text-center text-amber-700">
            You don&apos;t have any doctors in our system yet.
          </h2>
        </div>
      )
        : (
          <div className="delete-doc-div">
            <h2 className="h2 text-center mt-5 sm:text-sm text-uppercase">
              <strong className="text-xl">WELCOME TO THE DELETE AREA</strong>
            </h2>
            <p className="text-center text-muted mb-5 pt-2 text-sm">
              Please click on delete button below to delete a doctor
            </p>
            <div className="container-fluid d-flex flex-wrap justify-content-center">
              {userDoctor.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  id={doctor.id}
                  avatar={doctor.avatar}
                  name={doctor.name}
                  speciality={doctor.speciality}
                  doctors={doctors}
                  setDoctors={setDoc}
                />
              ))}
            </div>
          </div>
        )}
    </>
  );
};
export default DeleteDoctor;
