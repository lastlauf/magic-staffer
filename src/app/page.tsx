'use client';

import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';
import Nav from '@/components/nav';
import Hero from '@/components/hero';
import ProofBar from '@/components/proof-bar';
import Problem from '@/components/problem';
import PullQuote from '@/components/pull-quote';
import Verticals from '@/components/verticals';
import HowItWorks from '@/components/how-it-works';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import Pricing from '@/components/pricing';
import FAQ from '@/components/faq';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <Hero />
      <ProofBar />
      <Problem />
      <PullQuote />
      <Verticals />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
