
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
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-lg p-2 sm:p-3 border border-gray-100 w-full">
        <WaitlistForm setNeighborCount={setNeighborCount} />
      </div>
    </div>
  );
};

export default FormSection;
