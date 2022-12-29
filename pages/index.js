import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from "../components/About";
import QuickArt from "../components/QuickArt";
import Image from "next/image";
import bgimg from "../public/assets/img/bgimg.jpg";
export default function Home() {
  return (
    <>
      <Head>
        <title> Vallgery</title>
      </Head>
      <div className={styles.banner}></div>
      <About />
      <QuickArt />
    </>
  );
}
