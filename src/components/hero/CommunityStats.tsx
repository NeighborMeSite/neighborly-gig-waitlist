
import { Users } from 'lucide-react';
import { AnimatedContainer } from '../AnimatedElements';

interface CommunityStatsProps {
  neighborCount: number;
}

const CommunityStats = ({ neighborCount }: CommunityStatsProps) => {
  return (
    <AnimatedContainer animation="slide-up" delay={900}>
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-neighborly-100 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="flex items-center justify-center text-neighborly-600 mb-1">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-neighborly-800">{neighborCount}+</h3>
            <p className="text-sm text-gray-600">Neighbors joined</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-neighborly-800">120+</h3>
            <p className="text-sm text-gray-600">Communities</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-neighborly-800">$35K+</h3>
            <p className="text-sm text-gray-600">Earned by neighbors</p>
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default CommunityStats;
