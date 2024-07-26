import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { VelocityScroll } from "../magicui/scroll-based-velocity";

export async function Text() {
  return (
    <div className="">
     <VelocityScroll
      text="Velocity Scroll"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
    </div>
  );
}
