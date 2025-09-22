import { Briefcase, PieChart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Discovery & Planning",
      description:
        "Our process starts with a through understanding of your business objectives, target audience, and project needs.",
      color: "bg-brand-blue",
    },
    {
      icon: <PieChart className="w-8 h-8 text-white" />,
      title: "Design & Prototyping",
      description:
        "With a well-defined strategy, we proceed to design creation and prototype development.",
      color: "bg-brand-pink",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Development & Implementation",
      description:
        "After finalizing the design, our development team steps in to transform your project into reality.",
      color: "bg-brand-purple",
    },
  ];

  // Parent animation container (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Use a cubic-bezier array for `ease` (valid Easing type)
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // easeOut curve
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="w-full mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-purple font-medium tracking-wide uppercase mb-4">
            How it works?
          </p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-8">
            From Vision to{" "}
            <span className="gradient-text">Digital Reality</span>
          </h2>
        </motion.div>

        {/* Steps with stagger animation */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div
                className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow`}
                whileHover={{ scale: 1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
