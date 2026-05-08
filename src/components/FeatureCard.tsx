import type { ReactNode } from 'react';
import { colors } from '../lib/constants';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * Feature showcase card displayed in the features grid
 */
export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className={`group p-10 rounded-[2rem] bg-white/[0.02] ${colors.borderDefault} hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all`}>
      <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-stone-100">{title}</h3>
      <p className={`leading-relaxed ${colors.textSecondary}`}>{description}</p>
    </div>
  );
}
