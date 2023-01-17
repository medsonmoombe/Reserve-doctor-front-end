/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const DoctorCard = ({
  id, avatar, speciality, name, doctors, setDoctors,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const removeDoctor = (id) => {
    axios
      .delete(`https://doctor-re.onrender.com/api/v1/doctors/${Number(id)}`)
      .then(() => {
        let filteredDoctors = [];
        filteredDoctors = doctors.filter((doctor) => Number(doctor.id) !== Number(id));
        setDoctors(filteredDoctors);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  return (
    <>
      <p>{errorMessage}</p>
      <section key={id}>
        <div>
          <img src={avatar} alt={name} className="del-doc-pic" />
        </div>
        <div className="model-detail d-flex flex-column justify-content-center align-items-center">
          <h3 className="h4 mt-3">{name}</h3>
          <div className="d-flex flex-column justify-content-center align-items-center gap-2 mt-2 flex-bt">
            <h5 className="h6 pt-1">{speciality}</h5>
            <button
              type="button"
              onClick={() => removeDoctor(id)}
              className="btn btn-danger mb-3 del-doc"
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

DoctorCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  doctors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  setDoctors: PropTypes.func.isRequired,
};

export default DoctorCard;
