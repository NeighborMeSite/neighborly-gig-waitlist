
import SuccessMessage from './SuccessMessage';
import WaitlistFormContent from './WaitlistFormContent';
import { useWaitlistForm } from '@/hooks/useWaitlistForm';

interface WaitlistFormProps {
  setNeighborCount: (count: number) => void;
}

const WaitlistForm = ({ setNeighborCount }: WaitlistFormProps) => {
  const {
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
  } = useWaitlistForm({ setNeighborCount });

  if (submitted) {
    return <SuccessMessage />;
  }

  return (
    <WaitlistFormContent
      fullName={fullName}
      setFullName={setFullName}
      email={email}
      setEmail={setEmail}
      zipCode={zipCode}
      setZipCode={setZipCode}
      selectedSkills={selectedSkills}
      setSelectedSkills={setSelectedSkills}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default WaitlistForm;
