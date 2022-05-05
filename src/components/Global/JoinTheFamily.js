import React, { useState } from "react";

import * as styles from "../../styles/Global/JoinTheFamily.module.css";
import star from "../../images/FP-star-gold.png";

export default function JoinTheFamily() {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send form info & request to backend
    alert(
      formInfo.firstName + ", your information has been sent to the FP team."
    );
    setFormInfo({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Join the family</h2>
          <img src={star} alt="FP Star" />
        </div>
        <p className={styles.p}>
          Ending family homelessness begins with paying attention.
          <br />
          Be the first to hear success stories, ways to get involved and more.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formInputContainer}>
            <input
              name="firstName"
              type="text"
              value={formInfo.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              name="lastName"
              type="text"
              value={formInfo.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              name="email"
              type="email"
              value={formInfo.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <button className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}

