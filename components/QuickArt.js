import React from "react";
import styles from "../styles/quickArt.module.css";
const quickArt = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.qaHeader}>Quick Art</h1>
        <p className={styles.qaDesc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente at
          ut possimus et. Corporis aliquam nisi impedit, ipsa quibusdam dolor
          quisquam necessitatibus perferendis obcaecati itaque maxime, illo
          illum quod omnis.
        </p>
      </div>
      <div className={styles.cont}>
        <div className={styles.cardCont}>
          <div className={styles.card}>
            {" "}
            <div className={styles.front}>front</div>
            <div className={styles.back}>back</div>
          </div>
        </div>
        <div className={styles.cardCont}>
          <div className={styles.card}>
            {" "}
            <div className={styles.front}>front</div>
            <div className={styles.back}>back</div>
          </div>
        </div>
        <div className={styles.cardCont}>
          <div className={styles.card}>
            {" "}
            <div className={styles.front}>front</div>
            <div className={styles.back}>back</div>
          </div>
        </div>
        <div className={styles.cardCont}>
          <div className={styles.card}>
            {" "}
            <div className={styles.front}>front</div>
            <div className={styles.back}>back</div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default quickArt;
