import Navbar from '../components/Navbar';

const ServicesPage = () => {
  return (
    <div className="text-white px-4 py-8 sm:px-6 lg:px-12 max-w-4xl mx-auto">
        <Navbar />

        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">Techloom Services</h1>

        <p className="mb-6 text-center">
            This Privacy Policy governs how we collect, store, manage, and protect your information. Please read it carefully.
        </p>

        <ol className="space-y-6 list-decimal list-inside text-white">
            <li>
            Speed & Performance as a Core Offering Not just “we make it fast” but measured, guaranteed, audited. <br />
            We offer clients performance / Core Web Vitals audits, benchmarks, ongoing monitoring, improvement plans. Clients often neglect this but it has big ROI: lower bounce, better SEO, happier users.
            </li>

            <li>
              Localisation & Cultural Adaptation <br/>
              Use local languages, local imagery, user behaviour from local time zones, culture, idioms. Something many global or generic agencies miss. That builds trust, relevance.
            </li>

            <li>
              AI‑Enabled Services <br />
              We Offer AI as part of your deliverables: e.g. chatbots, smart suggestions / content personalization, predictive UX, maybe AI‑assisted testing or error detection.
            </li>

            <li>
              Modular / Scalable Architecture <br />
              Build internal component libraries, UI systems, reusable templates. Adopt headless CMS / composable front‑end / API driven back ends so future changes (platforms, UX, scale) are easier. This lowers your maintenance overhead, allows you to scale up or down.
            </li>

            <li>
              Transparency & Communication <br />
              Many agencies drop the ball here. Strong clarity in pricing, scope, timeline; regular updates; perhaps client dashboards; early prototyping; early user testing. This builds trust and reduces friction.
            </li>

            <li>
              Full Lifecycle Services / After Launch Support <br />
              Often agencies build something then leave. Offer maintenance, updates, monitoring, UX optimization, analytics, iterating on the users’ feedback. Can be recurring revenue.
            </li>

            <li>
              Niche Specialisation <br />
              Rather than trying to do everything, pick certain industries (e.g. health, fintech, NGOs, education), or particular technical stacks (React Native, Flutter, headless CMS etc.). Become known as the go‑to in that niche.
            </li>

            <li>
              Ethical / Accessible / Sustainable Design <br />
              Accessibility (for people with disabilities), sustainable / green coding & hosting, privacy by design: these can be strong differentiators. Promoting them in your brand adds appeal, especially to clients who care about these.
            </li>

            <li>
              Innovative UX Elements & Motion Design <br />
              Micro‑interactions, scroll‑based storytelling, immersive experience (where appropriate), dark/light mode toggles, motion / hover / animation where subtle. These little touches differentiate, add delight.
            </li>


            <li>
              Offline / Low Connectivity & PWA‑First Experiences <br />
              If much of your target audience deals with intermittent connectivity (rural, mobile data constraints), then ensuring solutions work offline, gracefully degrade, cache well, minimal load etc.
            </li>
        </ol>
    </div>
  );
};

export default ServicesPage;
