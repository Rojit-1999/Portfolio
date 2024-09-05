import HeroSection from "./hero/page";
import Nav from "./Component/navbar/Navigation";
import Features from "./Features/Page";
import Portfolio from "./Portfolio/page";
import Resume from "./resume/page";
import AwesomeClients from "./Clients/Clients";
import ContactPage from "./Contact/page";
import Footer from "./Footer/page";
import LoadingPage from "./loading";

export default function Home() {
  return (
    <div>
      <LoadingPage />
      <Nav />
      <main className=" px-[2rem] sm:px-[5rem] overflow-x-hidden">
        <HeroSection />
        <Features />
        <Portfolio />
        <Resume />
        <AwesomeClients />
        <ContactPage />
        <Footer />
      </main>
    </div>
  );
}
