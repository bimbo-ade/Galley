import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import bgimg from "../public/assets/img/bgimg.jpg";
import About from "../components/About";
import QuickArt from "../components/QuickArt";
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
