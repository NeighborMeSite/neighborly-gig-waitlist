
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { RevealOnScroll } from './AnimatedElements';

const faqs = [
  {
    question: 'What is NeighborMe?',
    answer: 'NeighborMe is a local service platform that connects you with trusted neighbors who can help with everyday tasks and services, from lawn care to handyman work, pet sitting to tech support.'
  },
  {
    question: 'How does NeighborMe verify service providers?',
    answer: 'All service providers undergo a verification process that includes ID verification, background checks, and community validation through reviews and ratings from neighbors in your area.'
  },
  {
    question: 'When will NeighborMe be available in my area?',
    answer: 'We\'re rolling out neighborhood by neighborhood to ensure the best experience. Join our waitlist with your zip code, and we\'ll notify you when we launch in your area. The more neighbors join, the faster we\'ll come to your community!'
  },
  {
    question: 'How much does it cost to use NeighborMe?',
    answer: 'NeighborMe is free to join and browse. When you book a service, there\'s a small platform fee added to the service provider\'s rate to maintain our secure, quality platform.'
  },
  {
    question: 'Can I offer my services on NeighborMe?',
    answer: 'Absolutely! When we launch in your area, you can sign up as a service provider, set your own rates, and choose which services you want to offer to your neighbors.'
  },
  {
    question: 'How is payment handled?',
    answer: 'All payments are handled securely through the NeighborMe app. You can pay with credit card, and funds are only released to the provider once you\'ve confirmed the service is complete and satisfactory.'
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-neighborly-50">
      <div className="container mx-auto max-w-3xl">
        <RevealOnScroll animation="slide-up">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-neighborly-100 text-neighborly-800">
              Got Questions?
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about NeighborMe
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-in">
          <Accordion type="single" collapsible className="bg-white p-6 rounded-2xl shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnScroll>

        <RevealOnScroll animation="slide-up" className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:hello@neighborme.com" 
            className="inline-flex items-center text-neighborly-600 hover:text-neighborly-700 font-medium"
          >
            Contact Us
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default FaqSection;
