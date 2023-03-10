import { isError, useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/gallery.module.css";
import { motion } from "framer-motion";

const Gallery = () => {
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=hcJCq__8W0u8hzpYYxfTWwCpuqULXxh-KG6aTaxEYdc"
    );
    console.log(response.data);
    return response.data;
  };

  const { data, status } = useQuery("users", fetchUsers);
  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && (
        <div className={styles.loaderCont}>
          <motion.div
            className={styles.loader}
            animate={{
              y: [
                "0px",
                "10px",
                "-10px",
                "10px",
                "-10px",
                "10px",
                "-10px",
                "10px",
                "-10px",
                "0px",
              ],
            }}
            transition={{
              duration: 5,
              yoyo: Infinity,
            }}
          ></motion.div>
        </div>
      )}
      {status === "success" && (
        <>
          <h1 className="py-[40px] font-bold text-center bg-black text-3xl  text-white h-[48px]">
            The gallery
          </h1>
          <div className={styles.image}>
            {data.map((user) => (
              <>
                <Image
                  src={user.urls.small}
                  alt="images"
                  width={400}
                  height={400}
                  key={user.id}
                  className={styles.images}
                />
                <div className={styles.overlay}></div>{" "}
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
