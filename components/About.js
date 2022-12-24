import styles from "../styles/about.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../public/assets/img/img1.jpg";
import img2 from "../public/assets/img/img2.jpg";
import img3 from "../public/assets/img/img3.jpg";
import img4 from "../public/assets/img/img4.jpg";
const Upcoming = () => {
  return (
    <div className={styles.cont}>
      <div>
        {" "}
        <h1 className={styles.aboutHeader}> About Vallgery</h1>
        <p className={styles.aboutDesc}>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente at
          ut possimus et. Corporis aliquam nisi impedit, ipsa quibusdam dolor
          quisquam necessitatibus perferendis obcaecati itaque maxime, illo
          illum quod omnis.
        </p>
        <button className={styles.aboutButton}>Know More</button>
      </div>
      <div className={styles.imgCont}>
        <motion.div
          className={styles.img}
          animate={{
            x: ["0px", "260px", "260px", "0px", "0px"],
            y: ["0px", "0px", "207px", "207px", "0px"],
          }}
          transition={{
            duration: 20,
            yoyo: Infinity,
          }}
        >
          <Image src={img1} height={500} alt="img1" />
        </motion.div>
        <motion.div
          className={styles.img}
          animate={{
            x: ["0px", "0px", "-260px", "-260px", "0px"],
            y: ["0px", "207px", "207px", "0px", "0px"],
          }}
          transition={{
            duration: 20,
            yoyo: Infinity,
          }}
        >
          <Image src={img2} height={500} alt="img2" />
        </motion.div>
        <motion.div
          className={styles.img}
          animate={{
            x: ["0px", "0px", "260px", "260px", "0px"],
            y: ["0px", "-207px", "-207px", "0px", "0px"],
          }}
          transition={{
            duration: 20,
            yoyo: Infinity,
          }}
        >
          <Image src={img3} height={500} alt="img3" />
        </motion.div>
        <motion.div
          className={styles.img}
          animate={{
            x: ["0px", "-260px", "-260px", "0px", "0px"],
            y: ["0px", "0px", "-207px", "-207px", "0px"],
          }}
          transition={{
            duration: 20,
            yoyo: Infinity,
          }}
        >
          <Image src={img4} height={500} alt="img4" />
        </motion.div>
      </div>
    </div>
  );
};

export default Upcoming;
