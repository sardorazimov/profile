import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/Card"
import Link from "next/link"


const page = () => {
  return (
    <section className="">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0">
         <Avatar className="w-24 h-24 md:w-32 md:h-32">
            <AvatarImage src="/logo.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar> 
        </div>
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold">Azimov</h1>
            <p className="text-muted-foreground">Software Engineer | Avid Traveler</p>
          </div>
          <p className="text-sm md:text-base">
            John is a passionate software engineer with a love for exploring new places. He's always eager to learn and
            share his knowledge with the community.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-white/10 cursor-pointer hover:bg-white/10 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold">1,234</div>
          <div className="text-sm text-muted-foreground">Followers</div>
        </div>
        <div className="border border-white/10 cursor-pointer hover:bg-white/10 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold">567</div>
          <div className="text-sm text-muted-foreground">Following</div>
        </div>
        <div className="border border-white/10 cursor-pointer hover:bg-white/10 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold">89</div>
          <div className="text-sm text-muted-foreground">Posts</div>
        </div>
      </div>
    </div>
    <main className="flex-1 py-8 px-6">
     <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="bg-background shadow-md rounded-lg border-white/15  overflow-hidden h-96 ">
              <img
                src="/img/coming-soon.png"
                alt="Book Cover"
                width={300}
                height={200}
                className="w-full h-[200px] object-cover"
                // style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">The Great Gatsby</h3>
                <p className="text-muted-foreground mb-4">F. Scott Fitzgerald</p>
                <Button className="w-full">Borrow</Button>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-md rounded-lg border-white/15 h-96 overflow-hidden">
              <img
                src="/img/coming-soon.png"
                alt="Book Cover"
                width={300}
                height={200}
                className="w-full h-[200px] object-cover"
                // style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">To Kill a Mockingbird</h3>
                <p className="text-muted-foreground mb-4">Harper Lee</p>
                <Button className="w-full">Borrow</Button>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-md rounded-lg border-white/15 h-96 overflow-hidden">
              <img
                src="/img/coming-soon.png"
                alt="Book Cover"
                width={300}
                height={200}
                className="w-full h-[200px] object-cover"
                // style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">1984</h3>
                <p className="text-muted-foreground mb-4">George Orwell</p>
                <Button className="w-full">Borrow</Button>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-md rounded-lg border-white/15 h-96 overflow-hidden">
              <img
                src="/img/coming-soon.png"
                alt="Book Cover"
                width={300}
                height={200}
                className="w-full h-[200px] object-cover"
                // style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">The Catcher in the Rye</h3>
                <p className="text-muted-foreground mb-4">J.D. Salinger</p>
                <Button className="w-full">Borrow</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Book Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link
              href="#"
              className="bg-white/10 text-muted-foreground py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              Fiction
            </Link>
            <Link
              href="#"
              className="bg-white/10 text-muted-foreground py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              Non-Fiction
            </Link>
            <Link
              href="#"
              className="bg-white/10 text-muted-foreground py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              Biography
            </Link>
            <Link
              href="#"
              className="bg-white/10 text-muted-foreground py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              History
            </Link>
            <Link
              href="#"
              className="bg-white/10 text-muted-foreground py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              Science
            </Link>
            <Link
              href="#"
              className="bg-white/10 text-muted-foreground py-3 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              Romance
            </Link>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Recommended Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="bg-background shadow-md rounded-lg border-white/15 h-96 overflow-hidden">
              <img
                src="/img/coming-soon.png"
                alt="Book Cover"
                width={300}
                height={200}
                className="w-full h-[200px] object-cover"
                // style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">The Kite Runner</h3>
                <p className="text-muted-foreground mb-4">Khaled Hosseini</p>
                <Button className="w-full">Borrow</Button>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-md rounded-lg border-white/15 h-96 overflow-hidden">
              <img
                src="/img/coming-soon.png"
                alt="Book Cover"
                width={300}
                height={400}
                className="w-full h-[200px] object-cover"
                // style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">The Alchemist</h3>
                <p className="text-muted-foreground mb-4">Paulo Coelho</p>
                <Button className="w-full">Borrow</Button>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-md rounded-lg border-white/15 h-96 overflow-hidden">
              <img
                src="/img/coming-soon.png"
                alt="Book Cover"
                width={300}
                height={400}
                className="w-full h-[200px] object-cover"
                // style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">The Fault in Our Stars</h3>
                <p className="text-muted-foreground mb-4">John Green</p>
                <Button className="w-full">Borrow</Button>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-md rounded-lg border-white/15 h-96 overflow-hidden">
              <img
                src="/img/coming-soon.png"
                alt="Book Cover"
                width={300}
                height={200}
                className="w-full h-[200px] object-cover"
                // style={{ aspectRatio: "300/400", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">The Book Thief</h3>
                <p className="text-muted-foreground mb-4">Markus Zusak</p>
                <Button className="w-full">Borrow</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </section>
  )
}

export default page
