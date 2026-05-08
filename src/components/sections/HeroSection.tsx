import { Monitor } from 'lucide-react';
import { ExtensionPreview } from '../ExtensionPreview';
import { CHROME_STORE_URL, layout } from '../../lib/constants';

export function HeroSection() {
  return (
    <header className={`relative z-10 ${layout.maxWidth} mx-auto px-6 pt-10 pb-20 md:pt-16 md:pb-32`}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tight leading-[1.1]">
            Grow your focus, <br />
            <span className="text-emerald-400">one plant at a time.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-400 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            A minimalist Pomodoro timer for Chrome that turns your productivity into a
            thriving virtual garden. Dark mode by default, focus by nature.
          </p>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 px-7 py-3.5 md:px-8 md:py-4 rounded-2xl font-bold text-base md:text-lg text-black shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95"
          >
            <Monitor className="w-5 h-5" />
            Add to Chrome
          </a>
        </div>

        <div className="flex justify-center">
          <ExtensionPreview />
        </div>
      </div>
    </header>
  );
}
