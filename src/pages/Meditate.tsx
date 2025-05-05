
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { MeditationTimer } from '@/components/meditation/MeditationTimer';
import { Flame, Moon, Sun } from 'lucide-react';

const Meditate = () => {
  return (
    <AppLayout>
      <div className="cosmic-container py-12">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-cosmic-800 dark:text-cosmic-200 mb-4 font-serif">
            Sacred Meditation
          </h1>
          <p className="text-lg text-cosmic-600 dark:text-cosmic-400 max-w-2xl mx-auto">
            Take time to quiet your mind and connect with the divine presence through focused meditation.
          </p>
        </div>
        
        <div className="mb-12">
          <MeditationTimer defaultDuration={5} />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <MeditationTip
            icon={<Flame className="h-6 w-6 text-divine-400" />}
            title="Focus on Your Breath"
            description="Allow your breath to be your anchor. Notice each inhale and exhale without trying to control it."
          />
          <MeditationTip
            icon={<Moon className="h-6 w-6 text-cosmic-500" />}
            title="Release Thoughts Gently"
            description="When thoughts arise, acknowledge them and let them pass like clouds in the sky."
          />
          <MeditationTip
            icon={<Sun className="h-6 w-6 text-divine-300" />}
            title="Start Small"
            description="Even 5 minutes of daily meditation can bring significant benefits to your spiritual practice."
          />
        </div>
      </div>
    </AppLayout>
  );
};

interface MeditationTipProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MeditationTip: React.FC<MeditationTipProps> = ({ icon, title, description }) => {
  return (
    <div className="cosmic-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center mb-3">
        <div className="mr-3">{icon}</div>
        <h3 className="text-lg font-medium text-cosmic-700 dark:text-cosmic-300 font-serif">{title}</h3>
      </div>
      <p className="text-cosmic-600 dark:text-cosmic-400">{description}</p>
    </div>
  );
};

export default Meditate;
