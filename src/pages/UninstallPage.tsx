import { Sprout } from 'lucide-react';

const REINSTALL_URL = 'https://chromewebstore.google.com/detail/focus-garden';

export function UninstallPage() {
  return (
    <div className="min-h-screen bg-[#050a0a] text-white font-sans flex flex-col items-center justify-center px-6 py-24 selection:bg-emerald-500/30">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-900/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center gap-8">

        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex items-center justify-center">
          <Sprout className="w-10 h-10 text-emerald-400" />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-black tracking-tight">
            Sorry to see you go 🌵
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed">
            Focus Garden has been removed. Your garden will be waiting if you ever come back.
          </p>
        </div>

        <a
          href={REINSTALL_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 text-black px-7 py-3.5 rounded-2xl font-bold hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
        >
          <Sprout className="w-5 h-5" />
          Reinstall Focus Garden
        </a>

        <p className="text-stone-600 text-xs">
          Focus Garden is free and open source · Built by Iccrtlity
        </p>
      </div>
    </div>
  );
}
