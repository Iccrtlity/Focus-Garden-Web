import { Sprout, Timer, BarChart3 } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';
import { layout, colors } from '../../lib/constants';
import type { Feature } from '../../lib/types';

const FEATURES: Feature[] = [
  {
    icon: <Timer />,
    title: 'Smart Pomodoro',
    description: 'Built-in sessions with background persistence.',
  },
  {
    icon: <Sprout />,
    title: 'Visual Growth',
    description: 'Watch your desert transform into a lush garden.',
  },
  {
    icon: <BarChart3 />,
    title: 'Deep History',
    description: 'Detailed 7-day analytics for your focus sessions.',
  },
] as const;

export function FeaturesSection() {
  return (
    <section className={`relative z-10 ${layout.maxWidth} mx-auto px-6 py-16 md:py-32 ${colors.borderDefault} border-t`}>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
