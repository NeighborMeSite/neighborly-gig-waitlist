
import { AnimatedContainer } from '../AnimatedElements';

const TestimonialQuote = () => {
  return (
    <AnimatedContainer animation="slide-up" delay={850}>
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-neighborly-100 shadow-sm mt-4">
        <blockquote className="italic text-gray-700 border-l-4 border-neighborly-300 pl-4">
          "NeighborMe transformed how I connect with my community. I found a neighbor who helps with my lawn while earning extra income doing what I love - teaching piano to kids in the area."
        </blockquote>
        <p className="text-right mt-2 text-sm font-medium text-neighborly-700">— Sarah T., Chicago</p>
      </div>
    </AnimatedContainer>
  );
};

export default TestimonialQuote;
