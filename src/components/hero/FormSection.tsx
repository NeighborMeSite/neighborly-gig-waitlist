
import { useEffect } from 'react';
import WaitlistForm from './WaitlistForm';
import { supabase } from '@/integrations/supabase/client';

interface FormSectionProps {
  neighborCount: number;
  setNeighborCount: (count: number) => void;
}

const FormSection = ({ neighborCount, setNeighborCount }: FormSectionProps) => {
  // Fetch the total waitlist count from Supabase on component mount
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const { count, error } = await supabase
          .from('waitlist')
          .select('*', { count: 'exact', head: true });
        
        if (error) {
          console.error('Error fetching waitlist count:', error);
          return;
        }
        
        // If count is available, update the neighbor count
        if (count !== null) {
          setNeighborCount(count);
        }
      } catch (error) {
        console.error('Error fetching waitlist count:', error);
      }
    };

    fetchWaitlistCount();
  }, [setNeighborCount]);

  return (
    <div className="w-full h-full">
      <div className="card-white p-6 sm:p-8 w-full shadow-lg">
        <WaitlistForm setNeighborCount={setNeighborCount} />
      </div>
    </div>
  );
};

export default FormSection;
