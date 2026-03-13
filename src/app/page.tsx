'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Stethoscope, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Brain,
  FileText,
  Microscope,
  Shield,
  Globe
} from 'lucide-react';
import { useRef } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-[var(--color-earth-sand)] text-stone-900 selection:bg-[var(--color-brand-green)] selection:text-white">
      {/* Header - Glassmorphic, Minimal */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between premium-glass rounded-full px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">DocCircle</span>
          </div>
          <div className="flex items-center gap-6">
            <Link 
              href="/login"
              className="hidden md:block text-sm font-medium text-[#52525B] hover:text-black transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/register"
              className="px-5 py-2.5 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-[var(--color-brand-green)] transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Countryside Animated Background */}
      <section ref={heroRef} className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 px-4 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sky-blue)] via-[var(--color-earth-sand)] to-[var(--color-sun-gold)] opacity-30 animate-[breeze_15s_ease-in-out_infinite_alternate] z-0" style={{ backgroundSize: '200% 200%' }}></div>
        
        <motion.div 
          style={{ y, opacity }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="premium-pill mb-8 bg-white/60 border-[var(--color-brand-green)]/20 text-[var(--color-brand-green-hover)]">
              <Globe className="w-4 h-4" />
              <span>India Rural First Platform</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-stone-900">
              Expert consultations. <br className="hidden md:block" />
              <span className="text-stone-400">For every doctor.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-stone-600 mb-12 max-w-2xl font-medium tracking-tight leading-relaxed">
              Connect with specialist doctors, build your circle, and leverage AI tools. Empowering MBBS doctors with instant expert support safely and privately.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link href="/register" className="premium-button-primary">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/demo" className="premium-button-secondary">
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Grid Features - Bento Box / Editorial Layout */}
      <section className="px-4 py-24 bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-stone-900">Everything you need.</h2>
            <p className="text-xl text-stone-600 max-w-2xl font-medium">Built from first principles for doctors in tier 2/3 cities bridging the specialist gap.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 - Large */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="premium-card p-8 lg:p-10 lg:col-span-2 group border-[var(--color-sun-gold)]/20 hover:bg-[var(--color-sun-gold)]/5"
            >
              <div className="w-14 h-14 bg-[var(--color-earth-sand)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-sun-gold)] group-hover:text-stone-900 transition-all duration-300">
                <Users className="w-6 h-6 text-stone-600 group-hover:text-stone-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-stone-900">Doctor Circles</h3>
              <p className="text-stone-600 text-lg leading-relaxed max-w-lg">
                Build your own network of trusted specialists. Invite colleagues securely and consult within your private circle without friction.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="premium-card p-8 lg:p-10 group border-[var(--color-sky-blue)]/20 hover:bg-[var(--color-sky-blue)]/5"
            >
              <div className="w-14 h-14 bg-[var(--color-earth-sand)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-sky-blue)] group-hover:text-stone-900 transition-all duration-300">
                <Brain className="w-6 h-6 text-stone-600 group-hover:text-stone-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-stone-900">AI Powered</h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                Smart symptom analysis, precise report reading, and dynamic specialist matching.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="premium-card p-8 lg:p-10 group border-[var(--color-brand-green)]/20 hover:bg-[var(--color-brand-green)]/5"
            >
              <div className="w-14 h-14 bg-[var(--color-earth-sand)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-brand-green)] group-hover:text-white transition-all duration-300">
                <Microscope className="w-6 h-6 text-stone-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-stone-900">Expert Access</h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                Access top-tier pediatricians, cardiologists, and neurologists instantly.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="premium-card p-8 lg:p-10 group hover:bg-stone-50"
            >
              <div className="w-14 h-14 bg-[var(--color-earth-sand)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-stone-800 group-hover:text-white transition-all duration-300">
                <FileText className="w-6 h-6 text-stone-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-stone-900">Structured Cases</h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                Submit comprehensive patient cases with symptoms, history, and standardized reports.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="premium-card p-8 lg:p-10 group hover:bg-stone-50"
            >
              <div className="w-14 h-14 bg-[var(--color-earth-sand)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-stone-800 group-hover:text-white transition-all duration-300">
                <Shield className="w-6 h-6 text-stone-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-stone-900">Verified & Secure</h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                100% verified doctors. End-to-end encrypted, private, and fully compliant with regulations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clean Pricing Section */}
      <section className="px-4 py-24 bg-[var(--color-earth-sand)] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-stone-900">Transparent Pricing.</h2>
            <p className="text-xl text-stone-600 font-medium">Simple plans. No hidden fees.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="premium-card p-8"
            >
              <h3 className="text-xl font-semibold mb-2 text-stone-900">Starter</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold tracking-tighter text-[var(--color-brand-green)]">₹1,500</span>
                <span className="text-stone-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['20 cases per month', 'Basic AI tools', '3 circle members', 'Chat support'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-stone-300 shrink-0" /> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register?plan=starter" className="block w-full py-3 text-center rounded-xl bg-stone-100 text-stone-800 font-semibold hover:bg-stone-200 transition-colors">
                Get Started
              </Link>
            </motion.div>

            {/* Pro */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="premium-card p-8 border-[var(--color-brand-green)] shadow-[0_8px_30px_rgba(79,121,66,0.15)] relative transform md:-translate-y-4"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-brand-green)] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-900">Pro</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold tracking-tighter text-[var(--color-brand-green)]">₹3,500</span>
                <span className="text-stone-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['75 cases per month', 'Full AI suite', '10 circle members', 'Audio & Video calls'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-900 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-green)] shrink-0" /> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register?plan=pro" className="block w-full py-4 text-center rounded-xl bg-[var(--color-brand-green)] text-white font-semibold hover:bg-[var(--color-brand-green-hover)] transition-colors shadow-lg shadow-[var(--color-brand-green)]/20">
                Get Started
              </Link>
            </motion.div>

            {/* Enterprise */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="premium-card p-8"
            >
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold tracking-tighter text-[var(--color-brand-green)]">₹7,500</span>
                <span className="text-stone-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unlimited cases', 'Full AI + API access', 'Unlimited circle', '24/7 priority support'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-stone-300 shrink-0" /> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register?plan=enterprise" className="block w-full py-3 text-center rounded-xl bg-white border border-stone-200 text-stone-800 font-semibold hover:bg-stone-50 transition-colors">
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Warm Dark */}
      <section className="px-4 py-32 bg-stone-900 text-[var(--color-earth-sand)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-green)]/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight text-white">
              Ready to transform <br className="hidden md:block" /> your practice?
            </h2>
            <p className="text-xl md:text-2xl text-stone-400 mb-12 max-w-2xl mx-auto font-medium">
              Join hundreds of doctors in rural India providing better care.
            </p>
            <Link 
              href="/register"
              className="inline-flex items-center justify-center px-8 py-5 bg-[var(--color-sun-gold)] text-stone-900 font-bold rounded-2xl hover:bg-yellow-300 transition-all hover:scale-105 active:scale-95 text-lg shadow-lg shadow-[var(--color-sun-gold)]/20"
            >
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="px-4 py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[var(--color-brand-green)] rounded-full flex items-center justify-center">
              <Stethoscope className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold tracking-tight text-stone-900">DocCircle</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-stone-500">
            <Link href="/privacy" className="hover:text-stone-900 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-stone-900 transition-colors">Terms</Link>
          </div>
          <p className="text-sm font-medium text-stone-400">
            © 2026 DocCircle. Elegance in Care.
          </p>
        </div>
      </footer>
    </div>
  );
}
