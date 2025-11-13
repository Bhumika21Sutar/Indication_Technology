import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();

  // const blogs = [
  //   {
  //     id: "ai-agents-future",
  //     image: "/src/assets/Blog1.jpg",
  //     title: "The Future of Business Automation in 2025",
  //     description:
  //       "The future isn’t on the horizon anymore — it’s here.Businesses that embrace automation early are already pulling ahead.",
  //     date: "Oct 29, 2025",
  //     author: "Indication Technology Pvt Ltd",
  //   },
  //   {
  //     id: "AI revolution ",
  //     image: "/src/assets/Blog2 (2).png",
  //     title: "AI revolution isn’t coming — it’s already here.",
  //     description:
  //       "The time for deliberation is over. The time for intelligent transformation is now.",
  //     date: "Nov 5, 2025",
  //     author: "Indication Technology Pvt Ltd",
  //   },
  //   {
  //     id: "Ai-services",
  //     image: "/src/assets/Blog3.jpg",
  //     title: "🚀 Your Data. Our Intelligence. Limitless Possibilities.",
  //     description:
  //       "The future is not about replacing humans with AI — it’s about amplifying human potential through intelligent systems.",
  //     date: "Nov 13, 2025",
  //     author: "Indication Technology Pvt Ltd",
  //   },
  // ];

  const blogs = [
    {
      id: "ai-agents-future",
      image: "/src/assets/Blog1.jpg",
      title: "The Future of Business Automation in 2025",
      description:
        "The future isn’t on the horizon anymore — it’s here. Businesses that embrace automation early are already pulling ahead.",
      date: "Oct 29, 2025",
      author: "Indication Technology Pvt Ltd",
    },
    {
      id: "web-dev-trends",
      image: "/src/assets/Blog2.jpg",
      title: "AI Revolution in Web Development",
      description:
        "AI is transforming how we design, build, and scale web experiences — faster, smarter, and more human-centric than ever.",
      date: "Nov 5, 2025",
      author: "Indication Technology Pvt Ltd",
    },
    {
      id: "mobile-app-importance",
      image: "/src/assets/Blog3.jpg",
      title: "🚀 Why Every Brand Needs a Mobile App",
      description:
        "The future is mobile-first. Here’s why your brand can’t afford to ignore app-based experiences in 2025.",
      date: "Nov 13, 2025",
      author: "Indication Technology Pvt Ltd",
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-background">
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
