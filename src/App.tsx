import { Phone, Wrench, Zap, Home, Lightbulb, Fan, Wind, Droplet, Settings, CheckCircle, Award, Clock, DollarSign, Heart, MapPin, Mail, MessageCircle } from 'lucide-react';

function App() {
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
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-red-600">
                Sunitha Electrical & Winding Works
              </h1>
              <p className="text-sm md:text-base text-gray-700 mt-1">
                Your Trusted Electrical Repair and Service Partner
              </p>
            </div>
            <a
              href="tel:8247387557"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <Home className="w-12 h-12 mx-auto text-blue-600 mb-2" />
              <p className="text-sm font-medium">House Wiring</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <Settings className="w-12 h-12 mx-auto text-red-600 mb-2" />
              <p className="text-sm font-medium">Motor Winding</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <Lightbulb className="w-12 h-12 mx-auto text-yellow-600 mb-2" />
              <p className="text-sm font-medium">Profile Lighting</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <Zap className="w-12 h-12 mx-auto text-blue-600 mb-2" />
              <p className="text-sm font-medium">False Ceiling</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <Fan className="w-12 h-12 mx-auto text-gray-700 mb-2" />
              <p className="text-sm font-medium">Mixer Repair</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <Wind className="w-12 h-12 mx-auto text-cyan-600 mb-2" />
              <p className="text-sm font-medium">Cooler Service</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <Droplet className="w-12 h-12 mx-auto text-orange-600 mb-2" />
              <p className="text-sm font-medium">Geyser Repair</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <Wrench className="w-12 h-12 mx-auto text-red-600 mb-2" />
              <p className="text-sm font-medium">Motor Repair</p>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            House Wiring Projects
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Professional wiring installations and setups
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wiringGallery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <Home className="w-24 h-24 text-blue-600 opacity-50" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 text-center">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winding Works Gallery */}
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
                <p className="text-right font-semibold text-gray-900">
                  - Hemanth (Chintu), Owner
                </p>
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

          {/* Map Placeholder */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <p className="text-gray-400">Google Maps Location</p>
                <p className="text-sm text-gray-500 mt-2">Map integration available</p>
              </div>
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
