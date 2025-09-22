import { Button } from "@/components/ui/button";
import About from "../assets/AboutUs.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Globe, Link } from "lucide-react";
import { motion } from "framer-motion";
import FooterFix from "@/components/FooterFix";
import ContactModal from "../pages/ContactModal";
import { useState, useEffect } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Page Wrapper with 90% width */}
      <div className="w-full mx-auto px-6">
        {/* Hero Section */}
        <section className="container w-full px-6 pt-32 pb-20 grid md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We specialize in delivering unique <br />
              <span className="gradient-text">visual solutions.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              From humble beginnings to industry leaders, our journey is driven
              by passion, fueled by dedication, and defined by success.
            </p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Button
                className="px-6 py-3 rounded-full"
                onClick={() => setIsContactOpen(true)}
              >
                Find More
              </Button>
              {/* <Button
                variant="outline"
                className="px-6 py-3 rounded-full border"
              >
                Find more
              </Button> */}
            </motion.div>
          </motion.div>

          {/* Right Image with animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* <img
              src={About}
              alt="Team working"
              loading="lazy"
              className="rounded-1xl shadow-lg object-cover clip-slant"
            /> */}
            <LazyLoadImage
              alt="Team working"
              effect="blur"
              src={About}
              className="rounded-1xl shadow-lg object-cover clip-slant"
            />
          </motion.div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-background">
          <div className="container w-full mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
            {[
              { value: "4.95", label: "100+ ratings" },
              { value: "98%", label: "Genuine client's positive feedback" },
              { value: "24/7", label: "Support Channel open" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-poppins font-bold gradient-text mb-4">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Mission & Vision Section */}
      <section className="bg-black text-white py-20">
        <div className="w-full mx-auto px-6">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 text-center md:text-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower businesses with innovative technological solutions
                that drive growth, efficiency, and success in the digital age,
                Indication Technology delivers tailored strategies and
                cutting-edge implementations across software development, AI,
                cloud services, and data intelligence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become a global leader in technology solutions, renowned for
                our innovation, unwavering quality, and steadfast commitment to
                ensuring client success and satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <div className="w-[100%] mx-auto ">
        {/* <section className="py-20 bg-background">
          <motion.div
            className="container mx-auto px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12">Open positions</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Engineering</h3>

              <div className="divide-y">
                {[
                  "Back-end Software Engineer",
                  "Front-end Software Engineer",
                  "Full-stack Software Engineer",
                  "UX/UI Designer",
                ].map((role, index) => (
                  <motion.div
                    key={role}
                    className="flex flex-col md:flex-row md:items-center md:justify-between py-4 hover:bg-muted/40 transition rounded-lg px-4 gap-3 md:gap-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <span className="text-lg font-medium">{role}</span>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-muted-foreground text-sm sm:items-center">
                      <span className="flex items-center gap-2">
                        <Clock size={16} /> Full-time
                      </span>
                      <span className="flex items-center gap-2">
                        <Globe size={16} /> Remote possible
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section> */}

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-gradient-hero mt-12 mb-12 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container w-full mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4 sm:mb-6 md:mb-8">
              Ready to Build Your{" "}
              <span className="gradient-text">Application?</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
              Let's transform your idea into a powerful application that users
              will love.
            </p>

            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
              onClick={() => {
                setIsContactOpen(true);
              }}
            >
              Send a Message
            </Button>
          </div>
        </motion.section>
      </div>

      {/* ✅ Contact Modal */}
      {/* {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )} */}

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <Footer />
      <FooterFix />
    </div>
  );
};

export default AboutUs;
