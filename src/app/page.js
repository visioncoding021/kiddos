import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Youtube from "./components/Youtube";
import Kahani from "./components/Kahani";
import Review from "./components/Review";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Intro/>
      <Youtube/>
      <Kahani/>
      <Review/>
    </div>
  );
}
