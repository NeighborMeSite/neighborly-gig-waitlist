
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: LucideIcon;
  type?: string;
}

const InputField = ({ 
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
  icon: Icon, 
  type = 'text' 
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Icon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="pl-10 bg-white/50 border-neighborly-100 focus:border-neighborly-300 focus:ring-2 focus:ring-neighborly-200 transition-all"
        />
      </div>
    </div>
  );
};

export default InputField;
