import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-(--bg) font-sans text-(--text) antialiased">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
