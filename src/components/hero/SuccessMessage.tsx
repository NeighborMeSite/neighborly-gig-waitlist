
import { Button } from '@/components/ui/button';
import { CheckCircle, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SuccessMessage = () => {
  const { toast } = useToast();
  
  const handleShareClick = () => {
    // Copy the website URL to clipboard
    navigator.clipboard.writeText('https://neighborme.io');
    
    toast({
      title: "Share link copied!",
      description: "Share this link with friends to move up the waitlist.",
      variant: "default",
    });
  };
  
  return (
    <div className="text-center py-6">
      <div className="mx-auto w-14 h-14 bg-neighborly-100 rounded-full flex items-center justify-center mb-4">
        <CheckCircle className="h-7 w-7 text-neighborly-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">You're on the list!</h3>
      <p className="text-muted-foreground text-sm mb-4">
        We'll notify you when NeighborMe launches in your area.
      </p>
      <div className="p-4 rounded-lg bg-neighborly-50 border border-neighborly-100">
        <div className="flex items-start gap-3">
          <UserPlus className="h-5 w-5 text-neighborly-600 mt-0.5" />
          <div className="text-sm text-left">
            <p className="font-medium text-neighborly-900">Want priority access?</p>
            <p className="text-muted-foreground mt-1">
              Share NeighborMe with friends to move up the waitlist.
            </p>
            <div className="mt-3">
              <Button
                variant="outline"
                size="sm"
                className="border-neighborly-200 hover:bg-neighborly-100 transition-all w-full"
                onClick={handleShareClick}
              >
                Share your invite link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
