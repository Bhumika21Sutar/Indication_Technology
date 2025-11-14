import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import FooterFix from "@/components/FooterFix";
// import Image from "../assets/pankaj-patel-_SgRNwAVNKw-unsplash.jpg";

import { loadImage } from "../lib/utils";

import { motion } from "framer-motion";
// import client1 from "../assets/TFox.webp";
// import client2 from "../assets/leaderlogo.png";
// import client3 from "../assets/barbera.jpg";
// import client4 from "../assets/Client4.jpg";
// import client5 from "../assets/client5.png";
// import client6 from "../assets/gig.jpg";
// import client7 from "../assets/Client6.png";

import ContactModal from "../pages/ContactModal";

// import work1 from "../assets/Adobe Express - file (9).png";
// import work2 from "../assets/Adobe Express - file (7).png";
// import work3 from "../assets/Adobe Express - file (12).png";
// import work4 from "../assets/Adobe Express - file (11).png";
// import work5 from "../assets/Adobe Express - file (10).png";
// import work6 from "../assets/Adobe Express - file (1).png";

import lang1 from "../assets/programing.png";
import lang2 from "../assets/document.png";
import lang3 from "../assets/library.png";
import lang4 from "../assets/bootstrap.png";
import lang5 from "../assets/github.png";
import lang6 from "../assets/github (1).png";
import lang7 from "../assets/gitlab.png";
import lang8 from "../assets/nodejs.png";
import lang9 from "../assets/nodejs (1).png";
import lang10 from "../assets/django.png";

import lang11 from "../assets/python.png";
import lang12 from "../assets/php.png";
import lang13 from "../assets/bitbucket.png";
import lang14 from "../assets/wordpress.png";
import lang15 from "../assets/mysql.png";
import lang16 from "../assets/data-cleaning.png";
import lang17 from "../assets/database (1).png";
import lang18 from "../assets/database.png";

import plan from "../assets/B2.jpeg";

// import Pro1 from "../assets/shopping-cart.png";
// import Pro2 from "../assets/digitalization.png";
// import Pro3 from "../assets/e-learning.png";
// import Pro4 from "../assets/crm.png";
// import Pro5 from "../assets/airplane.png";
// import Pro6 from "../assets/live-chat.png";

import FeatureWithWeb from "../components/FeaturesWithWeb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Smartphone,
  Star,
  Heart,
  Users,
  MapPin,
  ShoppingCart,
  Camera,
  DollarSign,
  Clock,
  CheckCircle,
} from "lucide-react";
import appDevHero from "@/assets/app-dev-hero.jpg";

