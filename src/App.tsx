import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { 
  Leaf, 
  Sparkles, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  Clock,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Signature Facial",
      description: "Rejuvenating facial treatment using organic botanicals and ancient techniques",
      duration: "90 min",
      price: "$180"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Hot Stone Massage",
      description: "Deep relaxation therapy with heated volcanic stones and aromatherapy oils",
      duration: "75 min", 
      price: "$160"
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Zen Garden Meditation",
      description: "Guided meditation session in our tranquil bamboo garden sanctuary",
      duration: "45 min",
      price: "$85"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      text: "The most peaceful experience I've ever had. The attention to detail and serene atmosphere made me feel completely renewed.",
      rating: 5
    },
    {
      name: "Michael Torres", 
      text: "Serenity Spa is my sanctuary. The staff's expertise and the zen environment help me disconnect from the world's chaos.",
      rating: 5
    },
    {
      name: "Emma Williams",
      text: "Every visit feels like a spiritual journey. The treatments are exceptional and the space radiates pure tranquility.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-2xl font-serif text-foreground">Serenity Spa</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="block text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="block text-foreground hover:text-primary transition-colors">About</a>
              <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors">Contact</a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-green-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="float-animation">
            <Leaf className="w-16 h-16 text-primary mx-auto mb-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-tight">
            Find Your
            <span className="block text-primary">Inner Peace</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Escape the chaos of everyday life and discover tranquility in our serene sanctuary of wellness and rejuvenation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Begin Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Treatments for Body & Soul
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each treatment is carefully crafted to restore balance and harmony to your mind, body, and spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="text-2xl font-serif text-primary">{service.price}</div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Book Treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                A Sanctuary of Serenity
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2015, Serenity Spa was born from a vision to create a haven where ancient wellness traditions meet modern luxury. Our philosophy centers on the belief that true beauty radiates from inner peace and balance.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every element of our space has been thoughtfully designed to promote tranquility, from our bamboo gardens to our meditation rooms filled with the gentle sound of flowing water.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Expert Therapists</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-stone-100 to-green-100 rounded-3xl flex items-center justify-center">
                <div className="text-center gentle-pulse">
                  <Leaf className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-lg font-serif text-foreground">Harmony • Balance • Peace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
              Client Reviews
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Words from Our Guests
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what our clients say about their transformative experiences at Serenity Spa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
              Get in Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Begin Your Wellness Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to experience tranquility? Contact us to schedule your personalized spa experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">Visit Our Sanctuary</h3>
                  <p className="text-muted-foreground">
                    123 Zen Garden Lane<br />
                    Peaceful Valley, CA 90210
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground">(555) 123-SERENITY</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground">hello@serenityspa.com</p>
                </div>
              </div>

              <Separator className="my-8" />
              
              <div>
                <h3 className="font-medium text-foreground mb-4">Hours of Tranquility</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-foreground mb-6">Book Your Experience</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred Service</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                      <option>Select a service</option>
                      <option>Signature Facial</option>
                      <option>Hot Stone Massage</option>
                      <option>Zen Garden Meditation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="Tell us about your wellness goals..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-2xl font-serif text-foreground">Serenity Spa</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Where tranquility meets transformation
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Gift Cards</a>
            </div>
            <Separator className="my-6" />
            <p className="text-sm text-muted-foreground">
              © 2024 Serenity Spa. All rights reserved. Crafted with mindfulness and care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;