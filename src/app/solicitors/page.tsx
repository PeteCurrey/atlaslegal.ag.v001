"use client";

import React, { useState } from "react";
import { Search, MapPin, Star, Shield, Briefcase, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Mock data
const solicitors = [
  {
    id: 1,
    name: "James Cavendish",
    firm: "Cavendish Commercial Law",
    role: "Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    specialisms: ["Commercial Contracts", "M&A", "Corporate Structuring"],
    location: "London",
    rating: 4.9,
    reviews: 124,
    businessSize: "SME & Enterprise"
  },
  {
    id: 2,
    name: "Aisha Patel",
    firm: "TechLaw Partners",
    role: "Senior Solicitor",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
    specialisms: ["Intellectual Property", "GDPR Data Protection", "SaaS Agreements"],
    location: "Manchester",
    rating: 5.0,
    reviews: 89,
    businessSize: "Startups & Agencies"
  },
  {
    id: 3,
    name: "Robert Stirling",
    firm: "Stirling Employment",
    role: "Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    specialisms: ["Employment Law", "Dispute Resolution", "HR Compliance"],
    location: "Birmingham",
    rating: 4.8,
    reviews: 210,
    businessSize: "SME"
  }
];

export default function SolicitorNetwork() {
  const [activeTab, setActiveTab] = useState<"directory" | "referral">("directory");

  return (
    <div className="bg-soft-grey min-h-screen">
      {/* Header */}
      <div className="bg-navy pt-24 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" /> Vetted Partner Network
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Expert legal advice when AI isn't enough.
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Sometimes you need a human. Connect with our network of SRA-regulated, highly-rated commercial solicitors who specialize in supporting UK freelancers and small businesses.
            </p>
            
            <div className="flex bg-white/10 p-1 rounded-lg max-w-sm mx-auto">
              <button 
                onClick={() => setActiveTab("directory")}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${activeTab === "directory" ? "bg-white text-navy shadow" : "text-white hover:bg-white/5"}`}
              >
                Browse Directory
              </button>
              <button 
                onClick={() => setActiveTab("referral")}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${activeTab === "referral" ? "bg-white text-navy shadow" : "text-white hover:bg-white/5"}`}
              >
                Get Matched
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        
        {activeTab === "directory" && (
          <div className="space-y-8">
            {/* Search and Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-navy/5 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                <input 
                  type="text" 
                  placeholder="Search by name, firm, or specialism..." 
                  className="w-full pl-10 pr-4 py-3 bg-soft-grey rounded-lg border-none focus:ring-2 focus:ring-accent text-navy"
                />
              </div>
              <div className="flex gap-4">
                <select className="bg-soft-grey px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-accent text-navy font-medium">
                  <option>All Specialisms</option>
                  <option>Commercial Contracts</option>
                  <option>Employment Law</option>
                  <option>Intellectual Property</option>
                </select>
                <select className="bg-soft-grey px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-accent text-navy font-medium">
                  <option>All Locations</option>
                  <option>London</option>
                  <option>Manchester</option>
                  <option>Remote/National</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solicitors.map((sol) => (
                <div key={sol.id} className="bg-white rounded-2xl p-6 border border-navy/5 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <img src={sol.image} alt={sol.name} className="w-16 h-16 rounded-full object-cover border-2 border-soft-grey" />
                    <div>
                      <h3 className="font-serif font-bold text-lg text-navy leading-tight">{sol.name}</h3>
                      <p className="text-sm font-medium text-navy/70">{sol.role} at {sol.firm}</p>
                      <div className="flex items-center gap-1 mt-1 text-sm">
                        <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                        <span className="font-bold text-navy">{sol.rating}</span>
                        <span className="text-navy/50">({sol.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-start gap-2 text-sm text-navy/70">
                      <Briefcase className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                      <div className="flex flex-wrap gap-1">
                        {sol.specialisms.map((s, i) => (
                          <span key={i} className="bg-soft-grey px-2 py-0.5 rounded text-xs">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-navy/70">
                      <MapPin className="w-4 h-4 text-accent shrink-0" />
                      {sol.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-navy/70">
                      <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                      SRA Regulated Partner
                    </div>
                  </div>

                  <Button className="w-full gap-2">View Profile</Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "referral" && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-navy/5">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-navy mb-3">Let us match you.</h2>
              <p className="text-navy/70">
                Tell us about your legal requirement, and our team will match you with the perfect solicitor within 24 hours. Free, no-obligation introductory call.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">First Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-navy/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Last Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-navy/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Work Email</label>
                <input type="email" className="w-full p-3 rounded-lg border border-navy/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Area of Law</label>
                <select className="w-full p-3 rounded-lg border border-navy/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none bg-white text-navy">
                  <option>Select an area...</option>
                  <option>Commercial Contracts</option>
                  <option>Employment Dispute</option>
                  <option>Intellectual Property/Trademarks</option>
                  <option>Corporate Structuring/Shares</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Briefly describe your situation</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 rounded-lg border border-navy/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none" 
                  placeholder="e.g. I need a solicitor to review a commercial lease before I sign it..."
                ></textarea>
              </div>

              <div className="bg-soft-grey p-4 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-xs text-navy/70 leading-relaxed">
                  Your enquiry is confidential. By submitting this form, you agree to our terms of service and allow us to share your contact details with up to 3 matched solicitors.
                </p>
              </div>

              <Button variant="gold" size="lg" className="w-full">
                Request Solicitor Match
              </Button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
