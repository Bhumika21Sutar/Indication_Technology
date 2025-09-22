// import { Calendar, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";

// const BlogSection = () => {
//   const navigate = useNavigate();

//   const blogs = [
//     {
//       id: "ai-agents-future",
//       image:
//         "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
//       title: "AI Agents: The Future of Intelligent Automation",
//       description:
//         "Explore how AI agents are revolutionizing business automation and decision-making processes.",
//       date: "Dec 15, 2024",
//       author: "AI Team",
//     },
//     {
//       id: "web-dev-trends",
//       image:
//         "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
//       title: "How AI is Changing Web Development",
//       description:
//         "A breakdown of how AI tools are enhancing design, coding, and user experience.",
//       date: "Dec 10, 2024",
//       author: "AI Team",
//     },
//     {
//       id: "mobile-app-importance",
//       image:
//         "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
//       title: "Why Every Brand Needs a Mobile App",
//       description:
//         "Discover the strategic importance of having a mobile-first approach in 2025.",
//       date: "Dec 5, 2024",
//       author: "Mobile Team",
//     },
//   ];

//   return (
//     <section id="blog" className="py-20 bg-background">
//       <div className="w-full px-4">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
//             Our <span className="gradient-text">Blogs</span>
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Latest Insights & Updates
//           </p>
//         </div>

//         <div
//           className="grid gap-8 max-w-7xl mx-auto"
//           style={{
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           }}
//         >
//           {blogs.map((blog, index) => (
//             <article
//               key={index}
//               className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift border border-border/50 max-w-md mx-auto"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               {/* Blog Image */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>

//               {/* Blog Content */}
//               <div className="p-6 space-y-4">
//                 <div className="flex items-center text-sm text-muted-foreground space-x-4">
//                   <div className="flex items-center space-x-1">
//                     <Calendar className="w-4 h-4" />
//                     <span>{blog.date}</span>
//                   </div>
//                   <span>•</span>
//                   <span>{blog.author}</span>
//                 </div>

//                 <h3 className="text-xl font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
//                   {blog.title}
//                 </h3>

//                 <p className="text-muted-foreground leading-relaxed">
//                   {blog.description}
//                 </p>

//                 <Button
//                   variant="ghost"
//                   className="text-brand-purple hover:text-brand-purple/80 p-0 h-auto font-medium group/btn"
//                   onClick={() => navigate(`/blog/${blog.id}`)}
//                 >
//                   Read More
//                   <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
//                 </Button>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* View All Blogs Button */}
//         {/* <div className="text-center mt-12">
//           <Button
//             className="bg-gradient-primary hover:opacity-90 text-white font-medium px-8 py-3 rounded-full transition-all hover-lift"
//             // onClick={() => navigate(`/blog/${blog.id}`)}
//           >
//             View All Blogs
//           </Button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: "ai-agents-future",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      title: "AI Agents: The Future of Intelligent Automation",
      description:
        "Explore how AI agents are revolutionizing business automation and decision-making processes.",
      date: "Dec 15, 2024",
      author: "AI Team",
    },
    {
      id: "web-dev-trends",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      title: "How AI is Changing Web Development",
      description:
        "A breakdown of how AI tools are enhancing design, coding, and user experience.",
      date: "Dec 10, 2024",
      author: "AI Team",
    },
    {
      id: "mobile-app-importance",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      title: "Why Every Brand Needs a Mobile App",
      description:
        "Discover the strategic importance of having a mobile-first approach in 2025.",
      date: "Dec 5, 2024",
      author: "Mobile Team",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="w-full px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Our <span className="gradient-text">Blogs</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Latest Insights & Updates
          </p>
        </div>

        {/* Responsive Grid */}
        <div
          className="
    grid 
    grid-cols-1          
    sm:grid-cols-2       
    lg:grid-cols-3       
    xl:grid-cols-3     
    2xl:grid-cols-3    
    gap-8 max-w-7xl mx-auto
  "
        >
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift animate-fade-in-up border border-border/50 h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <span>•</span>
                  <span>{blog.author}</span>
                </div>

                <h3 className="text-xl font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {blog.description}
                </p>

                <div>
                  <Button
                    variant="ghost"
                    className="text-brand-purple hover:text-brand-purple/80 p-0 h-auto font-medium group/btn"
                    onClick={() => navigate(`/blog/${blog.id}`)}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
