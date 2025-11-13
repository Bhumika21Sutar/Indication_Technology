import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, User, Clock, Share2 } from "lucide-react";
import FooterFix from "@/components/FooterFix";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

interface ShareButtonProps {
  url: string;
  title: string;
}

// ✅ ShareButton component
const ShareButton = ({ url, title }: ShareButtonProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: "Check out this blog!",
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Button
      onClick={handleShare}
      className="bg-gradient-primary hover:opacity-90 text-white"
    >
      <Share2 className="w-4 h-4 mr-2" />
      Share
    </Button>
  );
};

const getDaysAgo = (dateStr: string) => {
  const postDate = new Date(dateStr);
  const today = new Date();

  const diffTime = today.getTime() - postDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";

  return `${diffDays} days ago`;
};

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);

  // Sample blog data - in a real app, this would come from an API
  const blogPosts: Record<string, BlogPost> = {
    "ai-agents-future": {
      id: "ai-agents-future",
      title: "The Future of Business Automation in 2025",
      excerpt:
        "The year 2025 marks a new era for business. Not one where people are replaced by machines — but one where people are empowered by intelligence. Businesses that integrate Artificial Intelligence (AI) and automation the right way will work smarter, make faster decisions, and grow exponentially.",
      image: "/src/assets/Blog1.jpg",
      date: "Oct 29, 2025",
      author: "Indication Technology Pvt Ltd",
      readTime: "8 min read",
      tags: [
        "#AIAutomation",
        "#BusinessGrowth",
        "#FutureOfWork",
        "#ArtificialIntelligence",
        "#AIAgents",
        "#Automation",
        "#DigitalTransformation",
        "#TechForGrowth",
      ],
      content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-muted-foreground mb-8">
          The year 2025 marks a new era for business. Not one where people are replaced by machines — but one where people are empowered by intelligence. The future of work isn’t about removing the human element; it’s about amplifying it. Businesses that integrate Artificial Intelligence (AI) and automation the right way will work smarter, make faster decisions, and grow exponentially.
        </p>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">1️⃣ AI Agents Are Becoming Part of the Team</h2>
        <p class="text-lg text-muted-foreground mb-6">
          Imagine a team member who never sleeps, never forgets a task, and continuously learns to get better. That’s the power of AI agents.
          These intelligent systems can send personalized emails, find leads, schedule meetings, and automate workflows — freeing humans to focus on creativity and relationships.
        </p>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">2️⃣ Automation Is the New Business Standard</h2>
        <p class="text-lg text-muted-foreground mb-6">
          Just like every company needed a website 20 years ago, every business now needs automation. The question is no longer “Who will do this task?” but “How can we automate this?”
          Automation drives speed, scalability, and precision — and in 2025, it’s no longer optional.
        </p>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">3️⃣ People + AI = Growth</h2>
        <p class="text-lg text-muted-foreground mb-6">
          The most successful businesses blend human creativity with AI’s speed and accuracy. AI handles repetitive tasks while people focus on strategy, relationships, and innovation — creating a powerful synergy that accelerates growth.
        </p>

        <div class="bg-gradient-to-r from-brand-pink/10 via-brand-purple/10 to-brand-blue/10 p-8 rounded-lg border border-border mt-12">
          <h2 class="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
          <p class="text-lg text-muted-foreground mb-4">
            2025 belongs to businesses that think beyond manual effort and start building with intelligence. Automation isn’t about doing less — it’s about achieving more with less effort.
          </p>
          <p class="text-lg text-muted-foreground">
            The question isn’t if your business will start using AI. It’s how soon.
          </p>
        </div>
      </div>
    `,
    },

    "ai-revolution-now": {
      id: "ai-revolution-now",
      title: "🚀 The AI Revolution Is Here — And It Won’t Wait for You",
      excerpt:
        "The AI revolution isn’t coming — it’s already here, transforming industries and redefining competition. Early adopters aren’t just improving efficiency; they’re building intelligent systems that continuously learn and evolve.",
      image: "/src/assets/Blog2.jpg",
      date: "Nov 7, 2025",
      author: "Indication Technology Pvt Ltd",
      readTime: "7 min read",
      tags: [
        "#AI",
        "#ArtificialIntelligence",
        "#BusinessStrategy",
        "#CompetitiveAdvantage",
        "#DigitalTransformation",
        "#Innovation",
      ],
      content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-muted-foreground mb-8">
          The AI revolution isn’t coming — it’s already here, reshaping markets faster than many realize. Businesses still treating AI as a future experiment are missing the current competitive window. Early adopters aren’t just gaining efficiency — they’re fundamentally altering their market positions.
        </p>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">From Efficiency to Evolution</h2>
        <p class="text-lg text-muted-foreground mb-6">
          AI doesn’t just make operations faster — it transforms them. Companies that deploy AI today are re-architecting how decisions, products, and customer experiences are built.
          This is not incremental progress — it’s exponential transformation.
        </p>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">The True Competitive Edge</h2>
        <p class="text-lg text-muted-foreground mb-6">
          The real advantage lies in proprietary data models and continuous learning systems. Each implementation generates more data, refining algorithms and strengthening insights — creating a feedback loop that late adopters can’t easily replicate.
        </p>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">The Cost of Waiting</h2>
        <p class="text-lg text-muted-foreground mb-6">
          Waiting for AI to ‘mature’ is a strategic mistake. Competitors are already automating, personalizing, and optimizing at scale. Delaying adoption means falling behind not just in technology — but in accumulated intelligence.
        </p>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Building an AI-First Culture</h2>
        <p class="text-lg text-muted-foreground mb-6">
          Winning in the AI era isn’t about tools — it’s about culture. AI-first organizations prioritize learning, experimentation, and alignment between human creativity and machine intelligence.
        </p>

        <div class="bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-pink/10 p-8 rounded-lg border border-border mt-12">
          <h2 class="text-3xl font-bold text-foreground mb-6">The Moment for Action Is Now</h2>
          <p class="text-lg text-muted-foreground mb-4">
            The future isn’t waiting for anyone. Every day delayed is a day your competitors’ algorithms get smarter. The time for deliberation is over — the time for strategic AI integration is now.
          </p>
          <p class="text-lg text-muted-foreground">
            What steps are you taking today to ensure your business doesn’t become another casualty of AI inertia?
          </p>
        </div>
      </div>
    `,
    },

    "data-intelligence": {
      id: "data-intelligence",
      title: "Your Data. Our Intelligence. Limitless Possibilities.",
      excerpt:
        "In the digital era, data alone doesn’t create advantage — intelligence does. Learn how Indication Technology Pvt Ltd transforms raw information into actionable insights that power growth and innovation.",
      image: "/src/assets/Blog3.jpg",
      date: "Nov 13, 2025",
      author: "Indication Technology Pvt Ltd",
      readTime: "8 min read",
      tags: [
        "#AI",
        "#DataAnalytics",
        "#BusinessIntelligence",
        "#DigitalTransformation",
        "#Innovation",
        "#MachineLearning",
      ],
      content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-muted-foreground mb-8">
          The world runs on data — but only the intelligent know how to use it. Every click, transaction, and interaction tells a story. Yet for many organizations, that story remains untold — buried under mountains of unstructured information.
        </p>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">The Power of Data Intelligence</h2>
        <p class="text-lg text-muted-foreground mb-6">
          Data alone is passive. Intelligence turns it into action. By combining Artificial Intelligence, Machine Learning, and Business Intelligence, organizations can unlock predictive and prescriptive insights that drive real outcomes.
        </p>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Key Pillars of Intelligent Transformation</h2>
        <ul class="list-disc pl-6 space-y-3 text-lg text-muted-foreground mb-8">
          <li><strong>Integration:</strong> Unified data across all business systems.</li>
          <li><strong>Advanced Analytics:</strong> From historical reports to predictive forecasts.</li>
          <li><strong>Automation:</strong> Streamlined decision-making with real-time insights.</li>
          <li><strong>Visualization:</strong> Turning complex data into clear stories.</li>
          <li><strong>Continuous Learning:</strong> Systems that evolve as your business grows.</li>
        </ul>

        <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">The Shift from Data-Driven to Intelligence-Driven</h2>
        <p class="text-lg text-muted-foreground mb-6">
          Being data-driven was once enough. Today, leaders are intelligence-driven — using AI to anticipate trends, personalize customer experiences, and innovate faster than competitors.
        </p>

        <div class="bg-gradient-to-r from-brand-purple/10 via-brand-blue/10 to-brand-pink/10 p-8 rounded-lg border border-border mt-12">
          <h2 class="text-3xl font-bold text-foreground mb-6">Conclusion: Turning Insight into Impact</h2>
          <p class="text-lg text-muted-foreground mb-4">
            At Indication Technology Pvt Ltd, we help businesses evolve from data-driven to intelligence-driven. Because data alone doesn’t create advantage — intelligence does.
          </p>
          <p class="text-lg text-muted-foreground">
            Let’s unlock your data’s full potential. Let’s turn insight into impact. 🚀
          </p>
        </div>
      </div>
    `,
    },
    "web-dev-trends": {
      id: "web-dev-trends",
      title: "🚀 The AI Revolution Is Here — And It Won’t Wait for You",
      excerpt:
        "The AI revolution isn't coming — it’s already transforming industries at lightning speed. Businesses waiting for AI to ‘mature’ are losing ground, while early adopters are redefining their markets with smarter systems and data-driven intelligence.",
      image: "/src/assets/Blog2.png",
      date: "Nov 10, 2025",
      author: "Indication Technology Pvt Ltd",
      readTime: "7 min read",
      tags: [
        "#AI",
        "#ArtificialIntelligence",
        "#BusinessStrategy",
        "#CompetitiveAdvantage",
        "#DigitalTransformation",
        "#Innovation",
      ],
      content: `
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-muted-foreground mb-8">
        The AI revolution isn't coming; it's already here — reshaping industries, redefining efficiency, and accelerating innovation. Businesses still treating AI as a “future experiment” are missing today’s competitive advantage. This shift isn't about incremental improvement — it's about exponential transformation.
      </p>

      <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Early Adopters Are Building a Data Moat</h2>
      <p class="text-lg text-muted-foreground mb-6">
        The most powerful advantage in the AI era isn’t just technology — it’s intelligence. Companies that integrate AI early are cultivating proprietary data models, creating smarter systems, and refining feedback loops that continuously learn and improve.
      </p>
      <p class="text-lg text-muted-foreground mb-6">
        Every implementation adds more data, more context, and more insight — compounding over time into a data moat that late adopters can’t easily cross.
      </p>

      <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">The Cost of Waiting</h2>
      <p class="text-lg text-muted-foreground mb-6">
        Waiting for AI to ‘mature’ is no longer a cautious strategy — it’s surrender. While some hesitate, others are already automating operations, personalizing customer experiences, and optimizing decision-making at scale.
      </p>
      <p class="text-lg text-muted-foreground mb-6">
        Those who delay adoption will find their margins shrinking, top talent migrating, and market relevance fading. In the era of hyper-automation, complacency equals obsolescence.
      </p>

      <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Build an AI-First Culture</h2>
      <p class="text-lg text-muted-foreground mb-6">
        Integrating AI isn’t just a technical upgrade — it’s a strategic mindset. Organizations that thrive will embed AI into their culture, empowering teams to innovate faster, automate smarter, and act on insights in real time.
      </p>

      <div class="bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-pink/10 p-8 rounded-lg border border-border mt-12">
        <h2 class="text-3xl font-bold text-foreground mb-6">The Time to Act Is Now</h2>
        <p class="text-lg text-muted-foreground mb-4">
          The AI revolution rewards bold action and punishes hesitation. The question isn’t whether AI will reshape your industry — it’s whether your business will lead or follow.
        </p>
        <p class="text-lg text-muted-foreground">
          Build an AI-first foundation, invest in intelligent systems, and start today — because in tomorrow’s economy, speed, learning, and intelligence will define survival.
        </p>
      </div>
    </div>
  `,
    },
    "mobile-app-importance": {
      id: "mobile-app-importance",
      title: "💡 Your Data. Our Intelligence. Limitless Possibilities.",
      excerpt:
        "Every click, transaction, and number tells a story — but without the right intelligence, it’s just noise. At Indication Technology, we transform raw data into meaningful insights that help businesses predict, decide, and grow faster.",
      image: "/src/assets/Blog3.jpg",
      date: "Nov 14, 2025",
      author: "Indication Technology Pvt Ltd",
      readTime: "6 min read",
      tags: [
        "#AI",
        "#ArtificialIntelligence",
        "#BusinessIntelligence",
        "#DataAnalytics",
        "#Innovation",
        "#TechForGrowth",
        "#MachineLearning",
      ],
      content: `
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-muted-foreground mb-8">
        Your data isn’t just information — it’s untapped intelligence waiting to be awakened. Every number, click, and transaction holds insights about customer behavior, market trends, and operational efficiency. But without the right intelligence to decode it, data is just noise.
      </p>

      <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">From Data to Intelligence</h2>
      <p class="text-lg text-muted-foreground mb-6">
        At <strong>Indication Technology Pvt Ltd</strong>, we help businesses transform raw, scattered data into structured intelligence that drives smarter decisions. Our AI-driven analytics systems convert complexity into clarity — revealing opportunities hidden in plain sight.
      </p>

      <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Actionable Insights That Drive Growth</h2>
      <p class="text-lg text-muted-foreground mb-6">
        We go beyond dashboards and reports. By combining AI, machine learning, and automation, we deliver predictive insights — helping you anticipate market shifts, personalize experiences, and optimize operations.
      </p>
      <ul class="list-disc pl-6 space-y-3 text-lg text-muted-foreground mb-8">
        <li>Uncover patterns that reveal customer intent.</li>
        <li>Forecast business outcomes with predictive analytics.</li>
        <li>Automate decision-making across key operations.</li>
        <li>Empower teams with real-time data intelligence.</li>
      </ul>

      <h2 class="text-3xl font-bold text-foreground mb-6 mt-12">Why Intelligence Beats Information</h2>
      <p class="text-lg text-muted-foreground mb-6">
        In today’s fast-moving world, data alone isn’t a competitive advantage — intelligence is. Businesses that harness data effectively are not just reacting to trends; they’re shaping them.
      </p>

      <div class="bg-gradient-to-r from-brand-pink/10 via-brand-purple/10 to-brand-blue/10 p-8 rounded-lg border border-border mt-12">
        <h2 class="text-3xl font-bold text-foreground mb-6">Turning Insight into Impact</h2>
        <p class="text-lg text-muted-foreground mb-4">
          The future belongs to businesses that act intelligently, not just collect information. At Indication Technology, we help you unlock your data’s full potential — transforming insight into measurable business impact.
        </p>
        <p class="text-lg text-muted-foreground">
          🚀 <strong>Your Data. Our Intelligence. Limitless Possibilities.</strong>
        </p>
      </div>
    </div>
  `,
    },
  };

  useEffect(() => {
    if (id && blogPosts[id]) {
      setBlog(blogPosts[id]);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-gradient-primary hover:opacity-90 text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 via-brand-purple/10 to-brand-blue/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6 animate-fade-in-up">
                {blog.title}
              </h1>

              <div
                className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center space-x-2">
                  {/* <Calendar className="w-4 h-4" /> */}
                  {/* <span>{blog.date}</span> */}
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.date}</span>
                  <span className="text-muted-foreground">
                    • {getDaysAgo(blog.date)}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="relative mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <article
              className="animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Share this article
                  </h3>
                  <p className="text-muted-foreground">
                    Help others discover this content
                  </p>
                </div>

                {/* Share Button */}
                <ShareButton url={window.location.href} title={blog.title} />
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Related Articles
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.values(blogPosts)
                  .filter((post) => post.id !== blog.id)
                  .slice(0, 2)
                  .map((relatedBlog, index) => (
                    <div
                      key={relatedBlog.id}
                      className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift border border-border/50 cursor-pointer"
                      onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{relatedBlog.date}</span>
                          </div>
                          <span>•</span>
                          <span>{relatedBlog.author}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {relatedBlog.excerpt}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FooterFix />
    </div>
  );
};

export default BlogDetail;
