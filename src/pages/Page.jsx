import { About, Contact, Hero, Portfolio, Section, Testimonial } from '@/components';



const Page = () => {
  return (
    <div>
      <Section id="hero"><Hero/></Section>
      <Section id="about"><About/></Section>
      <Section id="portfolio"><Portfolio/></Section>
      <Section id="testimonials"><Testimonial/></Section>
      <Section id="contact"><Contact/></Section>
    </div>
  );
};


export default Page