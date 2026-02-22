'use client';

import { motion } from 'motion/react';
import { Brain, Zap, Shield, Globe, Cpu, Code } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Neural Processing",
    description: "Advanced cognitive architecture that adapts to your workflow in real-time."
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Lightning-fast response times with edge computing capabilities."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and privacy protocols built into the core."
  },
  {
    icon: Globe,
    title: "Global Connectivity",
    description: "Seamless integration with APIs and services across the entire web."
  },
  {
    icon: Cpu,
    title: "Autonomous Agents",
    description: "Self-improving agents that learn from interactions and optimize tasks."
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Extensive SDKs and documentation for custom implementation."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Engineered for <span className="text-white/50">Performance.</span>
          </h2>
          <p className="text-xl text-white/60">
            NexBot combines cutting-edge AI research with robust engineering to deliver an unparalleled agent experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}