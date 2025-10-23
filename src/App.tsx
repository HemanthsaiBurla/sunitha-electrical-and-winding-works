import { useState, useEffect } from 'react';
import { Phone, Wrench, Zap, Home, Lightbulb, Fan, Wind, Droplet, Settings, CheckCircle, Award, Clock, DollarSign, Heart, MapPin, MessageCircle } from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show popup on page load
    setShowModal(true);
  }, []);

  const whatsappBase = "https://wa.me/918247387557";
  const premiumMsg = "?text=Hi%20Sunitha%20Electrical%2C%20I%20want%20to%20book%20a%20Premium%20Appointment.%20Please%20share%20available%20slots%20and%20charges.";
  const normalMsg = "?text=Hi%20Sunitha%20Electrical%2C%20I%20want%20to%20book%20a%20Normal%20Appointment.%20Please%20confirm%20available%20time.";
  const chatMsg = "?text=Hi%20Sunitha%20Electrical%2C%20I%20have%20a%20question%20about%20your%20services.";

  const services = [
    { icon: <Settings className="w-8 h-8" />, title: "Motor Winding & Repair", desc: "Expert motor rewinding and repair services" },
    { icon: <Home className="w-8 h-8" />, title: "House Wiring", desc: "Complete residential electrical wiring solutions" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Profile Lighting", desc: "Modern LED and profile lighting installation" },
    { icon: <Zap className="w-8 h-8" />, title: "False Ceiling Setup", desc: "Professional false ceiling with lighting" },
    { icon: <Fan className="w-8 h-8" />, title: "Mixer & Fan Repairs", desc: "Quick repair services for home appliances" },
    { icon: <Wind className="w-8 h-8" />, title: "Cooler Services", desc: "Installation and repair of air coolers" },
    { icon: <Droplet className="w-8 h-8" />, title: "Geyser Repair", desc: "Fast geyser installation and repair" },
    { icon: <Wrench className="w-8 h-8" />, title: "Appliance Servicing", desc: "All electrical appliance servicing" }
  ];

  const whyChooseUs = [
    { icon: <Clock className="w-6 h-6" />, title: "Fast Service", desc: "Quick response and timely completion" },
    { icon: <Award className="w-6 h-6" />, title: "Quality Parts", desc: "Genuine parts and materials used" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Experienced Team", desc: "Skilled and certified technicians" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Affordable Prices", desc: "Competitive and transparent pricing" },
    { icon: <Heart className="w-6 h-6" />, title: "Customer Satisfaction", desc: "100% satisfaction guaranteed" }
  ];

  const wiringGallery = [
    { id: 1, alt: "House Wiring Project 1" },
    { id: 2, alt: "House Wiring Project 2" },
    { id: 3, alt: "House Wiring Project 3" },
    { id: 4, alt: "House Wiring Project 4" }
  ];

  const windingGallery = [
    { id: 1, alt: "Motor Winding Work 1" },
    { id: 2, alt: "Motor Winding Work 2" },
    { id: 3, alt: "Motor Winding Work 3" },
    { id: 4, alt: "Motor Winding Work 4" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Under Development Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-auto text-center shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              🚧 Website Under Development
            </h2>
            <p className="text-gray-700 mb-6">
              Hi there! This website is still being developed. Some features may not be available yet.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative shadow-md sticky top-0 z-50 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/186990563/photo/electrical-spark-between-two-insulated-copper-wires.jpg?s=612x612&w=0&k=20&c=Rz2YDh7ohXt9LZ7ZamvjOI3svLRR30p8DwT8_sS9O5g=')",
            filter: "blur(0.5px)",
            transform: "scale(1.05)",
          }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative container mx-auto px-4 py-8 text-center text-white">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-3xl font-bold text-black-400 drop-shadow-[0_0_10px_rgba(255,700,0,0.9)]">
                Sunitha Electrical & Winding Works
              </h1>
              <p className="text-2xl md:text-base text-black-100 mt-2">
                Your Trusted Electrical Repair and Service Partner
              </p>
            </div>

            <a
              href="tel:8247387557"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">8247387557</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Electrical Services
            </h2>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
              From motor winding to house wiring, we provide complete electrical solutions for your home and business
            </p>
          </div>

          {/* Service Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-md h-60">
              <img
                src="https://raw.githubusercontent.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/refs/heads/main/Website_Images/House_wiring.jpg"
                alt="House Wiring"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full px-4 py-3 flex items-center gap-2">
                <Home className="w-8 h-8 text-blue-400" />
                <p className="text-white font-semibold">House Wiring</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60">
              <img
                src="https://raw.githubusercontent.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/refs/heads/main/Website_Images/motor%20winding.jpg"
                alt="Motor Winding"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full px-4 py-3 flex items-center gap-2">
                <Settings className="w-8 h-8 text-red-400" />
                <p className="text-white font-semibold">Motor Winding</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60">
              <img
                src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/profile_lighting.jpg?raw=true"
                alt="Profile Lighting"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full px-4 py-3 flex items-center gap-2">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                <p className="text-white font-semibold">Profile Lighting</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60">
              <img
                src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/False%20Ceiling.jpg?raw=true"
                alt="False Ceiling"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full px-4 py-3 flex items-center gap-2">
                <Zap className="w-8 h-8 text-blue-400" />
                <p className="text-white font-semibold">False Ceiling</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60">
              <img
                src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/fan%20winding%20machine.jpg?raw=true"
                alt="Fan Winding & Mixer Repair"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full px-4 py-3 flex items-center gap-2">
                <Fan className="w-8 h-8 text-gray-400" />
                <p className="text-white font-semibold">Fan Winding & Mixer Repair</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60">
              <img
                src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/cooler.jpg?raw=true"
                alt="Cooler Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full px-4 py-3 flex items-center gap-2">
                <Wind className="w-8 h-8 text-cyan-400" />
                <p className="text-white font-semibold">Cooler Service</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60">
              <img
                src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/Geyser-service-1.jpg?raw=true"
                alt="Geyser Repair"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full px-4 py-3 flex items-center gap-2">
                <Droplet className="w-8 h-8 text-orange-400" />
                <p className="text-white font-semibold">Geyser Repair</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md h-60">
              <img
                src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/Motor_repair.jpg?raw=true"
                alt="Motor Repair"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full px-4 py-3 flex items-center gap-2">
                <Wrench className="w-8 h-8 text-red-400" />
                <p className="text-white font-semibold">Motor Repair</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
            <a
              href={whatsappBase + premiumMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-center shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book Premium Appointment
            </a>
            <a
              href={whatsappBase + normalMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-center shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book Normal Appointment
            </a>
            <a
              href={whatsappBase + chatMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-center shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>







      {/* Shop Image Section */}
      <section className="py-20 bg-gradient-to-r from-red-300 via-violet to-blue-300">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Our Shop
    </h2>
    <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
      Visit our store for all types of electrical repairs, winding works, and household services. 
      We provide professional quality with a personal touch.
    </p>

    {/* Shop Image Card */}
    <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
      <img
        src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/SHOP1.jpg?raw=true"
        alt="Sunitha Electrical & Winding Works Shop"
        className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
      />
      <div className="bg-blue-600 text-white py-3">
        <p className="font-semibold tracking-wide">
          Sunitha Electrical & Winding Works
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive electrical solutions for all your residential and commercial needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House Wiring Gallery */}
      {/* House Wiring Gallery */}
      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
      House Wiring Projects
    </h2>
    <p className="text-center text-gray-600 mb-12">
      Professional wiring installations and setups
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Image 1 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img
          src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/HW1.jpg?raw=true"
          alt="House wiring project 1"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-700 text-center">
            Residential wiring setup
          </p>
        </div>
      </div>

      {/* Image 2 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img
          src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/HW2.jpg?raw=true"
          alt="House wiring project 2"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-700 text-center">
            Switchboard wiring layout
          </p>
        </div>
      </div>

      {/* Image 3 */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img
          src="https://github.com/HemanthsaiBurla/sunitha-electrical-and-winding-works/blob/main/Website_Images/HW3.jpg?raw=true"
          alt="House wiring project 3"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-700 text-center">
            Ceiling wiring installation
          </p>
        </div>
      </div>

      
      
    </div>
  </div>
</section>



      {/* Winding Works Gallery
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Motor Winding Works
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Expert motor rewinding and repair services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {windingGallery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                  <Settings className="w-24 h-24 text-red-600 opacity-50" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 text-center">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       */}

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Your satisfaction is our priority
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              About Us
            </h2>
            <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-xl p-8 shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Welcome to <span className="font-bold text-red-600">Sunitha Electrical & Winding Works</span>, your one-stop solution for all electrical repair, installation, and sales services. With years of trusted experience in the industry, we specialize in motor winding, house wiring, appliance repairs, and modern lighting solutions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our commitment to quality workmanship, genuine parts, and customer satisfaction has made us a trusted name in the community. Whether it's a small repair or a complete electrical installation, we handle every project with the utmost care and professionalism.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-gray-800 italic mb-2">
                  "At Sunitha Electrical, we don't just fix problems – we build lasting relationships with our customers through honest service and quality work."
                </p>
                <div className="text-right font-semibold text-gray-900">
                  <p>- Hemanth sai, B.Tech (Owner)</p>
                  <p>- Ex Java Full Stack Developer, Electrician</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                <Phone className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <a href="tel:8247387557" className="text-yellow-300 hover:text-yellow-200 text-lg">
                8247387557
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
              <a
                href={whatsappBase + chatMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:text-green-200 text-lg"
              >
                Chat with us
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-gray-300">
                Visit us for quality service
              </p>
            </div>
          </div>

          {/* Map Placeholder / Dummy Location */}
<div className="mt-12 max-w-4xl mx-auto">
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl h-64">
    {/* Dummy Google Map Embed */}
    <iframe
      title="Sunitha Electrical & Winding Works Location"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d237.14439455191453!2d79.53324106653102!3d18.010796836979864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAwJzM4LjgiTiA3OcKwMzEnNTkuOSJF!5e0!3m2!1sen!2sin!4v1761189126288!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Caption */}
  <div className="text-center mt-4">
    <p className="text-gray-700 font-semibold">
      Sunitha Electrical & Winding Works — Hanamkonda
    </p>
    <p className="text-gray-500 text-sm">
      Jawahar colony, opposite to road no 1, beside kiranam, waddepally, Hanamkonda
    </p>
  </div>
</div>



        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; 2025 Sunitha Electrical & Winding Works | All Rights Reserved
          </p>
          <p className="text-sm">
            Owned by Hemanth | Professional Electrical Services
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappBase + chatMsg}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;