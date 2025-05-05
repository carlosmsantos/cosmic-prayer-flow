
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 dark:bg-cosmic-900/80 backdrop-blur-md border-t border-cosmic-100 dark:border-cosmic-800/30 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-sm text-cosmic-600 dark:text-cosmic-400 font-serif">
              Cosmic Prayer Flow
            </span>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-cosmic-600 dark:text-cosmic-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-cosmic-600 dark:fill-cosmic-400" />
            <span>for spiritual seekers</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-cosmic-600 dark:text-cosmic-400">
            © {new Date().getFullYear()} Novena
          </div>
        </div>
      </div>
    </footer>
  );
};
