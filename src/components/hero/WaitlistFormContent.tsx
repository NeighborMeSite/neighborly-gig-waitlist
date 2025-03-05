
import { Button } from '@/components/ui/button';
import { Mail, MapPin, User } from 'lucide-react';
import InputField from './InputField';
import SkillsSelection from '../SkillsSelection';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';
import { useFormContext } from '@/contexts/FormContext';

const WaitlistFormContent = () => {
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
    handleSubmit
  } = useFormContext();

  return (
    <>
      <FormHeader />
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          id="fullName"
          label="Full Name"
          placeholder="Your name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          icon={User}
        />
        
        <InputField
          id="email"
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={Mail}
          type="email"
        />
        
        <InputField
          id="zipCode"
          label="Zip Code"
          placeholder="Enter your zip code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          icon={MapPin}
        />
        
        {/* Skills Selection */}
        <div className="space-y-2">
          <SkillsSelection
            selectedSkills={selectedSkills}
            onChange={setSelectedSkills}
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-neighborly-600 hover:bg-neighborly-700 text-white transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
      
      <FormFooter />
    </>
  );
};

export default WaitlistFormContent;
