import { FaHeadset, FaWallet, FaStar } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-accent max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 items-stretch">
        
        {/* Left Column (40% on large screens) */}
        <div className="lg:col-span-1 bg-primary text-black p-10 flex flex-col justify-center shadow-lg text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Why Book With Us?</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            We provide seamless booking, reliable service, and trusted guides 
            to make your journey stress-free and memorable.
          </p>
        </div>

        {/* Right Columns (3 Features) */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3">
          
          {/* Feature 1 */}
          <div className="text-center bg-info text-primary p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center justify-center">
            <FaHeadset className="text-5xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm opacity-80 max-w-xs">
              Our dedicated support team is available round-the-clock.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center bg-info text-primary p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center justify-center">
            <FaWallet className="text-5xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
            <p className="text-sm opacity-80 max-w-xs">
              Enjoy affordable packages with transparent pricing.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center bg-info text-primary p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center justify-center">
            <FaStar className="text-5xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted Guides</h3>
            <p className="text-sm opacity-80 max-w-xs">
              Experienced and verified guides for safe journeys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
