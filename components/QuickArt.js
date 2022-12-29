import React from "react";
import Image from "next/image";
import img1 from "../public/assets/img/img1.jpg";
import img2 from "../public/assets/img/img2.jpg";
import img3 from "../public/assets/img/img3.jpg";
import img4 from "../public/assets/img/img4.jpg";
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
            <div className={styles.front}>
              {" "}
              <Image src={img4} height={500} alt="img1" />
            </div>
            <div className={styles.back}>
              <p> Ocean Fallgery</p>
            </div>
          </div>
        </div>
        <div className={styles.cardCont}>
          <div className={styles.card}>
            {" "}
            <div className={styles.front}>
              {" "}
              <Image src={img3} height={500} alt="img1" />
            </div>
            <div className={styles.back}>
              {" "}
              <p> River Molgery</p>
            </div>
          </div>
        </div>
        <div className={styles.cardCont}>
          <div className={styles.card}>
            {" "}
            <div className={styles.front}>
              {" "}
              <Image src={img2} height={500} alt="img1" />
            </div>
            <div className={styles.back}>
              {" "}
              <p> Desgellry</p>
            </div>
          </div>
        </div>
        <div className={styles.cardCont}>
          <div className={styles.card}>
            {" "}
            <div className={styles.front}>
              {" "}
              <Image src={img1} height={500} alt="img1" />
            </div>
            <div className={styles.back}>
              {" "}
              <p> Moongery</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default quickArt;
