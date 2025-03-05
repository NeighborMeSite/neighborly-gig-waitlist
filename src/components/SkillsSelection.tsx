
import React from 'react';
import { Check, Code, Brush, Users, TrendingUp, MessageCircle, Lightbulb, Rocket, Heart } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface SkillsSelectionProps {
  selectedSkills: string[];
  onChange: (skills: string[]) => void;
}

const SkillsSelection: React.FC<SkillsSelectionProps> = ({ selectedSkills, onChange }) => {
  const skills: Skill[] = [
    { id: 'coding', name: 'Coding', icon: <Code className="h-4 w-4" /> },
    { id: 'design', name: 'Design', icon: <Brush className="h-4 w-4" /> },
    { id: 'community', name: 'Community Building', icon: <Users className="h-4 w-4" /> },
    { id: 'business', name: 'Business', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'communication', name: 'Communication', icon: <MessageCircle className="h-4 w-4" /> },
    { id: 'creativity', name: 'Creativity', icon: <Lightbulb className="h-4 w-4" /> },
    { id: 'leadership', name: 'Leadership', icon: <Rocket className="h-4 w-4" /> },
    { id: 'caregiving', name: 'Caregiving', icon: <Heart className="h-4 w-4" /> },
  ];

  const toggleSkill = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      onChange(selectedSkills.filter(id => id !== skillId));
    } else {
      onChange([...selectedSkills, skillId]);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Skills you can share (optional)</span>
        <span className="text-xs text-muted-foreground">{selectedSkills.length} selected</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const isSelected = selectedSkills.includes(skill.id);
          return (
            <button
              key={skill.id}
              type="button"
              onClick={() => toggleSkill(skill.id)}
              className={`
                group flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-all
                ${isSelected 
                  ? 'border-neighborly-600 bg-neighborly-50 text-neighborly-700' 
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}
              `}
            >
              <span className="flex h-5 w-5 items-center justify-center">
                {isSelected ? (
                  <Check className="h-3.5 w-3.5 text-neighborly-600" />
                ) : (
                  skill.icon
                )}
              </span>
              {skill.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSelection;
