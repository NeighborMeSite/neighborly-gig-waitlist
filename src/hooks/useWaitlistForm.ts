
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface UseWaitlistFormProps {
  setNeighborCount: (count: number) => void;
}

export const useWaitlistForm = ({ setNeighborCount }: UseWaitlistFormProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Insert the user data into the waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert({
          name: fullName,
          email: email,
          zip_code: zipCode,
          skills: selectedSkills.length > 0 ? selectedSkills : null
        });

      if (error) {
        console.error('Error submitting to waitlist:', error);
        toast({
          title: "Submission failed",
          description: "There was an error adding you to the waitlist. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // After successful submission, get the updated count
      const { count, error: countError } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });
        
      if (!countError && count !== null) {
        setNeighborCount(count);
      } else {
        // Fallback if we can't get the count: increment by 1
        const { data: currentData } = await supabase
          .from('waitlist')
          .select('id');
        
        if (currentData) {
          setNeighborCount(currentData.length);
        }
      }

      // Successfully submitted
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "We'll notify you when NeighborMe launches in your area.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      toast({
        title: "Submission failed",
        description: "There was an error adding you to the waitlist. Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    zipCode,
    setZipCode,
    selectedSkills,
    setSelectedSkills,
    loading,
    submitted,
    handleSubmit
  };
};
