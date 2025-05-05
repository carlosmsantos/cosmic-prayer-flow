
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, MoonStar, SunDim } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-cosmic-900/80 backdrop-blur-md border-b border-cosmic-100 dark:border-cosmic-800/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-semibold text-cosmic-700 dark:text-cosmic-400">
              Novena
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? (
                <SunDim className="h-5 w-5" />
              ) : (
                <MoonStar className="h-5 w-5" />
              )}
            </Button>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <NavLinks />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks: React.FC = () => {
  return (
    <>
      <Link to="/" className="font-medium text-cosmic-800 dark:text-cosmic-100 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors">
        Home
      </Link>
      <Link to="/daily" className="font-medium text-cosmic-800 dark:text-cosmic-100 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors">
        Daily Prayer
      </Link>
      <Link to="/meditate" className="font-medium text-cosmic-800 dark:text-cosmic-100 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors">
        Meditate
      </Link>
      <Link to="/about" className="font-medium text-cosmic-800 dark:text-cosmic-100 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors">
        About
      </Link>
    </>
  );
};
