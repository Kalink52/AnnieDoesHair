import Image from "next/image";

export default function About() {
  return (
    
    <div className="min-h-screen bg-gray-50 bg-repeat">      
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
      
    <div className="max-w-5xl mx-auto p-8 space-y-16">

      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">About Barb the Barber</h1>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-[500px] relative rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/about/Annie.jpg"
            alt="Barb smiling with scissors in hand"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div>
          <p className="text-lg leading-relaxed text-gray-700">
            Hi there! I&apos;m Barb — or as my friends (and now, pretty much everyone) call me, Barb the Barber. 
            Funny enough, I&apos;m actually a full-fledged hairdresser, but hey, the nickname stuck! 
            With over a decade of experience making hair dreams come true, I blend creativity, skill, and a little bit of laughter into every appointment. 
            Whether you’re after a bold new look or just a fresh trim, I’m here to make it happen — scissors, comb, and bad puns always at the ready.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-8 items-center md:order-none order-last">
        <div className="w-full h-[500px] relative rounded-3xl overflow-hidden shadow-lg md:order-2">
          <Image
            src="/about/AnnieAndDaughter.jpg"
            alt="Barb working on a client’s hairstyle"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="md:order-1">
          <p className="text-lg leading-relaxed text-gray-700">
            I specialize in precision cuts, vibrant color transformations, and creating styles that match your unique vibe. 
            From classic styles to the latest trends, my chair is a judgment-free zone where you can relax and leave feeling like your best self. 
            Plus, if you ever wanted to hear a truly terrible barber joke mid-appointment... well, you&apos;ve definitely come to the right place!
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-[500px] relative rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/about/AnnieAndCaleb.jpg"
            alt="Inside Barb&apos;s cozy salon"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div>
          <p className="text-lg leading-relaxed text-gray-700">
            My cozy little salon is a place where creativity and good vibes meet. 
            Whether you&apos;re popping in for a quick cleanup or staying for a full hair makeover, you’ll find a welcoming seat, a warm cup of coffee, and yes — a few more puns. 
            Book an appointment today and experience the magic of Barb the Barber... who just happens to be a hairdresser. ✂️✨
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
