import HeroSection from "./hero/page";
import Nav from "./Component/navbar/Navigation";
import Features from "./Features/Page";
import Portfolio from "./Portfolio/page";
import Resume from "./resume/page";
import AwesomeClients from "./Clients/Clients";
import ContactPage from "./Contact/page";

export default function Home() {
  return (
    <div>
    <main className=" px-[2rem] sm:px-[5rem]">
      <Nav />
      <HeroSection />
      <Features />
      <Portfolio />
      <Resume />
      <AwesomeClients />
      <ContactPage />
    </main>
    </div>
  );
}
