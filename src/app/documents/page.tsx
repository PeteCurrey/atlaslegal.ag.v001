import React from "react";
import Link from "next/link";
import { Search, FileText, Briefcase, Users, Shield, Building, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const categories = [
  { id: "all", name: "All Templates", icon: FileText },
  { id: "employment", name: "Employment", icon: Users },
  { id: "commercial", name: "Commercial", icon: Briefcase },
  { id: "property", name: "Property", icon: Building },
  { id: "ip", name: "IP & Tech", icon: Shield },
];

const documents = [
  {
    id: "nda",
    title: "Non-Disclosure Agreement (NDA)",
    category: "ip",
    description: "Protect your confidential information before sharing it with employees, contractors, or partners.",
    popular: true,
    price: "Free",
  },
  {
    id: "employment-contract",
    title: "Standard Employment Contract",
    category: "employment",
    description: "UK-compliant employment contract covering full-time and part-time roles.",
    popular: true,
    price: "Premium",
  },
  {
    id: "service-agreement",
    title: "Master Service Agreement",
    category: "commercial",
    description: "Set the overarching terms for a B2B service relationship, including payment and liability.",
    popular: false,
    price: "Premium",
  },
  {
    id: "freelance-contract",
    title: "Freelance Service Contract",
    category: "employment",
    description: "Define the scope, deliverables, and payment terms for independent contractors.",
    popular: true,
    price: "Free",
  },
  {
    id: "privacy-policy",
    title: "Website Privacy Policy (GDPR)",
    category: "ip",
    description: "A comprehensive privacy policy compliant with UK GDPR requirements.",
    popular: true,
    price: "Free",
  },
  {
    id: "commercial-lease",
    title: "Commercial Property Lease",
    category: "property",
    description: "Lease agreement for commercial premises, tailored for landlords or tenants.",
    popular: false,
    price: "Premium",
  },
];

export default function DocumentLibrary() {
  return (
    <div className="flex flex-col w-full bg-soft-grey min-h-screen pb-24">
      {/* Header */}
      <div className="bg-navy pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Document Library
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Browse our library of 200+ UK-compliant legal templates. Drafted by experts, automated by AI.
            </p>
            
            {/* Search Bar */}
            <div className="relative flex items-center w-full max-w-2xl bg-white rounded-lg shadow-lg">
              <div className="pl-4">
                <Search className="w-5 h-5 text-navy/50" />
              </div>
              <input 
                type="text" 
                placeholder="Search for an NDA, employment contract, etc..." 
                className="w-full bg-transparent border-none py-4 px-4 text-navy placeholder:text-navy/50 focus:outline-none focus:ring-0"
              />
              <div className="pr-2">
                <Button variant="gold" size="sm">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar / Filters */}
          <div className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${cat.id === "all" ? "bg-navy text-white font-medium" : "text-navy/70 hover:bg-navy/5"}`}>
                      <cat.icon className="w-4 h-4" />
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Document Grid */}
          <div className="flex-1">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <Link key={doc.id} href={`/documents/${doc.category}/${doc.id}`} className="group flex flex-col bg-white border border-navy/5 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-navy/5 p-2 rounded text-navy group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    {doc.popular && (
                      <span className="bg-gold/10 text-gold text-[10px] font-bold px-2 py-1 rounded uppercase">Popular</span>
                    )}
                  </div>
                  
                  <h3 className="font-serif font-bold text-navy text-lg mb-2 group-hover:text-accent transition-colors">{doc.title}</h3>
                  <p className="text-sm text-navy/60 mb-6 flex-1 line-clamp-3">{doc.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-navy/5">
                    <span className={`text-xs font-bold ${doc.price === 'Free' ? 'text-green-600' : 'text-navy/50'}`}>
                      {doc.price}
                    </span>
                    <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
