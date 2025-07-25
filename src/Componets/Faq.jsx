import React from 'react';
import faqImage from'../assets/banner/banner6.jpg'
const Faq = () => {
    return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl text-primary">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        <div className="flex-1 space-y-4">
          {[
           
            {
              question: 'How can I book a tour guide on TourMates?',
              answer:
                'Simply sign in as a tourist, browse available tour guides by location or expertise, and click the "Book Now" button to make your reservation.',
            },
            {
              question: 'Is it safe to travel with tour guides from this platform?',
              answer:
                'Yes! All our tour guides are verified and reviewed. You can also check user ratings and past experiences before booking.',
            },
            {
              question: 'Can I cancel or reschedule a booking?',
              answer:
                'Absolutely! Go to your dashboard, find the booking under “My Tours,” and you’ll see options to cancel or reschedule depending on guide availability.',
            },
            {
              question: 'How can I become a registered tour guide on TourMates?',
              answer:
                'You can register as a guide by creating an account and selecting “Tour Guide” as your role. Then fill out your profile and verification info to get started.',
            },
            {
              question: 'Does TourMates support online payments for bookings?',
              answer:
                'Yes, TourMates supports secure online payments through Stripe, making your booking fast and hassle-free.',
            },
            {
              question: 'What should I do if I face any issue during my trip?',
              answer:
                'You can contact our 24/7 support team directly from your dashboard. We’re always here to ensure your journey is smooth and safe.',
            },
             {
              question: 'Can this platform help me prepare for real-world projects?',
              answer:
                'Yes! This system is built using the full MERN stack, which is widely used in real-world applications. It gives you hands-on experience with authentication, CRUD operations, protected routes, and more.',
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-100 border border-base-300"
            >
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked={index === 0}
              />
              <div className="collapse-title font-semibold text-xl text-[#f000b8]">
                {faq.question}
              </div>
              <div className="collapse-content text-lg font-normal text-info tracking-wide">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div className="flex-1 hidden md:block">
          <img
            src={faqImage}
            alt="FAQ Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;