const AppDevelopment = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const appCategories = [
    {
      image: loadImage("shopping-cart.png"),
      title: "E-commerce Applications",
      description:
        "Our ecommerce applications provide a seamless shopping experience. With secure payment gateways, intuitive navigation, and personalized recommendations, we help businesses boost sales and engage customers effectively.",
    },
    {
      image: loadImage("digitalization.png"),
      title: "Social Media Platforms",
      description:
        "We create social media platforms that connect people worldwide. Featuring real-time updates, multimedia sharing, and robust privacy controls, our solutions foster community engagement and dynamic interactions.",
    },
    {
      image: loadImage("e-learning.png"),
      title: "Online Learning Platforms",
      description:
        "Our online learning platforms offer interactive courses and resources. With features like live classes, quizzes, and progress tracking, we make education accessible and engaging for learners of all ages.",
    },
    {
      image: loadImage("crm.png"),
      title: "Customer Relation Management",
      description:
        "Enhance customer relationships with our CRM solutions. Offering contact management, sales tracking, and customer support tools, our CRMs help businesses streamline processes.",
    },
    {
      image: loadImage("airplane.png"),
      title: "Travel and Tourism Websites",
      description:
        "Our travel and tourism websites provide comprehensive travel planning. With features like booking systems, destination guides, and user reviews, we help users plan memorable trips and experiences.",
    },
    {
      image: loadImage("live-chat.png"),
      title: "Real-time Chat Applications",
      description:
        "Our real-time chat apps enable instant communication. Featuring secure messaging, file sharing, and video calls, our solutions enhance connectivity and collaboration for both personal and professional use",
    },
  ];

  // const portfolioItems = [
  //   {
  //     image: work1,
  //   },
  //   {
  //     image: work2,
  //   },
  //   {
  //     image: work3,
  //   },
  //   {
  //     image: work4,
  //   },
  //   {
  //     image: work5,
  //   },
  //   {
  //     image: work6,
  //   },
  // ];

  const portfolioItems = [
    { image: loadImage("Adobe Express - file (9).png") },
    { image: loadImage("Adobe Express - file (7).png") },
    { image: loadImage("Adobe Express - file (12).png") },
    { image: loadImage("Adobe Express - file (11).png") },
    { image: loadImage("Adobe Express - file (10).png") },
    { image: loadImage("Adobe Express - file (1).png") },
  ];

  const languages = [
    { name: "Frontend - Angular", logo: lang1 },
    { name: "Vue", logo: lang2 },
    { name: "React.js", logo: lang3 },
    { name: "Bootstrap Development", logo: lang4 },
    { name: "Version Control - Git", logo: lang5 },
    { name: "GitHub", logo: lang6 },
    { name: "GitLab", logo: lang7 },
    { name: "Backend - Node.js", logo: lang8 },
    { name: "Express.js", logo: lang9 },
    { name: "Django", logo: lang10 },

    { name: "Flask", logo: lang11 },
    { name: "PHP", logo: lang12 },
    { name: "BitBucket", logo: lang13 },
    { name: "CMS - Wordpress", logo: lang14 },
    { name: "Database - MySQL", logo: lang15 },
    { name: "Redis", logo: lang16 },
    { name: "MongoDB", logo: lang17 },
    { name: "PostgreSQL", logo: lang18 },
    // { name: "Joomla", logo: lang19 },
    // { name: "Drupal", logo: lang20 },
    // { name: "Shopify", logo: lang21 },
  ];

  const faqs = [
    {
      question: "What is your web development process?",
      answer:
        "Our web development process includes discovery and planning, design and prototyping, development and implementation, followed by testing, deployment, and ongoing support.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for building a website varies based on the complexity and requirements of the project. Typically, it can take anywhere from a few weeks to several months to complete.",
    },
    {
      question: "Do you provide responsive web design?",
      answer:
        "Yes, we specialize in creating responsive web designs that ensure your website looks and functions perfectly on all devices, including desktops, tablets, and smartphones.",
    },
    {
      question: "What types of websites do you develop?",
      answer:
        "We develop a variety of websites including business websites, e-commerce platforms, blogs, portfolio sites, and custom web applications tailored to meet specific business needs.",
    },
    {
      question: "Do you offer website maintenance and support?",
      answer:
        "Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and performs optimally at all times.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${loadImage(
            "pankaj-patel-_SgRNwAVNKw-unsplash.jpg"
          )})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="relative z-10 text-white ">
          <p className="text-lg font-medium mb-4">--Our Core Services--</p>
          <h1 className="text-4xl md:text-6xl font-bold">Web Development</h1>
        </div>
      </section>

      {/* Features Section with Animation */}
      <FeatureWithWeb />

      {/* Page Wrapper with 80% width */}
      <div className="w-[100%] mx-auto">
        {/* Portfolio Mobile Animation Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
                Our <span className="gradient-text">Work</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto px-2">
                Showcasing Our Expertise and Innovation Through Successful
                Projects and Satisfied Clients.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-glow transition-all duration-300 overflow-hidden group
                     w-full sm:w-full mx-auto"
                >
                  <CardContent className="p-0">
                    {/* Work Image */}
                    <div className="h-64 sm:h-72 md:h-80 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={`Portfolio ${index}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Ticker Section */}
        <div className="w-full  py-12 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
            Our <span className="gradient-text">Clients</span>
          </h2>

          <motion.div
            className="flex gap-12 whitespace-nowrap items-center"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <img
              src={loadImage("leaderlogo.png")}
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={loadImage("barbera.jpg")}
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={loadImage("Client4.jpg")}
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={loadImage("client5.png")}
              className="h-10 w-64"
              loading="lazy"
            />
            <img
              src={loadImage("gig.jpg")}
              className="h-8 w-64"
              loading="lazy"
            />
            <img
              src={loadImage("Client6.png")}
              className="h-10 w-64"
              loading="lazy"
            />

            {/* Duplicate for infinite scroll */}
            <img
              src={loadImage("leaderlogo.png")}
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={loadImage("barbera.jpg")}
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={loadImage("Client4.jpg")}
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={loadImage("client5.png")}
              className="h-10 w-64"
              loading="lazy"
            />
            <img
              src={loadImage("gig.jpg")}
              className="h-8 w-64"
              loading="lazy"
            />
            <img
              src={loadImage("Client6.png")}
              className="h-10 w-64"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Experience & Clients Section */}

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full">
              <img
                src={plan}
                alt="Team working"
                loading="lazy"
                className="rounded-xl shadow-lg w-full h-69 object-cover"
              />

              <motion.div
                className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white rounded-lg shadow-md px-4 py-2 sm:px-6 sm:py-4 flex flex-col items-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-orange">
                  7+
                </div>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground gradient-text text-center">
                  Years of experience
                </p>
              </motion.div>
            </div>

            <div className="text-left md:text-left">
              <p className="text-xs sm:text-sm font-semibold text-brand-orange uppercase tracking-wider mb-2 gradient-text">
                Business Planning
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4 sm:mb-6">
                Committed to Excellence: <br className="hidden sm:block" />
                <span className="gradient-text">
                  Professional and Dedicated Services
                </span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                With over 7 years of dedicated experience, we are enthusiastic
                about our work and the positive impact it brings to our clients.
                Throughout our journey, we have consistently delivered excellent
                solutions, aiming to exceed expectations and foster lasting
                relationships.
              </p>

              <div className="border border-border rounded-lg p-3 sm:p-4 flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-purple" />
                <p className="text-sm sm:text-base font-semibold text-foreground">
                  54+ clients trusting us.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground">
                We are committed to our timeline and how it{" "}
                <span className="underline">positively</span> impacts clients.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="animate-fade-in-up">
                <div className="text-6xl font-poppins font-bold gradient-text mb-4">
                  4.95
                </div>
                <p className="text-muted-foreground">100+ ratings</p>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-6xl font-poppins font-bold gradient-text mb-4">
                  98%
                </div>
                <p className="text-muted-foreground">
                  Genuine client's positive feedback
                </p>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-6xl font-poppins font-bold gradient-text mb-4">
                  24/7
                </div>
                <p className="text-muted-foreground">Support Channel open</p>
              </div>
            </div>
          </div>
        </section>

        {/* App Categories Section */}

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Heading */}
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4 sm:mb-8">
                Comprehensive Web Development <br className="hidden sm:block" />
                <span className="gradient-text">Services Tailored</span>
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {appCategories.map((category, index) => (
                <Card
                  key={index}
                  className="w-full border bg-card border-border hover:shadow-pink-500 transition-all duration-300 hover-lift "
                >
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    {/* Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-2 sm:mb-4 text-foreground">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Languages Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10 sm:mb-16 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-poppins font-bold text-foreground mb-3 sm:mb-4 leading-snug">
                Services <span className="gradient-text">we offer</span>
              </h2>
              <h3 className="text-base sm:text-xl md:text-2xl font-poppins font-semibold text-muted-foreground">
                Languages & Framework we support
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {languages.map((language, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105 w-full"
                >
                  <CardContent className="px-1 py-2 text-center flex flex-col items-center gap-1">
                    <img
                      src={language.logo}
                      alt={language.name}
                      className="h-8 w-8 object-contain"
                    />
                    <p className="font-medium text-foreground text-sm">
                      {language.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Heading */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4 sm:mb-8">
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
              <Accordion
                type="single"
                collapsible
                className="space-y-3 sm:space-y-4"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-3 sm:px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left font-poppins font-medium sm:font-semibold text-sm sm:text-base md:text-lg text-foreground hover:no-underline hover:text-brand-purple">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero mb-8 sm:mb-12 rounded-2xl">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4 sm:mb-8 leading-snug">
              Ready to Build Your{" "}
              <span className="gradient-text">Web App?</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto px-2">
              Let's transform your idea into a powerful web application that
              users will love.
            </p>

            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold 
                 text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6"
              onClick={() => {
                setIsContactOpen(true);
              }}
            >
              Send a Message
            </Button>
          </div>
        </section>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <Footer />
      <FooterFix />
    </div>
  );
};

export default AppDevelopment;
