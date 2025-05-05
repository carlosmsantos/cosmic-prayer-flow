
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <AppLayout>
      <div className="cosmic-container py-16 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-cosmic-700 dark:text-cosmic-300 mb-6 font-serif">
          404
        </h1>
        <p className="text-xl md:text-2xl text-cosmic-600 dark:text-cosmic-400 mb-8">
          The page you're looking for seems to have vanished into the cosmos.
        </p>
        <Button asChild className="btn-primary" size="lg">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </AppLayout>
  );
};

export default NotFound;
