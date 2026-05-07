import { Sprout, Timer, BarChart3, Code, Monitor, Play } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050a0a] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-900/10 blur-[120px] pointer-events-none" />

      <nav className="relative z-10 max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
            <Sprout className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-stone-100">Focus Garden</span>
        </div>
        <a href="https://github.com/Iccrtlity/Focus-Garden" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-emerald-400 transition-all">
          <Code className="w-6 h-6" />
        </a>
      </nav>

      <header className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              Grow your focus, <br />
              <span className="text-emerald-400">one plant at a time.</span>
            </h1>
            <p className="text-xl text-stone-400 mb-10 leading-relaxed max-w-xl">
              A minimalist Pomodoro timer for Chrome that turns your productivity into a thriving virtual garden. Dark mode by default, focus by nature.
            </p>
            <button className="flex items-center gap-3 bg-emerald-500 text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95">
              <Monitor className="w-5 h-5" />
              Add to Chrome
            </button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0a0f0f] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl">
              <div className="bg-[#020404] rounded-[1.8rem] overflow-hidden border border-white/5 flex flex-col items-center justify-center p-12 aspect-[4/5] gap-8">
                  <div className="relative flex items-center justify-center w-56 h-56 rounded-full border-[6px] border-emerald-500/20">
                    <div className="absolute inset-0 rounded-full border-[6px] border-emerald-500 border-t-transparent -rotate-45"></div>
                    <span className="text-6xl font-mono font-bold text-white tracking-tighter">25:00</span>
                  </div>
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <Play className="w-10 h-10 text-black fill-current ml-1" />
                  </div>
                  <div className="text-4xl mt-4">🏜️</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Timer />, title: "Smart Pomodoro", desc: "Built-in sessions with background persistence." },
            { icon: <Sprout />, title: "Visual Growth", desc: "Watch your desert transform into a lush garden." },
            { icon: <BarChart3 />, title: "Deep History", desc: "Detailed 7-day analytics for your focus sessions." }
          ].map((feature, i) => (
            <div key={i} className="group p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-100">{feature.title}</h3>
              <p className="text-stone-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 py-20 text-center border-t border-white/5 bg-[#030707]">
        <p className="text-stone-500 text-sm font-medium tracking-wide">
          Built by <span className="text-stone-300">Iccrtlity</span> • 🌿 Focus Garden 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
