
import React, { createContext, useContext } from 'react';

interface FormContextType {
  fullName: string;
  setFullName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  zipCode: string;
  setZipCode: (value: string) => void;
  selectedSkills: string[];
  setSelectedSkills: (skills: string[]) => void;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }
  return context;
};

export const FormContextProvider: React.FC<FormContextType & { children: React.ReactNode }> = ({
  children,
  ...formState
}) => {
  return (
    <FormContext.Provider value={formState}>
      {children}
    </FormContext.Provider>
  );
};
