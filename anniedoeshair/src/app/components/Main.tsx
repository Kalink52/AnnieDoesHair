
import Image from "next/image"

export function Main() {

    return (
        <div className="min-h-screen bg-gray-50 bg-repeat">
          {/* Navbar */}
          <nav className="flex justify-end gap-10 px-8 py-6 bg-white shadow-md sticky top-0 z-50">
            {["Women", "Men", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-semibold tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>
    
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center p-12 gap-16 animate-fadeIn">
            {/* Image */}
            <div className="w-full max-w-lg relative group">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/hair-model.png" // Image in /public
                  alt="Hair Model"
                  width={500}
                  height={600}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
    
            {/* Text Content */}
            <div className="max-w-xl text-center lg:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                Great Hair Doesn&apos;t Happen by Chance
              </h1>
    
              {/* Tagline */}
    
              <div className="w-16 border-t-4 border-pink-500 mx-auto lg:mx-0 my-4"></div>
    
              <p className="text-xl text-gray-600">
                — It Happens by Appointment.
              </p>
    
              <p className="text-md text-gray-500">Call Now</p>
    
              {/* Phone Number */}
              <a
                href="tel:3525523876"
                className="text-4xl md:text-5xl font-bold text-pink-600 tracking-wider hover:text-pink-400 transition-colors"
              >
                352 552 3876
              </a>
    
              {/* Book Now Button */}
              {/* <div>
                <a
                  href="#contact"
                  className="inline-block mt-6 px-10 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-500 hover:scale-105 transition-all duration-300"
                >
                  Book Appointment
                </a>
              </div> */}
            </div>
          </div>
    
          {/* Testimonial */}
          <div className="text-center py-12 text-gray-700">
            <p className="italic text-lg max-w-2xl mx-auto">
              &quot;The best salon experience I&apos;ve ever had. My hair has never looked better!&quot;
            </p>
            <p className="mt-4 font-semibold">— A Happy Client</p>
          </div>
        </div>
      );
    }
  