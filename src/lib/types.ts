import type { ReactNode } from 'react';

/**
 * Represents a feature shown in the features grid
 */
export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * Configuration for the timer ring visualization
 */
export interface TimerRingProps {
  time: string;
  /** Progress fraction from 0 to 1 */
  progress: number;
}

/**
 * Configuration for the garden status card
 */
export interface GardenCardProps {
  emoji: string;
  sessionCount: number;
}
