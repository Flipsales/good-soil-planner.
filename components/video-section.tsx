"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Video */}
          <div className="relative">
            <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Founder Message - Living with Purpose"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all transform hover:scale-110">
                  <Play className="w-8 h-8 text-gray-900 ml-1" />
                </button>
              </div>
            </div>
            {/* Video Stats */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white text-gray-900 rounded-lg p-4 shadow-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Watch Time: 8:42</span>
                <span className="text-gray-600">50K+ Views</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <div className="inline-flex items-center bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Featured Message
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-playfair">
              DO YOU WANT TO LIVE A LIFE OF PURPOSE?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Join our founder as he shares the heart behind Good Soil Planner and how this simple tool can transform
              your daily routine into a meaningful journey of growth, connecting your faith with practical life planning
              for lasting impact.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Discover the power of intentional daily habits</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300">Learn how to align your priorities with your values</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">See real transformation stories from our community</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Play className="mr-2 h-5 w-5" />
                Watch Full Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
