
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Clock, PrayingHands, Quote } from 'lucide-react';

const About = () => {
  return (
    <AppLayout>
      <div className="cosmic-container py-12">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-cosmic-800 dark:text-cosmic-200 mb-4 font-serif">
            About Novena
          </h1>
          <p className="text-lg text-cosmic-600 dark:text-cosmic-400 max-w-2xl mx-auto">
            Understanding the spiritual tradition behind our cosmic prayer flow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-cosmic-700 dark:text-cosmic-300 font-serif">
              The Novena Tradition
            </h2>
            <p className="text-cosmic-600 dark:text-cosmic-400 leading-relaxed">
              A novena is a traditional Catholic practice of devotional prayer that spans nine consecutive days. The word "novena" comes from the Latin word "novem," meaning nine.
            </p>
            <p className="text-cosmic-600 dark:text-cosmic-400 leading-relaxed">
              The nine-day structure reflects several significant periods in scripture: the nine days the apostles and Mary spent in prayer between the Ascension and Pentecost, and the traditional nine days of mourning in ancient cultures.
            </p>
            <p className="text-cosmic-600 dark:text-cosmic-400 leading-relaxed">
              While rooted in Catholic tradition, the practice of focused prayer over a set period has been embraced by many spiritual seekers across different faith backgrounds.
            </p>
          </div>
          
          <Card className="cosmic-card overflow-hidden h-full flex flex-col justify-center">
            <CardContent className="p-0">
              <div className="p-8 bg-cosmic-50 dark:bg-cosmic-900/20 flex flex-col justify-center h-full">
                <Quote className="h-10 w-10 text-cosmic-400 mb-4" />
                <blockquote className="text-xl text-cosmic-700 dark:text-cosmic-300 font-serif italic">
                  "Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart."
                </blockquote>
                <cite className="mt-4 block text-right text-cosmic-600 dark:text-cosmic-400">
                  — Mahatma Gandhi
                </cite>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-cosmic-700 dark:text-cosmic-300 mb-6 text-center font-serif">
            Benefits of Structured Prayer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Clock className="h-8 w-8 text-cosmic-500" />}
              title="Consistency & Discipline"
              description="A nine-day commitment helps establish a regular prayer habit, creating spiritual discipline."
            />
            <BenefitCard
              icon={<PrayingHands className="h-8 w-8 text-cosmic-500" />}
              title="Spiritual Depth"
              description="Sustained focus on specific intentions allows for deeper spiritual connection and contemplation."
            />
            <BenefitCard
              icon={<BookOpen className="h-8 w-8 text-cosmic-500" />}
              title="Scriptural Reflection"
              description="Many novenas incorporate scripture, enriching one's understanding of sacred texts."
            />
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cosmic-700 dark:text-cosmic-300 mb-4 font-serif">
            Our Mission
          </h2>
          <p className="text-cosmic-600 dark:text-cosmic-400 max-w-2xl mx-auto">
            Cosmic Prayer Flow aims to honor the rich tradition of novena prayers while making this spiritual practice accessible to modern seekers. We believe in creating technology that enhances rather than distracts from genuine spiritual connection.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="cosmic-card p-6 animate-fade-in">
      <div className="flex items-center mb-3">
        <div className="mr-3">{icon}</div>
        <h3 className="text-lg font-medium text-cosmic-700 dark:text-cosmic-300 font-serif">{title}</h3>
      </div>
      <p className="text-cosmic-600 dark:text-cosmic-400">{description}</p>
    </div>
  );
};

export default About;
