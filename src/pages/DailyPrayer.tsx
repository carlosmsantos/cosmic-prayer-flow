
import React, { useState, useEffect } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { PrayerCard } from '@/components/prayer/PrayerCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const prayers = [
  {
    title: "Day 1: Prayer for Hope",
    description: "Beginning our novena with a prayer for hope and renewed faith",
    prayerText: "Divine Light, as I begin this novena journey, I come seeking hope. In a world that sometimes feels shrouded in darkness, be my guiding star. Illuminate the path before me, even when I cannot see the full journey ahead. Renew my faith in Your greater purpose, and in the power of prayer to transform hearts and circumstances. May this first day of prayer plant seeds of expectation in my soul, knowing that You hear every word uttered in faith. I open my heart to receive the gift of hope, that I might share it with others who walk in shadowed valleys. Amen."
  },
  {
    title: "Day 2: Prayer for Wisdom",
    description: "Seeking divine wisdom to guide our decisions and understanding",
    prayerText: "Source of All Wisdom, on this second day of prayer, I seek Your guidance. In a world of countless voices and competing truths, I need Your clarity. Grant me discernment to recognize Your voice above all others. May I not merely accumulate knowledge, but grow in wisdom—the kind that harmonizes mind and heart. Help me see situations as You see them, with compassion and eternal perspective. Where I have been foolish or shortsighted, correct my vision. Where I must make decisions, guide my thoughts. Thank You for the gift of Your wisdom, freely given to all who ask in faith. Amen."
  },
  {
    title: "Day 3: Prayer for Healing",
    description: "A prayer for physical, emotional, and spiritual restoration",
    prayerText: "Great Physician, on this third day of my novena, I bring before You the broken places in need of Your healing touch. You know every cell of my body, every thought in my mind, every wound in my spirit. Where there is physical pain or illness, I ask for Your restoring power. Where emotional trauma has left scars, I invite Your gentle presence. Where my spirit has been damaged by disappointment or sin, renew me from within. I trust in Your compassion and in Your power to make all things new. May I emerge from this prayer journey more whole than when I began, a living testimony to Your healing grace. Amen."
  },
  {
    title: "Day 4: Prayer for Strength",
    description: "Finding courage and endurance in times of challenge",
    prayerText: "Mighty Fortress, as I reach the fourth day of this novena, I acknowledge my need for Your strength. The burdens I carry have revealed my limitations. In my weakness, be my power. In my fatigue, be my endurance. In my fear, be my courage. I do not ask that You remove all challenges, but that You equip me to face them with a spirit of faith and determination. Remind me that I never walk alone through difficult seasons. Thank You for the promise that those who hope in You will renew their strength and soar on wings like eagles. In that confidence I pray. Amen."
  },
  {
    title: "Day 5: Prayer for Peace",
    description: "Seeking inner tranquility and harmony with others",
    prayerText: "Prince of Peace, halfway through this novena journey, I pause to seek the gift of Your perfect peace. In the midst of life's storms and uncertainties, be my calm center. Where anxiety has gripped my mind, release it with Your reassuring presence. Where relationships are strained by conflict, help me become an instrument of reconciliation. I surrender the illusion that I can control all circumstances, and rest in the knowledge that You hold all things in Your hands. May Your peace, which surpasses understanding, guard my heart and mind today and always. In gratitude, I receive this gift that the world cannot give. Amen."
  },
  {
    title: "Day 6: Prayer for Love",
    description: "Opening our hearts to divine and human connections",
    prayerText: "Infinite Love, on this sixth day of prayer, I turn my thoughts to the greatest of all spiritual gifts. Pour into my heart a measure of Your perfect love—patient, kind, and enduring. Where bitterness or resentment have taken root, help me cultivate forgiveness. Where I have been self-centered, teach me genuine compassion for others. Deepen my appreciation for the love I have received throughout my life, both from You and through the people You have placed in my path. Make me increasingly aware of opportunities to extend love to those around me, especially to those difficult to love. May my life be a channel of Your love flowing into a world in desperate need. Amen."
  },
  {
    title: "Day 7: Prayer for Guidance",
    description: "Seeking direction for important decisions and life's path",
    prayerText: "Faithful Guide, as I continue this novena on the seventh day, I seek Your direction for my journey. There are crossroads before me and choices to be made. Illuminate the path You would have me follow. Through Your word, through wise counsel, through the gentle nudging of Your Spirit, make Your will clear to me. Close doors that would lead me away from Your purpose, and open those that align with Your plan for my life. Give me courage to step out in faith when the way forward requires risk. I trust that Your guidance is perfect, even when the destination is not yet visible. Lead me, and I will follow. Amen."
  },
  {
    title: "Day 8: Prayer for Gratitude",
    description: "Cultivating thankfulness for blessings received",
    prayerText: "Generous Giver, as I approach the completion of this novena, I pause to count my blessings. Open my eyes to recognize the countless gifts You have bestowed—those I've noticed and those I've overlooked. For the necessities of life, I thank You. For relationships that sustain me, I am grateful. For beauty that refreshes my spirit, I offer praise. Even for challenges that have strengthened me, I express gratitude. Forgive me for the times I've taken Your goodness for granted. Cultivate in me a heart that naturally inclines toward thanksgiving, knowing that gratitude itself is a pathway to joy. May my life become an expression of appreciation for all You are and all You give. Amen."
  },
  {
    title: "Day 9: Prayer for Purpose",
    description: "Concluding our novena with a prayer for clarity of mission",
    prayerText: "Divine Creator, as I complete this nine-day journey of prayer, I seek clarity about my purpose in Your greater design. You have formed me with unique gifts, experiences, and passions. Show me how to use them in service to Your kingdom and to a world in need. Where I have drifted into meaningless pursuits, redirect my energy toward what truly matters. Help me to find fulfillment not in worldly success, but in faithfulness to Your calling. As this novena concludes, may it be not an ending but a beginning—the start of a more purposeful chapter in my ongoing spiritual journey. I commit my way to You, trusting that as I seek first Your kingdom, all other things will find their proper place. Amen."
  }
];

