"use client"

import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">🌱</span>
            </div>
            <div className="text-xl font-bold">
              <span className="text-amber-600 font-playfair">GOOD SOIL</span>
              <span className="text-blue-600 italic ml-1">planner</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/planner" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              The Planner
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/account" className="text-gray-700 hover:text-blue-600">
              Sign In
            </Link>
            <Link href="/shop" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Get Started
            </Link>
          </div>

          {/*
