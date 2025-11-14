import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import FooterFix from "@/components/FooterFix";
import { loadImage } from "../lib/utils";
// import Image from "../assets/app1Background.png";
import { motion } from "framer-motion";
// import client1 from "../assets/TFox.webp";
// import client2 from "../assets/leaderlogo.png";
// import client3 from "../assets/barbera.jpg";
// import client4 from "../assets/Client4.jpg";
// import client5 from "../assets/client5.png";
// import client6 from "../assets/gig.jpg";
// import client7 from "../assets/Client6.png";

import ContactModal from "../pages/ContactModal"; //

// import work1 from "../assets/work1.png";
// import work2 from "../assets/work2.png";
// import work3 from "../assets/work3.png";
// import work4 from "../assets/work4.png";
// import work5 from "../assets/work5.png";

// import lang1 from "../assets/android.png";
// import lang2 from "../assets/java.png";
// import lang3 from "../assets/Kotlin_Icon.png";
// import lang4 from "../assets/apple.png";
// import lang5 from "../assets/UiUx.png";
// import lang6 from "../assets/swift.png";
// import lang7 from "../assets/flutter.png";
// import lang8 from "../assets/library.png";
// import lang9 from "../assets/figma.png";
// import lang10 from "../assets/cordova_bot.png";

import plan from "../assets/B2.jpeg";

// import Pro1 from "../assets/healthcare.png";
// import Pro2 from "../assets/social-media.png";
// import Pro3 from "../assets/travel-and-tourism.png";
// import Pro4 from "../assets/hand.png";
// import Pro5 from "../assets/carts.png";
// import Pro6 from "../assets/photo-editing.png";

