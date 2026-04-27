"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Search, FileText, Shield, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navigation = [
  {
    name: "Documents",
    href: "/documents",
    children: [
      { name: "Employment", href: "/documents/employment", icon: Users },
      { name: "Commercial", href: "/documents/commercial", icon: Briefcase },
      { name: "Property", href: "/documents/property", icon: FileText },
      { name: "IP & Tech", href: "/documents/ip", icon: Shield },
    ],
  },
  { name: "Contract Review", href: "/contract-review" },
  { name: "Guides", href: "/guides" },
  { name: "Solicitors", href: "/solicitors" },
  { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-navy p-1.5 rounded shadow-lg group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-gold" />
            </div>
            <span className={cn(
              "text-xl font-serif font-bold tracking-tight transition-colors",
              scrolled ? "text-navy" : "text-navy" // Always navy for clarity on light bg
            )}>
              ATLAS <span className="text-gold">LEGAL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent",
                    pathname.startsWith(item.href) ? "text-accent" : "text-navy/80"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4 opacity-50" />}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-navy/5 p-4 overflow-hidden"
                      >
                        <div className="grid gap-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-soft-grey transition-colors"
                            >
                              <div className="bg-navy/5 p-2 rounded">
                                <child.icon className="w-4 h-4 text-accent" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-navy">{child.name}</div>
                                <div className="text-xs text-navy/60">Templates & Help</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </Button>
            <Link href="/login">
              <Button variant="outline" size="sm">Client Login</Button>
            </Link>
            <Link href="/generator">
              <Button variant="gold" size="sm">Start Building</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-navy/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className="block text-lg font-semibold text-navy"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-2 border-l-2 border-gold/20">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block text-navy/70 hover:text-accent"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 grid gap-3">
                <Button variant="outline" className="w-full">Client Login</Button>
                <Button variant="gold" className="w-full">Start Building</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
