import Image from "next/image";
import Header from "./component/Header";
// import Hero from "@/components/Hero";
import Hero from "./component/Hero";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
