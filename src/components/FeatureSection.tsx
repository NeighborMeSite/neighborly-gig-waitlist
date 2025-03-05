
import { RevealOnScroll } from './AnimatedElements';
import { 
  Users, 
  Star, 
  Shield, 
  MessageSquare, 
  Clock, 
  CreditCard 
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Local Talent Network',
    description: 'Discover trusted neighbors ready to help with everyday tasks and services.'
  },
  {
    icon: Star,
    title: 'Verified Reviews',
    description: 'See genuine ratings and feedback from your actual neighbors.'
  },
  {
    icon: Shield,
    title: 'Neighbor Verification',
    description: 'Rest easy with our multi-step verification system for all providers.'
  },
  {
    icon: MessageSquare,
    title: 'Community Communication',
    description: 'Direct in-app messaging makes planning and scheduling simple.'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Get help fast with our network of available local providers.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Pay securely through the app with no cash or check hassles.'
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <RevealOnScroll animation="slide-up">
          <div className="text-center mb-16">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-neighborly-100 text-neighborly-800">
              Why NeighborMe?
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Neighbors helping neighbors
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              NeighborMe combines the best of local service apps with the trust and community of neighborhood networks.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <RevealOnScroll
              key={index}
              animation="slide-up"
              className="p-6 rounded-2xl border border-neighborly-100 bg-white hover:shadow-md transition-all duration-300"
              threshold={0.2}
            >
              <div className="w-12 h-12 rounded-xl bg-neighborly-100 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-neighborly-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
