import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/layout/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <EnquiryForm />
    </>
  );
}

function ServicesPage() {
  return <Services />;
}

function HowItWorksPage() {
  return <HowItWorks />;
}

function EnquiryPage() {
  return <EnquiryForm />;
}

function App() {
  return (
    <div className="min-h-screen bg-[#f8f7f3] text-[#1c1c1c]">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;