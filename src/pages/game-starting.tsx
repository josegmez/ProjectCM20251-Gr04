import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/buttons";
import { motion, AnimatePresence } from "framer-motion";

export const GameStartingPage = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [showWheel, setShowWheel] = useState(true);
  const navigate = useNavigate();

  const categories = [
    "Animales",
    "Comidas",
    "Países",
    "Deportes",
    "Películas",
    "Colores",
    "Profesiones",
    "Música",
  ];

  // Animation wheel effect
  useEffect(() => {
    let currentIndex = 0;
    const wheelInterval = setInterval(() => {
      setCategory(categories[currentIndex % categories.length]);
      currentIndex++;
    }, 150);

    // Stop the wheel animation after 2 seconds
    setTimeout(() => {
      clearInterval(wheelInterval);
      const finalCategory = "Animales";
      setCategory(finalCategory); // Final category
      setShowWheel(false);
      localStorage.setItem("selectedCategory", finalCategory);
    }, 2000);

    // Navigate after 5 seconds
    setTimeout(() => {
      navigate("/game");
    }, 5000);

    return () => clearInterval(wheelInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-24">
      <h1 className="text-5xl font-secondary">El juego está por comenzar...</h1>

      <span className="text-xl">El barco de La Havana viene cargdo de...</span>

      <div className="h-16 overflow-hidden">
        <AnimatePresence mode="wait">
          {(category || showWheel) && (
            <Button
              className="rounded-full min-w-48"
              color="accent"
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >
              <div className="overflow-hidden h-8">
                <motion.div
                  key={showWheel ? "wheel" : "final"}
                  initial={{ y: showWheel ? -40 : 0 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: showWheel ? "spring" : "tween",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="flex items-center justify-center h-8"
                >
                  {category}
                </motion.div>
              </div>
            </Button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