import FeaturesWithPhone from "../components/FeaturesWithPhone";
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
      image: loadImage("healthcare.png"),
      title: "Health and Fitness Apps",
      description:
        "Apps for tracking personal fitness goals, providing workout routines, and monitoring essential health metrics like steps, calories, and sleep patterns.",
    },
    {
      image: loadImage("social-media.png"),
      title: "Social Networking Apps",
      description:
        "Platforms connecting users globally, enabling sharing of updates, photos, and videos, and fostering communities based on interests or professions.",
    },
    {
      image: loadImage("travel-and-tourism.png"),
      title: "Travel and Tourism Apps",
      description:
        "Tools for planning trips, booking accommodations, finding attractions, and navigating unfamiliar locations with maps and local guides.",
    },
    {
      image: loadImage("hand.png"),
      title: "Finance Management Apps",
      description:
        "Apps helping users budget, track expenses, manage investments, and handle transactions securely with banking integration, financial advice, real-time spending alerts.",
    },
    {
      image: loadImage("carts.png"),
      title: "Shopping and E-commerce Apps",
      description:
        "Platforms facilitating online shopping with product comparisons, secure payments, and delivery tracking, enhancing the shopping experience with personalized recommendations.",
    },
    {
      image: loadImage("photo-editing.png"),
      title: "Photography and Editing Apps",
      description:
        "Apps offering tools for capturing, editing, and sharing photos and videos, featuring filters, effects, and organizational features for creative expression.",
    },
  ];

  const portfolioItems = [
    {
      title: "PARTEX",
      description:
        "Partex is an ambitious B2B e-commerce marketplace aiming to emerge as the largest and most dependable platform for auto component buyers worldwide.",
      image: loadImage("work1.png"),
    },
    {
      title: "HAILZ",
      description:
        "Welcome to Hailz, the trusted app for ride-hailing and deliveries, connecting you with experienced drivers anytime, anywhere, including New York City.",
      image: loadImage("work2.png"),
    },
    {
      title: "GLOWSY",
      description:
        "Glowsy is a rapidly growing aesthetic software empowering patients nationwide to find top aesthetic doctors for all their cosmetic needs.",
      image: loadImage("work3.png"),
    },
    {
      title: "HOUSE OF DELIVERANCE",
      description:
        "Carry Hindi and English song lyrics in your pocket with our app, featuring a collection of over 100 songs. Users can even request specific songs to be added.",
      image: loadImage("work4.png"),
    },
    {
      title: "ARTISAN EXPRESS",
      description:
        "Explore Artisan Express, your go-to online shopping destination offering a wide range of products across all categories, ensuring choice and convenience.",
      image: loadImage("work5.png"),
    },
  ];

  const languages = [
    { name: "Android Native development", logo: loadImage("android.png") },
    { name: "Java", logo: loadImage("java.png") },
    { name: "Kotlin", logo: loadImage("Kotlin_Icon.png") },
    { name: "iOS Native Development", logo: loadImage("apple.png") },
    { name: "UI/UX", logo: loadImage("UiUx.png") },
    { name: "Swift", logo: loadImage("swift.png") },
    { name: "Flutter (Hybrid)", logo: loadImage("flutter.png") },
    { name: "React Native (Hybrid)", logo: loadImage("library.png") },
    { name: "Figma", logo: loadImage("figma.png") },
    { name: "Cordova (Hybrid)", logo: loadImage("cordova_bot.png") },
  ];

  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "The development timeline varies based on app complexity, features, and platform. Typically, a simple app takes 2-3 months, while complex apps can take 6-9 months or more.",
    },
    {
      question: "Do you develop for both iOS and Android?",
      answer:
        "Yes, we develop native apps for both iOS and Android platforms, as well as cross-platform solutions using React Native and Flutter.",
    },
    {
      question: "What is included in your app development service?",
      answer:
        "Our service includes UI/UX design, development, testing, app store submission, and post-launch support. We handle the complete development lifecycle.",
    },
    {
      question: "Can you help with app store submission?",
      answer:
        "Absolutely! We handle the entire app store submission process for both Apple App Store and Google Play Store, ensuring compliance with all guidelines.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, updates, feature enhancements, and technical support to ensure your app runs smoothly.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${loadImage("app1Background.png")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="relative z-10 text-white px-6">
          <p className="text-lg font-medium mb-4">--Our Core Services--</p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Mobile App Development
          </h1>
        </div>
      </section>

      {/* Features Section with Animation */}
      <FeaturesWithPhone />

      {/* Page Wrapper with 80% width */}
      <div className="w-[100%] mx-auto ">
        {/* Portfolio Mobile Animation Section */}

        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-6">
            {/* Section Heading */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4 sm:mb-8">
                Our <span className="gradient-text">Work</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto">
                Showcasing Our Expertise and Innovation Through Successful
                Projects and Satisfied Clients.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card border border-border hover:shadow-glow transition-all duration-300 overflow-hidden group w-full sm:max-w-sm mx-auto"
                >
                  <CardContent className="p-0">
                    {/* Work Image */}
                    <div className="h-40 sm:h-80 md:h-72 lg:h-80 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 md:p-6 transition-transform duration-300 group-hover:translate-y-[-6px] text-center sm:text-left">
                      <h3 className="text-base sm:text-lg md:text-xl font-poppins font-semibold mb-1 sm:mb-2 text-foreground group-hover:text-brand-purple">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground">
                        {item.description}
                      </p>
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

            {/* Duplicates */}
            {/* <img src={client1} alt="Client 1" className="h-10 w-64" /> */}
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
                src={loadImage("B2.jpeg")}
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
                Comprehensive App Development <br className="hidden sm:block" />
                <span className="gradient-text">Services Tailored</span>
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {appCategories.map((category, index) => (
                <Card
                  key={index}
                  className="w-full border bg-card border-border hover:shadow-pink-500 transition-all duration-300 hover-lift"
                >
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    {/* Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        loading="lazy"
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

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {languages.map((language, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center flex flex-col items-center gap-2">
                    <img
                      src={language.logo}
                      alt={language.name}
                      loading="lazy"
                      className="h-12 w-12 object-contain"
                    />
                    <p className="font-medium text-foreground">
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
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4 sm:mb-6 md:mb-8">
              Ready to Build Your{" "}
              <span className="gradient-text">Mobile App?</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
              Let's transform your idea into a powerful mobile application that
              users will love.
            </p>

            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-lg"
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
