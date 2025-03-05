
import SuccessMessage from './SuccessMessage';
import WaitlistFormContent from './WaitlistFormContent';
import { useWaitlistForm } from '@/hooks/useWaitlistForm';
import { FormContextProvider } from '@/contexts/FormContext';

interface WaitlistFormProps {
  setNeighborCount: (count: number) => void;
}

const WaitlistForm = ({ setNeighborCount }: WaitlistFormProps) => {
  const formState = useWaitlistForm({ setNeighborCount });
  
  if (formState.submitted) {
    return <SuccessMessage />;
  }

  return (
    <FormContextProvider {...formState}>
      <WaitlistFormContent />
    </FormContextProvider>
  );
};

export default WaitlistForm;
