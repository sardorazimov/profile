import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/Card"


const products = [
  { id: 1, name: "Classic T-Shirt", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Denim Jeans", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Leather Jacket", price: 199.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Running Shoes", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Sunglasses", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Wristwatch", price: 149.99, image: "/placeholder.svg?height=200&width=200" },
]
const Hero = () => {
  return (
    <div className="border-t w-full h-screen border-neutral-700  inset-7">
       <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Hero
