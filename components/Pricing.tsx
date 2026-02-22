'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for exploring the capabilities of NexBot.",
    features: ["5,000 tokens per month", "Basic context window", "Community support", "Standard response time"],
    highlight: false
  },
  {
    name: "Professional",
    price: "$49",
    description: "For power users who need consistent performance.",
    features: ["Unlimited tokens", "Extended context window", "Priority support", "Fastest response time", "API access"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale deployment.",
    features: ["Dedicated infrastructure", "Custom model fine-tuning", "SLA guarantees", "24/7 dedicated support", "On-premise options"],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-32 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, transparent <span className="text-orange-500">pricing.</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 md:p-8 rounded-2xl border backdrop-blur-sm flex flex-col ${
                plan.highlight 
                  ? 'bg-white/5 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.15)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-6 md:mb-8">
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3 md:mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-white/40 text-sm md:text-base">/month</span>}
                </div>
                <p className="text-white/60 text-xs md:text-sm">{plan.description}</p>
              </div>

              <div className="flex-grow mb-6 md:mb-8">
                <ul className="space-y-3 md:space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-white/80">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-orange-500' : 'text-white/40'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-orange-500 text-black hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}