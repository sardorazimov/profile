import { Search, Bell, Plus, ChevronDown, Activity, Box, Globe, BarChart2, Settings, ExternalLink } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"


const HeroDasboard = () => {
  return (
  <section className="">
    <h1></h1>
 <div className="lg:hidden sm:flex mt-10 mx-10 border-[10px] border-white/10  rounded-3xl">
    <img src="/bg.png" alt="" className="rounded-2xl" />

 </div>
 <div className="  rounded-3xl lg:flex hidden  w-full flex-col h-screen ">
   <main className="mx-10 border-[10px] border-white/10  rounded-3xl  mt-10 ">
   {/* Top Navigation */}
    <div className="min-h-screen bg-white/5 text-gray-100  rounded-2xl ">
      <header className="border-b border-white/10 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-blue-400">
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="currentColor" d="M12 2L2 19h20L12 2zm0 3l7 14H5l7-14z" />
              </svg>
            </div>
            <div className="relative w-96">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="bg-white/5 pl-8 border-white/10"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="link" className="text-gray-200">Documentation</Button>
            <Button variant="link" className="text-gray-200">Community</Button>
            <Button variant="link" className="text-gray-200">Support</Button>
            <Button className="bg-green-600 hover:bg-blue-700 text-white">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 p-6">
          <nav className="space-y-6">
            <div className="border-b border-white/10">
              <h2 className="text-xl font-bold text-gray-300 mb-3">Navigation</h2>
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full hover:bg-white/5 justify-start">
                    <Box className="mr-2 h-4 w-4" />
                    Projects
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full hover:bg-white/5 justify-start">
                    <Activity className="mr-2 h-4 w-4" />
                    Deployments
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full hover:bg-white/5 justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Activity
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full hover:bg-white/5 justify-start">
                    <Globe className="mr-2 h-4 w-4" />
                    Domains
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full hover:bg-white/5 justify-start">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Usage
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full hover:bg-white/5 justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-300 mb-3">Your teams</h2>
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full hover:bg-white/5 justify-start">
                    <span className="mr-2 h-4 w-4 rounded bg-purple-500 flex items-center justify-center text-xs">P</span>
                    Planetaria
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full hover:bg-white/5 justify-start">
                    <span className="mr-2 h-4 w-4 rounded bg-blue-500 flex items-center justify-center text-xs">T</span>
                    Tailwind Labs
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">All projects</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-white/20 bg-white text-black">
                Sort by
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 bg-white text-black">
                Activity feed
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Project List */}
          <div className="space-y-4">
            {[
              { name: "ios-app", team: "Planetaria", status: "preview", time: "Initiated 1m 32s ago" },
              { name: "mobile-api", team: "Planetaria", status: "production", time: "Deployed 3m ago" },
              { name: "tailwindcss.com", team: "Tailwind Labs", status: "preview", time: "Initiated 5m 45s ago" }
            ].map((project) => (
              <div
                key={project.name}
                className="flex items-center justify-between p-4 rounded-lg border border-white/20 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-2 w-2 rounded-full ${project.status === 'production' ? 'bg-green-500' : 'bg-gray-500'}`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{project.team}</span>
                      <span className="text-gray-200">/</span>
                      <span>{project.name}</span>
                    </div>
                    <div className="text-sm text-gray-200">
                      Deploys from GitHub • {project.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="border-white/20 bg-emerald-700 hover:bg-green-500"
                  >
                    {project.status === 'production' ? 'Production' : 'Preview'}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  </main>
 </div>
  </section>
  )
}

export default HeroDasboard
