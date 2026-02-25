import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactSupport from "./components/ContactSupport";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import NoticeBanner from "./components/NoticeBanner";
import PopularSolutions from "./components/PopularSolutions";
import SupportModal from "./components/SupportModal";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState(0);
  const [ctaStatus, setCtaStatus] = useState("default");
  const ctaTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (ctaTimerRef.current) {
        clearTimeout(ctaTimerRef.current);
      }
    };
  }, []);

  const openModal = () => {
    setModalKey((prev) => prev + 1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitted = () => {
    setCtaStatus("sent");
    if (ctaTimerRef.current) {
      clearTimeout(ctaTimerRef.current);
    }
    ctaTimerRef.current = setTimeout(() => {
      setCtaStatus("default");
    }, 3000);
  };

  return (
    <Layout>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="pb-10">
                <Hero onOpenForm={openModal} ctaStatus={ctaStatus} />
                <NoticeBanner />
                <PopularSolutions />
                <Faqs />
                <ContactSupport onContact={openModal} />
              </main>
              <SupportModal
                key={modalKey}
                open={isModalOpen}
                onClose={closeModal}
                onSubmitted={handleSubmitted}
              />
            </>
          }
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
