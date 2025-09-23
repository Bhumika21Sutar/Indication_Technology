// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
// import Men1 from "../assets/Men1.png";
// import Men2 from "../assets/Men2.png";
// import Men3 from "../assets/Men3.png";

// const TestimonialsSection = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       name: "Kaustubh Dabhilkar",
//       image: Men1,
//       text: "The team delivered a fantastic website that exceeded my expectations. Very responsive and committed to getting things done right.",
//       rating: 5,
//       timeAgo: "4 months ago",
//     },
//     {
//       name: "Herman Smith",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//       text: "Indication Technology team transformed our outdated website into a modern, user-friendly platform that has significantly boosted our online presence and customer engagement.",
//       rating: 5,
//       timeAgo: "2 months ago",
//     },
//     {
//       name: "Matthew Taylor",
//       image: Men2,
//       text: "Indication Technology's expertise in mobile app development is unmatched. They took our concept and turned it into a fully functional and visually stunning app.",
//       rating: 5,
//       timeAgo: "1 month ago",
//     },
//     {
//       name: "Michael Brown",
//       image: Men3,
//       text: "Their IT solutions have strengthened our infrastructure and security.",
//       rating: 5,
//       timeAgo: "3 weeks ago",
//     },
//   ];

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   const renderStars = (rating: number) => {
//     return (
//       <div className="flex justify-center space-x-1 mb-3">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             className={`w-5 h-5 ${
//               i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className="w-full py-16 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold font-poppins text-foreground">
//             What Our <span className="gradient-text">Customers Say</span>
//           </h2>
//         </div>

//         {/* Mobile Slider */}
//         <div className="relative block md:hidden">
//           <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/40 text-center">
//             {renderStars(testimonials[currentTestimonial].rating)}

//             {/* Review Text */}
//             <p className="text-muted-foreground mb-4 text-sm">
//               "{testimonials[currentTestimonial].text}"
//             </p>

//             {/* Google Logo */}
//             <div className="flex justify-center mb-4">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
//                 loading="lazy"
//                 alt="Google"
//                 className="h-6"
//               />
//             </div>

//             {/* Customer Image */}
//             <div className="flex justify-center mb-2">
//               <img
//                 src={testimonials[currentTestimonial].image}
//                 alt={testimonials[currentTestimonial].name}
//                 loading="lazy"
//                 className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
//               />
//             </div>

//             {/* Name + Verified */}
//             <div className="flex items-center justify-center space-x-1 mb-1">
//               <h3 className="text-lg font-semibold text-foreground">
//                 {testimonials[currentTestimonial].name}
//               </h3>
//               <CheckCircle className="w-5 h-5 text-blue-500" />
//             </div>

//             {/* Time Ago */}
//             <p className="text-xs text-gray-400">
//               {testimonials[currentTestimonial].timeAgo}
//             </p>
//           </div>

//           {/* Navigation Arrows */}
//           <Button
//             onClick={prevTestimonial}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 shadow-md p-2"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </Button>

//           <Button
//             onClick={nextTestimonial}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 shadow-md p-2"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </Button>

//           {/* Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {testimonials.map((_, index) => (
//               <span
//                 key={index}
//                 className={`w-2.5 h-2.5 rounded-full ${
//                   index === currentTestimonial ? "bg-blue-500" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Desktop Grid */}
//         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50 hover-lift"
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   loading="lazy"
//                   className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
//                 />
//               </div>

//               <div className="flex justify-center">
//                 {renderStars(testimonial.rating)}
//               </div>

//               <p className="text-muted-foreground text-center text-sm mb-3">
//                 "{testimonial.text}"
//               </p>

//               {/* Google Logo */}
//               <div className="flex justify-center mb-3">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
//                   alt="Google"
//                   loading="lazy"
//                   className="h-6"
//                 />
//               </div>

//               {/* Name + Verified */}
//               <div className="flex items-center justify-center space-x-1">
//                 <h3 className="text-lg font-semibold text-foreground">
//                   {testimonial.name}
//                 </h3>
//                 <CheckCircle className="w-5 h-5 text-blue-500" />
//               </div>

//               {/* Time Ago */}
//               <p className="text-xs text-gray-400 text-center">
//                 {testimonial.timeAgo}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import Men1 from "../assets/Men1.png";
import Men2 from "../assets/Men2.png";
import Men3 from "../assets/Men3.png";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Kaustubh Dabhilkar",
      image: Men1,
      text: "The team delivered a fantastic website that exceeded my expectations. Very responsive and committed to getting things done right.",
      rating: 5,
      timeAgo: "4 months ago",
    },
    {
      name: "Herman Smith",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Indication Technology team transformed our outdated website into a modern, user-friendly platform that has significantly boosted our online presence and customer engagement.",
      rating: 5,
      timeAgo: "2 months ago",
    },
    {
      name: "Matthew Taylor",
      image: Men2,
      text: "Indication Technology's expertise in mobile app development is unmatched. They took our concept and turned it into a fully functional and visually stunning app.",
      rating: 5,
      timeAgo: "1 month ago",
    },
    {
      name: "Michael Brown",
      image: Men3,
      text: "Their IT solutions have strengthened our infrastructure and security.",
      rating: 5,
      timeAgo: "3 weeks ago",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => (
    <div className="flex justify-center space-x-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-foreground">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
        </div>

        {/* ✅ Mobile Slider (phones only) */}
        <div className="relative block sm:hidden">
          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/40 text-center">
            {renderStars(testimonials[currentTestimonial].rating)}

            <p className="text-muted-foreground mb-4 text-sm">
              "{testimonials[currentTestimonial].text}"
            </p>

            <div className="flex justify-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                loading="lazy"
                className="h-6"
              />
            </div>

            <div className="flex justify-center mb-2">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                loading="lazy"
                className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
              />
            </div>

            <div className="flex items-center justify-center space-x-1 mb-1">
              <h3 className="text-lg font-semibold text-foreground">
                {testimonials[currentTestimonial].name}
              </h3>
              <CheckCircle className="w-5 h-5 text-blue-500" />
            </div>

            <p className="text-xs text-gray-400">
              {testimonials[currentTestimonial].timeAgo}
            </p>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 shadow-md p-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 shadow-md p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentTestimonial ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ✅ Responsive Grid (tablets & up) */}
        {/* <div
          className="hidden sm:grid gap-6 mt-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50 hover-lift flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 mb-4"
              />

              {renderStars(testimonial.rating)}

              <p className="text-muted-foreground text-sm mb-3">
                "{testimonial.text}"
              </p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                loading="lazy"
                className="h-6 mb-3"
              />

              <div className="flex items-center justify-center space-x-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {testimonial.name}
                </h3>
                <CheckCircle className="w-5 h-5 text-blue-500" />
              </div>

              <p className="text-xs text-gray-400">{testimonial.timeAgo}</p>
            </div>
          ))}
        </div> */}

        {/* ✅ Responsive Grid (tablets & up) */}
        <div
          className="
    hidden 
    sm:grid 
    gap-6 mt-12 
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-3
    2xl:grid-cols-3
  "
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50 hover-lift flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 mb-4"
              />

              {renderStars(testimonial.rating)}

              <p className="text-muted-foreground text-sm mb-3">
                "{testimonial.text}"
              </p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                loading="lazy"
                className="h-6 mb-3"
              />

              <div className="flex items-center justify-center space-x-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {testimonial.name}
                </h3>
                <CheckCircle className="w-5 h-5 text-blue-500" />
              </div>

              <p className="text-xs text-gray-400">{testimonial.timeAgo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
