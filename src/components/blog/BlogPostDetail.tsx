import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryPill from "./CategoryPill";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostDetailProps {
  onBack: () => void;
}

const BlogPostDetail = ({ onBack }: BlogPostDetailProps) => {
  // Get the first blog post (hardcoded for now as this component displays the first post)
  const post = blogPosts[0];

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Button>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <CategoryPill key={category} category={category} />
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight pb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          In B2B SaaS, your product roadmap is more than a list of features — it's the strategic narrative of where your company is going and why.
        </p>

        <p className="mb-6">
          But in today's environment, that narrative is under pressure like never before. Budgets are tightening, investors are pushing for aggressive growth, and the rapid rise of AI is reshaping entire markets. Meanwhile, your GTM (go-to-market) teams are surfacing new opportunities that feel "too important to ignore" if you want to hit this quarter's number.
        </p>

        <p className="mb-8">
          As a product leader, you find yourself caught between two powerful forces: the short-term revenue targets that keep the business alive, and the long-term product vision that keeps it meaningful. Balancing these competing priorities — without losing your team's focus or your product's identity — is one of the hardest challenges in B2B SaaS today.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">So how do you build a product roadmap that serves both the now and the next?</h2>

        <h2 className="text-3xl font-bold mt-12 mb-4">The Product Roadmap Paradox</h2>

        <p className="mb-4">
          Every product leader eventually faces a version of this question:
        </p>

        <p className="italic mb-4">
          "We've got a big customer who says they'll sign if we just build this one feature…"
        </p>

        <p className="mb-6">
          You know that story. Your sales team sees a clear path to closing a deal. Your customer success team sees retention risk. And your leadership team sees numbers that must move. But you also know that chasing one-off requests can quickly turn your elegant product vision into a patchwork of custom work.
        </p>

        <p className="mb-8">
          This tension — between short-term revenue and long-term vision — is not a flaw in your strategy; it's a structural feature of building in B2B SaaS. The key is not to eliminate it, but to manage it with clarity, transparency, and discipline.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Why It's Harder Than Ever</h2>

        <p className="mb-4">
          The current market reality makes this balancing act even more complex:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Growth expectations remain high, but capital is tighter.</li>
          <li>AI has shifted customer expectations, demanding faster innovation cycles.</li>
          <li>The market itself is contracting in many SaaS verticals.</li>
        </ul>

        <p className="mb-8">
          In this environment, it's easy to become reactive — to build for whoever shouts loudest. But the companies that will emerge stronger are those who can navigate the noise by staying anchored in a clear mission and vision.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Anchor Everything in Your Product Vision</h2>

        <p className="mb-6">
          Your product vision is not a slide for board meetings — it's your decision-making compass.
        </p>

        <p className="mb-6">
          When you have a clearly articulated vision and mission, it becomes much easier to say "no" or "not now" without losing trust. Your teams know why certain initiatives matter more. Your GTM partners can connect customer needs back to the company's broader direction. And your customers see consistency in your product evolution.
        </p>

        <p className="mb-8">
          A strong vision doesn't limit flexibility; it gives it purpose.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Four Practices to Navigate the Now vs. Next Challenge</h2>

        <p className="mb-8">
          These are 4, of many good practices I've seen from great leaders but also from my experience in these situations. There for sure will be more to add and I'm happy to hear what works for you, but these 4 practices should help you set the standards of how you work as a Product leader in this challenging environment.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">1. Talk Regularly to Your Customers — to Hear What They Say (and What They Don't)</h3>

        <p className="mb-6">
          Customer conversations are your most powerful roadmap input — but only if you listen beyond their words.
        </p>

        <p className="mb-6">
          What customers say they want usually reflects their immediate pain points. What you should build for the long term often lies between the lines: the underlying workflows, unmet needs, or inefficiencies they haven't articulated yet.
        </p>

        <p className="mb-6">
          Regular customer engagement — through interviews, usage reviews, and feedback loops — allows you to see both horizons. It helps you identify which short-term opportunities ladder up to your long-term vision, and which ones are just distractions in disguise.
        </p>

        <p className="font-semibold mb-8">
          Don't just validate features. Validate direction.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">2. Use a Clear, Quantitative Prioritization Framework — and Make GTM Part of It</h3>

        <p className="mb-6">
          When priorities feel subjective, every "urgent" deal becomes a debate. The solution: create a transparent prioritization framework that everyone — including GTM — understands and contributes to.
        </p>

        <p className="mb-6">
          It can be RICE, Value vs. Effort, ROI or a custom scoring model. The important thing is that it's quantitative, repeatable, and co-owned by cross-functional teams.
        </p>

        <p className="mb-6">
          When new opportunities come in, GTM leaders should already know the trade-offs — that adding one initiative means something else must drop. This shared language of prioritization removes emotion from the process and builds alignment across teams.
        </p>

        <p className="font-semibold mb-8">
          A great framework doesn't remove tough choices. It makes them visible.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">3. Communicate the Long-Term Vision and the "Why" Behind It</h3>

        <p className="mb-6">
          Your teams — and even your customers — need to understand not just what you're building, but why.
        </p>

        <p className="mb-4">
          Regularly communicate your long-term product narrative:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>What problem are you ultimately solving?</li>
          <li>What does success look like in 2–3 years?</li>
          <li>Why is it critical to invest in this now?</li>
        </ul>

        <p className="mb-6">
          When people understand the "why," short-term sacrifices make sense. Your GTM team can better position your roadmap decisions to customers. Your engineers stay motivated through the tough trade-offs. And leadership discussions shift from "Why aren't we building this?" to "How does this fit with our mission?"
        </p>

        <p className="font-semibold mb-8">
          Vision creates alignment. Communication sustains it.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">4. Time-Box Short-Term Initiatives to Limit Trade-Off Cost</h3>

        <p className="mb-6">
          Sometimes, you do need to chase short-term revenue — and that's okay. But treat these as controlled experiments, not open-ended commitments.
        </p>

        <p className="mb-6">
          Time-box them aggressively: set clear development boundaries, define a maximum effort (e.g., 2–4 weeks), and be explicit about what "done" looks like.
        </p>

        <p className="mb-6">
          This approach reduces opportunity cost and prevents months of deviation from your core roadmap. It also keeps your team flexible enough to respond to future, potentially more strategic opportunities that may emerge in parallel.
        </p>

        <p className="font-semibold mb-8">
          Every short-term project should have an expiry date — otherwise, it becomes your roadmap.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Bringing It All Together</h2>

        <p className="mb-6">
          Balancing short-term revenue opportunities and long-term product vision isn't a one-time decision — it's an ongoing discipline.
        </p>

        <p className="mb-4">
          You'll never have perfect alignment, and that's okay. The goal isn't to eliminate tension but to manage it intentionally. That means:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Staying close to your customers (for both what they say and what they mean).</li>
          <li>Building transparent frameworks so everyone understands trade-offs.</li>
          <li>Constantly reinforcing the vision so your teams don't lose sight of the "why."</li>
          <li>Containing short-term work so it doesn't consume your roadmap.</li>
        </ul>

        <p className="text-lg font-medium mt-12">
          In uncertain markets, clarity of purpose is your greatest advantage. The companies that can keep both the short-term engine running and the long-term vision alive will be the ones still standing — and thriving — when the next wave of disruption comes.
        </p>
      </div>
    </article>
  );
};

export default BlogPostDetail;
