
import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="starry-background absolute inset-0 -z-10"></div>
      <NavBar />
      <main className="flex-grow pt-16 pb-20">{children}</main>
      <Footer />
    </div>
  );
};
