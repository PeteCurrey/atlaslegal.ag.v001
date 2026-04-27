import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, FileText, CheckCircle2, ChevronRight, Share2, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Mock data for the guide
const guideData = {
  title: "What is an NDA? A Complete Guide for UK Businesses",
  category: "Intellectual Property",
  categorySlug: "ip",
  lastUpdated: "April 2026",
  readTime: "8 min read",
  author: {
    name: "Sarah Jenkins",
    role: "Senior Commercial Solicitor",
    credentials: "SRA Regulated, 15+ years experience",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  plainEnglishSummary: [
    "An NDA (Non-Disclosure Agreement) is a legal contract that stops people from sharing your confidential information.",
    "You should use one before discussing your business ideas, intellectual property, or trade secrets with anyone.",
    "If someone signs an NDA and leaks your information, you can sue them for breach of contract and seek financial damages."
  ],
  legislation: ["Trade Secrets (Enforcement, etc.) Regulations 2018"]
};

export default function LegalGuideTemplate() {
  return (
    <div className="bg-white min-h-screen pt-20 pb-24">
      
      {/* Breadcrumbs */}
      <div className="bg-soft-grey py-4 border-b border-navy/5">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center text-sm text-navy/60">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <Link href="/guides" className="hover:text-navy transition-colors">Guides</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <Link href={`/guides/${guideData.categorySlug}`} className="hover:text-navy transition-colors">{guideData.category}</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="text-navy font-medium truncate">{guideData.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Article */}
          <article className="lg:w-2/3 max-w-3xl">
            <header className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 text-navy text-xs font-bold rounded-full mb-6">
                <BookOpen className="w-3.5 h-3.5" /> {guideData.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight mb-6">
                {guideData.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-navy/60 pb-6 border-b border-navy/10">
                <div className="flex items-center gap-3">
                  <img src={guideData.author.image} alt={guideData.author.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-navy">{guideData.author.name}</div>
                    <div className="text-xs">{guideData.author.credentials}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {guideData.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Last reviewed: {guideData.lastUpdated}
                </div>
              </div>
            </header>

            {/* AEO/GEO Plain English Summary Box */}
            <div className="bg-navy rounded-xl p-6 md:p-8 mb-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h2 className="text-xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                <span className="bg-gold text-navy w-6 h-6 flex items-center justify-center rounded-full text-xs">AI</span>
                Plain English Summary
              </h2>
              <ul className="space-y-3">
                {guideData.plainEnglishSummary.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content - Semantic HTML for SEO */}
            <div className="prose prose-lg prose-navy max-w-none">
              <p className="lead text-xl text-navy/80 mb-8">
                In the modern business landscape, ideas are currency. A Non-Disclosure Agreement (NDA) is the fundamental legal mechanism for protecting that currency. Whether you're a freelancer pitching a new concept, or a small business entering a joint venture, understanding how and when to use an NDA is critical.
              </p>

              <h2 className="text-3xl font-serif font-bold text-navy mt-12 mb-6">What exactly is a Non-Disclosure Agreement?</h2>
              <p>
                An NDA is a legally binding contract establishing a confidential relationship between parties. The party or parties signing the agreement agree that sensitive information they may obtain will not be made available to any others.
              </p>
              
              <div className="bg-soft-grey border-l-4 border-accent p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-2">Legal Definition</h4>
                <p className="text-navy/80 italic m-0">
                  A contract through which the parties agree not to disclose information covered by the agreement. Under UK law, breach of an NDA constitutes a breach of contract and may give rise to a claim for damages or an injunction.
                </p>
              </div>

              <h2 className="text-3xl font-serif font-bold text-navy mt-12 mb-6">Types of NDAs in the UK</h2>
              <p>There are generally two types of NDAs you will encounter in UK commercial law:</p>
              <ul className="space-y-4 my-6 list-none pl-0">
                <li className="flex items-start gap-3">
                  <div className="bg-navy/5 p-1 rounded mt-1"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                  <div>
                    <strong>One-way (Unilateral) NDA:</strong> This is the most common type. It is used when only one business is sharing confidential information with the other. For example, an employer sharing trade secrets with a new employee.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-navy/5 p-1 rounded mt-1"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                  <div>
                    <strong>Two-way (Mutual) NDA:</strong> This is used when both parties will be sharing confidential information with each other. This is common in joint ventures, mergers, or partnerships.
                  </div>
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-navy mt-12 mb-6">When should you use an NDA?</h2>
              <p>
                You should ask someone to sign an NDA before you disclose sensitive business information. Common scenarios include:
              </p>
              <ul>
                <li>Presenting an invention or business idea to a potential partner, investor, or distributor.</li>
                <li>Sharing financial, marketing, and other information with a prospective buyer of your business.</li>
                <li>Showing a new product or technology to a prospective buyer or licensee.</li>
                <li>Receiving services from a company or individual who may have access to some sensitive information in providing those services.</li>
              </ul>

              <div className="my-12 p-8 border border-navy/10 rounded-2xl bg-gradient-to-br from-white to-soft-grey text-center">
                <h3 className="text-2xl font-serif font-bold text-navy mb-3">Need an NDA right now?</h3>
                <p className="text-navy/70 mb-6">Generate a solicitor-approved, UK-compliant Non-Disclosure Agreement in minutes using our AI builder.</p>
                <Link href="/generator/nda">
                  <Button variant="gold" size="lg">Generate Free NDA</Button>
                </Link>
              </div>

            </div>

            {/* Legislation Cited */}
            <div className="mt-12 pt-8 border-t border-navy/10">
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Relevant Legislation</h3>
              <div className="flex flex-wrap gap-2">
                {guideData.legislation.map((leg, i) => (
                  <span key={i} className="px-3 py-1 bg-soft-grey border border-navy/10 rounded-full text-xs text-navy/70">
                    {leg}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium text-navy/60">Share this guide:</span>
              <button className="p-2 bg-soft-grey hover:bg-navy/5 rounded-full transition-colors"><Linkedin className="w-4 h-4 text-navy" /></button>
              <button className="p-2 bg-soft-grey hover:bg-navy/5 rounded-full transition-colors"><Share2 className="w-4 h-4 text-navy" /></button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Author Card for E-E-A-T */}
            <div className="bg-soft-grey rounded-2xl p-6 border border-navy/5">
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-6">About the Author</h3>
              <div className="text-center">
                <img src={guideData.author.image} alt={guideData.author.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-sm" />
                <h4 className="text-xl font-bold text-navy">{guideData.author.name}</h4>
                <p className="text-accent text-sm font-medium mb-2">{guideData.author.role}</p>
                <p className="text-sm text-navy/70 mb-4 px-4">
                  Sarah is a commercial solicitor specializing in IP protection for tech startups and agencies. She ensures all Atlas Legal AI templates meet current UK legal standards.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs font-bold text-navy/60 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> {guideData.author.credentials}
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-white border border-navy/5 shadow-sm rounded-2xl p-6">
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-6">Related Guides</h3>
              <div className="space-y-4">
                <Link href="#" className="group block">
                  <h4 className="font-bold text-navy group-hover:text-accent transition-colors text-sm mb-1">How to Protect Your Intellectual Property</h4>
                  <p className="text-xs text-navy/60">5 min read</p>
                </Link>
                <div className="h-px bg-navy/5 w-full"></div>
                <Link href="#" className="group block">
                  <h4 className="font-bold text-navy group-hover:text-accent transition-colors text-sm mb-1">Freelance Contracts: 5 Essential Clauses</h4>
                  <p className="text-xs text-navy/60">7 min read</p>
                </Link>
                <div className="h-px bg-navy/5 w-full"></div>
                <Link href="#" className="group block">
                  <h4 className="font-bold text-navy group-hover:text-accent transition-colors text-sm mb-1">What to do if someone breaches your NDA</h4>
                  <p className="text-xs text-navy/60">6 min read</p>
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
