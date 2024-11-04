import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/Card"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sardor Azimov",
    role: "Marketing Manager",
    content: "This product has revolutionized our workflow. Highly recommended!",
    avatar: "/me.jpg"
  },
  {
    id: 2,
    name: "Azimov",
    role: "Software Engineer",
    content: "The customer support is top-notch. They're always there when you need them.",
    avatar: "/me1.jpg"
  },
  {
    id: 3,
    name: "Azimov",
    role: "Freelance Designer",
    content: "I've tried many similar products, but this one stands out for its ease of use.",
    avatar: "/me7.jpg"
  },
  {
    id: 4,
    name: "Sardor",
    role: "Project Manager",
    content: "This tool has significantly improved our team's productivity. A game-changer!",
    avatar: "/me3.jpg"
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col mt-20">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-white/10 hover:bg-white/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                    <p className="text-sm text-gray-100">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className=" mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-200">We are dedicated to providing top-quality products and exceptional customer service.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-100 hover:text-gray-600">Home</a></li>
                <li><a href="#" className="text-sm text-gray-100 hover:text-gray-600">Products</a></li>
                <li><a href="#" className="text-sm text-gray-100 hover:text-gray-600">About</a></li>
                <li><a href="#" className="text-sm text-gray-100 hover:text-gray-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-100">Uzb 40 - Fargona 12003</p>
              <p className="text-sm text-gray-100">Phone: 998 93 103 04 05</p>
              <p className="text-sm text-gray-100">Email: sardorazimov2901@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-100 hover:text-gray-500">
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-100 hover:text-gray-500">
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-100 hover:text-gray-500">
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-100 hover:text-gray-500">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">&copy; 2023 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}