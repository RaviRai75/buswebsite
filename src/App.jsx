import { useState, useEffect } from 'react';
import './index.css';
import { 
  Search, 
  Phone, 
  RefreshCw, 
  Shield, 
  MapPin, 
  Star, 
  Download, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Menu,
  X,
  ArrowRight,
  Clock,
  Users,
  Bus,
  Sparkles,
  Award,
  Zap
} from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    date: ''
  });

  // Hero background images
  const heroImages = [
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ];

  // Popular routes data
  const popularRoutes = [
    {
      id: 1,
      from: 'Delhi',
      to: 'Manali',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      fare: '₹1,200',
      duration: '12 hrs',
      discount: '15% OFF'
    },
    {
      id: 2,
      from: 'Mumbai',
      to: 'Goa',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      fare: '₹800',
      duration: '8 hrs',
      discount: '20% OFF'
    },
    {
      id: 3,
      from: 'Bangalore',
      to: 'Chennai',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      fare: '₹600',
      duration: '6 hrs',
      discount: '10% OFF'
    },
    {
      id: 4,
      from: 'Kolkata',
      to: 'Darjeeling',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      fare: '₹900',
      duration: '10 hrs',
      discount: '25% OFF'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Amazing experience! The bus was clean, comfortable, and the journey was smooth. Highly recommend!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      location: 'Delhi'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      rating: 5,
      comment: 'Best bus booking platform I\'ve used. Easy booking process and great customer support.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      location: 'Mumbai'
    },
    {
      id: 3,
      name: 'Anjali Patel',
      rating: 4,
      comment: 'Very convenient and reliable service. The live tracking feature is really helpful.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      location: 'Bangalore'
    }
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Create particles
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 10 + 10 + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      
      const particlesContainer = document.querySelector('.particles');
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 15000);
      }
    };

    const particleInterval = setInterval(createParticle, 300);
    return () => clearInterval(particleInterval);
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search form submitted:', searchForm);
  };

  const handleInputChange = (e) => {
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 pulse-glow">
                <Bus className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">YesGoBus</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#routes" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Routes</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#routes" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Routes</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Particles */}
        <div className="particles"></div>
        
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400 mx-auto mb-4 floating-animation" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Book Your Journey with 
            <span className="block gradient-text"> Comfort & Ease!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up text-blue-100">
            Fast, Safe, and Affordable Bus Travel Across India
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="glass-effect rounded-3xl p-8 md:p-10 shadow-2xl animate-slide-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="from"
                  placeholder="From"
                  value={searchForm.from}
                  onChange={handleInputChange}
                  className="input-field pl-12"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="to"
                  placeholder="To"
                  value={searchForm.to}
                  onChange={handleInputChange}
                  className="input-field pl-12"
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  name="date"
                  value={searchForm.date}
                  onChange={handleInputChange}
                  className="input-field pl-12"
                />
              </div>
              <button type="submit" className="btn-primary flex items-center justify-center text-lg">
                <Search className="h-5 w-5 mr-2" />
                Search Buses
              </button>
            </div>
          </form>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Routes</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">YesGoBus?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the best bus booking experience with premium features and excellent service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center group slide-in-left">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Customer Support</h3>
              <p className="text-gray-600">Round the clock assistance for all your travel needs</p>
            </div>

            <div className="card p-8 text-center group slide-in-left" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <RefreshCw className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Refunds</h3>
              <p className="text-gray-600">Quick and hassle-free refund process</p>
            </div>

            <div className="card p-8 text-center group slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Bus Operators</h3>
              <p className="text-gray-600">All our partners are thoroughly verified and trusted</p>
            </div>

            <div className="card p-8 text-center group slide-in-right" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Bus Tracking</h3>
              <p className="text-gray-600">Real-time tracking of your bus location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section id="routes" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular <span className="gradient-text">Routes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most popular bus routes with competitive prices and exclusive discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularRoutes.map((route, index) => (
              <div key={route.id} className="card overflow-hidden group fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {route.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {route.from} → {route.to}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold gradient-text">{route.fare}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{route.duration}</span>
                  </div>
                  <button className="w-full btn-secondary">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
<section id="about" className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Story
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        The inspiring journey behind YesGoBus and how it started changing bus travel in India.
      </p>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://plus.unsplash.com/premium_photo-1661963542752-9a8a1d72fb28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8fDB8fHww"
          alt="Our Journey"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Story Content */}
      <div className="w-full md:w-1/2 text-gray-700">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">How YesGoBus Began</h3>
        <p className="mb-4">
          Back in 2023, a group of passionate travelers faced a frustrating situation—
          they missed an important bus due to lack of real-time information and poor booking systems.
          That moment sparked an idea to revolutionize bus travel in India.
        </p>
        <p className="mb-4">
          After months of brainstorming, coding, and connecting with travel operators, <strong>YesGoBus</strong> was born.
          It was built on a simple mission: to make bus travel more transparent, accessible, and comfortable.
        </p>
        <p>
          Today, YesGoBus connects thousands of passengers with verified buses across India.
          We’re proud to make travel smoother, safer, and smarter every day.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="gradient-text">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from our satisfied customers across India
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <div className="card p-10 text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 ring-4 ring-blue-100"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4 floating-animation" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Download Our Mobile App
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Get the best bus booking experience on your mobile device with our feature-rich app
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="flex items-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <Download className="h-8 w-8 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </button>
            
            <button className="flex items-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <Download className="h-8 w-8 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <Bus className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">YesGoBus</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for comfortable and affordable bus travel across India.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#routes" className="text-gray-400 hover:text-white transition-colors">Routes</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Email: support@yesgobus.com</li>
                <li>Phone: +91 1800-123-4567</li>
                <li>Address: Mumbai, Maharashtra</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 YesGoBus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App; 