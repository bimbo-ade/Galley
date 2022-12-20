import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import bgimg from "../public/assets/img/bgimg.jpg";
export default function Home() {
  return (
    <div className="h-[700px] w-full absolute top-0 left-0">
      <Image
        src={bgimg}
        alt="bgimg"
        width={"100%"}
        height={"100%"}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  );
}
