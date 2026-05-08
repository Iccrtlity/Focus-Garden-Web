import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { Footer } from './components/sections/Footer';
import { colors } from './lib/constants';

function App() {
  return (
    <div className={`min-h-screen ${colors.textPrimary} font-sans selection:bg-emerald-500/30 overflow-x-hidden`} style={{ backgroundColor: colors.background }}>
      {/* Background gradient glow — reduced blur on mobile for performance */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-900/10 blur-[60px] md:blur-[120px] pointer-events-none will-change-transform" />

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
