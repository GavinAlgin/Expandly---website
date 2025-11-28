import bgImg from '../assets/ImageCTA.png';

const CTASection = () => {
  return (
    <div className="font-Lato">      
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        {/* Move the image first */}
        <img
          alt="Development Illustration"
          src={bgImg}
          className="h-56 w-full object-cover sm:h-full"
        />

        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold md:text-3xl">
              Smart Marketing Strategies Designed for<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08201D] to-white font-semibold">Success growth</span>
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Optimize your online presence with data-driven marketing strategies.From SEO to targeted ad campaigns, we help you reach and convert your ideal audience.
            </p>

            <div className="mt-4 md:mt-8">
              <a href="#" className="inline-block rounded-md bg-lime-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-lime-600 focus:ring-3 focus:ring-green-400 focus:outline-hidden">
                Let's Go
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
