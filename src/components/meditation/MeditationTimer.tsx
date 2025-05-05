
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Pause, 
  Play, 
  RotateCcw, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

interface MeditationTimerProps {
  defaultDuration?: number; // in minutes
}

export const MeditationTimer: React.FC<MeditationTimerProps> = ({ 
  defaultDuration = 5 
}) => {
  const [duration, setDuration] = useState(defaultDuration * 60); // convert to seconds
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const toggleTimer = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);
  
  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(duration);
  }, [duration]);
  
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);
  
  const handleDurationChange = useCallback((value: number[]) => {
    const newDuration = value[0] * 60; // convert minutes to seconds
    setDuration(newDuration);
    setTimeLeft(newDuration);
    setIsRunning(false);
  }, []);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Play sound when timer ends
      if (!isMuted) {
        // We would normally play a sound here
        console.log("Timer ended - would play sound");
      }
    }
    
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isMuted]);
  
  const progress = ((duration - timeLeft) / duration) * 100;
  
  return (
    <Card className="cosmic-card animate-fade-in w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-cosmic-800 dark:text-cosmic-200">
          Meditation Timer
        </CardTitle>
        <CardDescription className="text-cosmic-600 dark:text-cosmic-400">
          Set your meditation duration and focus on your breath
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-cosmic-200 dark:text-cosmic-800 stroke-current"
                strokeWidth="4"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
              <circle
                className="text-cosmic-500 stroke-current"
                strokeWidth="4"
                strokeLinecap="round"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
                style={{
                  strokeDasharray: 264,
                  strokeDashoffset: 264 - (progress / 100) * 264,
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                }}
              />
            </svg>
            <div className="absolute font-serif text-4xl text-cosmic-700 dark:text-cosmic-300">
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <span className="text-sm text-cosmic-600 dark:text-cosmic-400">
            Meditation duration: {Math.floor(duration / 60)} minutes
          </span>
          <Slider
            value={[duration / 60]}
            min={1}
            max={30}
            step={1}
            onValueChange={handleDurationChange}
            disabled={isRunning}
            className="w-full"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMute}
          className="rounded-full"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </Button>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={resetTimer}
            disabled={timeLeft === duration && !isRunning}
            className="rounded-full"
          >
            <RotateCcw className="h-5 w-5" />
          </Button>
          
          <Button
            onClick={toggleTimer}
            size="lg"
            className="btn-primary rounded-full w-12 h-12 flex items-center justify-center"
          >
            {isRunning ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
