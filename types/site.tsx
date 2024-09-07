
"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
  const products = [
    {
      id: 1,
      name: "Powder Hound Snowboard",
      description: "Carve through the deepest powder with ease",
      price: 599.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "All-Mountain",
      color: "blue",
    },
    {
      id: 2,
      name: "Freestyle Flyer Snowboard",
      description: "Shred the park with style",
      price: 499.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Park",
      color: "red",
    },
    {
      id: 3,
      name: "Backcountry Blaster Snowboard",
      description: "Conquer the untamed terrain",
      price: 699.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Backcountry",
      color: "green",
    },
    {
      id: 4,
      name: "Carving Champ Snowboard",
      description: "Precision control on the groomers",
      price: 549.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "All-Mountain",
      color: "black",
    },
  ]
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedColor, setSelectedColor] = useState([])
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false
      }
      if (selectedColor.length > 0 && !selectedColor.includes(product.color)) {
        return false
      }
      return true
    })
  }, [selectedCategory, selectedColor])
  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Conquer the Slopes with Our Premium Snowboards
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md">
              Discover the perfect snowboard to elevate your winter adventures. Our collection features top-of-the-line
              designs for all skill levels and terrain.
            </p>
            <Button className="mt-6">Shop Now</Button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/placeholder.svg"
              alt="Snowboard"
              width="500"
              height="500"
              className="mx-auto"
              style={{ aspectRatio: "500/500", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Featured Snowboards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-background rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-semibold">${product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 py-12 md:py-24">
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="category" className="mb-2">
                Category
              </Label>
              <Select id="category" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="All-Mountain">All-Mountain</SelectItem>
                  <SelectItem value="Park">Park</SelectItem>
                  <SelectItem value="Backcountry">Backcountry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="color" className="mb-2">
                Color
              </Label>
              <div className="grid grid-cols-3 gap-2">
                <Label htmlFor="color-blue" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    id="color-blue"
                    checked={selectedColor.includes("blue")}
                    onCheckedChange={() =>
                      setSelectedColor((prev) =>
                        prev.includes("blue") ? prev.filter((c) => c !== "blue") : [...prev, "blue"],
                      )
                    }
                  />
                  <div className="w-6 h-6 bg-blue-500 rounded-full" />
                </Label>
                <Label htmlFor="color-red" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    id="color-red"
                    checked={selectedColor.includes("red")}
                    onCheckedChange={() =>
                      setSelectedColor((prev) =>
                        prev.includes("red") ? prev.filter((c) => c !== "red") : [...prev, "red"],
                      )
                    }
                  />
                  <div className="w-6 h-6 bg-red-500 rounded-full" />
                </Label>
                <Label htmlFor="color-green" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    id="color-green"
                    checked={selectedColor.includes("green")}
                    onCheckedChange={() =>
                      setSelectedColor((prev) =>
                        prev.includes("green") ? prev.filter((c) => c !== "green") : [...prev, "green"],
                      )
                    }
                  />
                  <div className="w-6 h-6 bg-green-500 rounded-full" />
                </Label>
                <Label htmlFor="color-black" className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    id="color-black"
                    checked={selectedColor.includes("black")}
                    onCheckedChange={() =>
                      setSelectedColor((prev) =>
                        prev.includes("black") ? prev.filter((c) => c !== "black") : [...prev, "black"],
                      )
                    }
                  />
                  <div className="w-6 h-6 bg-black rounded-full" />
                </Label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Explore Our Snowboard Collection</h3>
            <p className="text-muted-foreground">
              Browse our selection of top-quality snowboards for all your winter adventures.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-background rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-semibold">${product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}