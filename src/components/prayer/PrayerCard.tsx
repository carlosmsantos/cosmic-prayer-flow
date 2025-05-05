
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

interface PrayerCardProps {
  title: string;
  description: string;
  prayerText: string;
  onNext?: () => void;
  showNextButton?: boolean;
  day?: number;
  totalDays?: number;
}

export const PrayerCard: React.FC<PrayerCardProps> = ({
  title,
  description,
  prayerText,
  onNext,
  showNextButton = true,
  day,
  totalDays,
}) => {
  return (
    <Card className="cosmic-card animate-fade-in w-full max-w-xl mx-auto">
      <CardHeader>
        {day && totalDays && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-cosmic-500 dark:text-cosmic-400">
              Day {day} of {totalDays}
            </span>
            <div className="flex w-full max-w-[200px]">
              {Array.from({ length: totalDays }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 flex-1 mx-0.5 rounded-full ${
                    i < day ? 'bg-cosmic-500' : 'bg-cosmic-200 dark:bg-cosmic-800'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
        <CardTitle className="text-2xl text-cosmic-800 dark:text-cosmic-200">{title}</CardTitle>
        <CardDescription className="text-cosmic-600 dark:text-cosmic-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className="prayer-text text-cosmic-700 dark:text-cosmic-300 italic"
          style={{ textIndent: '1.5rem' }}
        >
          {prayerText}
        </div>
      </CardContent>
      {showNextButton && (
        <CardFooter className="flex justify-end">
          <Button 
            onClick={onNext} 
            className="btn-primary"
          >
            Continue
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