const DailyPrayer = () => {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [savedProgress, setSavedProgress] = useState<number>(1);
  const { toast } = useToast();
  
  // Load saved progress from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('prayerProgress');
    if (saved) {
      const day = parseInt(saved);
      setCurrentDay(day);
      setSavedProgress(day);
    }
  }, []);
  
  const handleNext = () => {
    if (currentDay < 9) {
      setCurrentDay(prev => prev + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentDay > 1) {
      setCurrentDay(prev => prev - 1);
    }
  };
  
  const saveProgress = () => {
    localStorage.setItem('prayerProgress', currentDay.toString());
    setSavedProgress(currentDay);
    toast({
      title: "Progress Saved",
      description: `Your prayer journey is now saved at Day ${currentDay}`,
    });
  };
  
  const currentPrayer = prayers[currentDay - 1];
  
  return (
    <AppLayout>
      <div className="cosmic-container py-12">
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-cosmic-800 dark:text-cosmic-200 mb-4 font-serif">
            Olá, Bom dia!
          </h1>
          <p className="text-lg text-cosmic-600 dark:text-cosmic-400 max-w-2xl mx-auto">
            Follow this nine-day journey of prayer, reflection, and spiritual growth.
          </p>
        </div>
        
        <div className="flex justify-between items-center max-w-xl mx-auto mb-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentDay === 1}
            className="flex items-center"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Button>
          
          <Button
            variant="outline"
            onClick={saveProgress}
            className="flex items-center"
          >
            <Save className="mr-1 h-4 w-4" />
            Save Progress
          </Button>
        </div>
        
        <PrayerCard
          title={currentPrayer.title}
          description={currentPrayer.description}
          prayerText={currentPrayer.prayerText}
          onNext={handleNext}
          showNextButton={currentDay < 9}
          day={currentDay}
          totalDays={9}
        />
        
        {savedProgress > 1 && (
          <div className="mt-4 text-center text-sm text-cosmic-500 dark:text-cosmic-400">
            Your saved progress: Day {savedProgress} of 9
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default DailyPrayer;
