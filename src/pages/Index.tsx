import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Scholarships from "@/components/Scholarships";
import Portals from "@/components/Portals";
import StudentInfo from "@/components/StudentInfo";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Scholarships />
        <Portals />
        <StudentInfo />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
