
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/layout/AppLayout';
import { ChevronRight, Compass, Heart, Timer } from 'lucide-react';
import { PrayerCard } from '@/components/prayer/PrayerCard';

const Index = () => {
  return (
    <AppLayout>
      <div className="cosmic-container py-12">
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cosmic-800 dark:text-cosmic-200 mb-4 font-serif">
            Cosmic Prayer Flow
          </h1>
          <p className="text-xl text-cosmic-600 dark:text-cosmic-400 max-w-2xl mx-auto mb-8">
            Experience the tradition of Novena in a modern, flowing interface. Connect with your spirituality through daily prayers and meditations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary" size="lg">
              <Link to="/daily">
                Begin Daily Prayer
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/meditate">Meditate Now</Link>
            </Button>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Heart className="h-8 w-8 text-cosmic-500" />}
              title="Daily Prayers"
              description="Follow a structured nine-day prayer journey with beautiful, meaningful prayers."
            />
            <FeatureCard 
              icon={<Timer className="h-8 w-8 text-cosmic-500" />}
              title="Meditation Timer"
              description="Focus your spiritual practice with a peaceful meditation timer."
            />
            <FeatureCard 
              icon={<Compass className="h-8 w-8 text-cosmic-500" />}
              title="Spiritual Guidance"
              description="Find your way through life's journey with timeless spiritual wisdom."
            />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-cosmic-800 dark:text-cosmic-200 mb-6 text-center font-serif">
            Today's Featured Prayer
          </h2>
          <PrayerCard
            title="Prayer for Inner Peace"
            description="A beautiful prayer to center your spirit and find tranquility"
            prayerText="Divine Spirit, in the silence of this moment, I turn to You. Help me to quiet the noise within and around me. May Your peace, which surpasses all understanding, guard my heart and mind. Guide me to that still place where I can hear Your gentle whisper. In the vastness of cosmic wonders, remind me that You hold all things together in perfect harmony. As I breathe in Your presence, let Your peace flow through me like a river, washing away all anxiety and fear. I surrender my restless thoughts and embrace the tranquility that only You can give. Amen."
            showNextButton={false}
          />
        </section>
        
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cosmic-800 dark:text-cosmic-200 mb-6 font-serif">
            Begin Your Spiritual Journey
          </h2>
          <p className="text-lg text-cosmic-600 dark:text-cosmic-400 max-w-2xl mx-auto mb-8">
            The Novena tradition invites us to nine days of focused prayer. Start your cosmic prayer flow today.
          </p>
          <Button asChild className="btn-primary" size="lg">
            <Link to="/daily">
              Start Novena
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </AppLayout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="cosmic-card p-6 hover:translate-y-[-5px] transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-cosmic-700 dark:text-cosmic-300 mb-2 font-serif">{title}</h3>
      <p className="text-cosmic-600 dark:text-cosmic-400">{description}</p>
    </div>
  );
};

export default Index;
