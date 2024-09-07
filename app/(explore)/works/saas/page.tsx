import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
const page = () => {
  return (
    <section className="py-10 ">
      <div className="flex flex-col max-w-screen-xl px-10" >
        <h1 className="text-center font-bold text-7xl drop-shadow-xl shadow-white ">
          Ai Saas Template Web Site Therejs and FramerMotion
        </h1>
        <div>
          <main className="">
            <section className="relative px-20 h-[80vh] w-full overflow-hidden mt-5 border-white/10 border rounded-lg">
              <video autoPlay loop muted playsInline className="h-full w-full object-cover border-none">
                <source src="/next.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[#0f0f0f]/70 flex flex-col items-center justify-center gap-6 px-10 text-center">
                <h1 className="text-4xl font-bold md:text-6xl">Shaping the Future of Robotics</h1>
                <p className="max-w-3xl text-lg text-[#b3b3b3]">
                  Mantibot.ai is at the forefront of cutting-edge robotics technology, revolutionizing industries and
                  transforming the way we live and work.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button>Explore Masterplan</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </section>
            <section className="bg-[#0f0f0f] border mt-10 border-white/10 rounded-lg py-20 px-12 md:px-12">
              <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">Our Mission</h2>
                  <p className="text-[#b3b3b3]">
                    At Mantibot.ai, our mission is to push the boundaries of robotics and artificial intelligence, creating
                    innovative solutions that improve lives and transform industries. We are driven by a passion for
                    technology and a commitment to sustainable progress.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[#7b61ff] hover:text-[#9381ff]"
                    prefetch={false}
                  >
                    Learn More
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">Future Robot Projects</h2>
                  <p className="text-[#b3b3b3]">
                    Explore our cutting-edge robot projects that are shaping the future of technology. From advanced
                    humanoid robots to specialized industrial automation, we are constantly innovating to meet the evolving
                    needs of our clients and society.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[#7b61ff] hover:text-[#9381ff]"
                    prefetch={false}
                  >
                    Discover Masterplan
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </section>
            <section className="bg-[#0f0f0f] py-20 mt-4 px-6 md:px-12 border-white/10 border rounded-lg">
              <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                  <h2 className="text-4xl font-bold">About Mantibot.ai</h2>
                  <p className="mt-6 text-[#b3b3b3]">
                    Mantibot.ai is a leading robotics company dedicated to pushing the boundaries of whats possible. Our
                    team of world-class engineers and researchers are driven by a passion for innovation and a commitment to
                    creating a better future.
                  </p>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-[#7b61ff] hover:text-[#9381ff]"
                    prefetch={false}
                  >
                    Explore Our Story
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Card className="bg-[#1a1a1a] p-6 border border-white/10 hover:bg-white/20 hover:border-white/5">
                    <CardHeader>
                      <CardTitle>Blog</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#b3b3b3]">
                        Stay up-to-date with the latest news, insights, and developments in the world of robotics.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-[#7b61ff] hover:text-[#9381ff]"
                        prefetch={false}
                      >
                        Read More
                        <ArrowRightIcon className="h-5 w-5" />
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="bg-[#1a1a1a] p-6 border border-white/10 hover:bg-white/20 hover:border-white/5">
                    <CardHeader>
                      <CardTitle>Careers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#b3b3b3]">
                        Join our team of passionate innovators and help shape the future of robotics.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-[#7b61ff] hover:text-[#9381ff]"
                        prefetch={false}
                      >
                        Explore Openings
                        <ArrowRightIcon className="h-5 w-5" />
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="bg-[#1a1a1a] p-6 border border-white/10 hover:bg-white/20 hover:border-white/5">
                    <CardHeader>
                      <CardTitle>Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#b3b3b3]">
                        Get in touch with our team to learn more about our services and solutions.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-[#7b61ff] hover:text-[#9381ff]"
                        prefetch={false}
                      >
                        Contact Us
                        <ArrowRightIcon className="h-5 w-5" />
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card className="bg-[#1a1a1a] p-6 border border-white/10 hover:bg-white/20 hover:border-white/5">
                    <CardHeader>
                      <CardTitle>Join Waiting List</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#b3b3b3]">
                        Be the first to know about our latest developments and product releases.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Join Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  )
}

export default page
