import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import MoreAboutMeSection from "@/components/MoreAboutMeSection";
import Footer from "@/components/Footer";

const MoreAboutMe = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>More About Me - Cristian Tumani | Product Lead & International Experience</title>
        <meta name="description" content="Learn more about Cristian Tumani's journey as a Product Lead across Chile, Amsterdam, and Barcelona. International experience, expat life, and product leadership insights." />
        <meta property="og:title" content="More About Me - Cristian Tumani" />
        <meta property="og:description" content="Learn more about Cristian Tumani's journey as a Product Lead across Chile, Amsterdam, and Barcelona." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cristiantumanipq.com/more-about-me" />
        <meta name="twitter:title" content="More About Me - Cristian Tumani" />
        <meta name="twitter:description" content="Learn more about Cristian Tumani's journey as a Product Lead across Chile, Amsterdam, and Barcelona." />
        <link rel="canonical" href="https://www.cristiantumanipq.com/more-about-me" />
      </Helmet>
      <Navigation />
      <MoreAboutMeSection />
      <Footer />
    </div>
  );
};

export default MoreAboutMe;
