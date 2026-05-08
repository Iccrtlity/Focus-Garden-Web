import { colors } from '../../lib/constants';

export function Footer() {
  return (
    <footer className={`relative z-10 py-20 text-center ${colors.borderDefault} border-t`} style={{ backgroundColor: colors.backgroundDark }}>
      <p className="text-stone-500 text-sm font-medium tracking-wide">
        Built by <span className="text-stone-300">Iccrtlity</span> · 🌿 Focus Garden 2026
      </p>
    </footer>
  );
}
