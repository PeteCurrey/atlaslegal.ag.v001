import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, CheckCircle, Shield, Briefcase, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/50"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-gold text-sm font-medium">
              <Star className="w-4 h-4 fill-gold" />
              <span>Trusted by 10,000+ UK Businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
              Legal Clarity for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#E5C75B]">Every Business.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Premium AI-powered legal intelligence and document automation. 
              Draft bulletproof contracts, review risk instantly, and protect your enterprise without the traditional law firm price tag.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/documents">
                <Button variant="gold" size="lg" className="w-full sm:w-auto gap-2">
                  Browse Template Library
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contract-review">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                  Try AI Contract Review
                </Button>
              </Link>
            </div>
            
            {/* Live Counter */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10">
              <div>
                <div className="text-3xl font-serif font-bold text-white">45,000+</div>
                <div className="text-sm text-white/60">Documents Generated</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white">12M+</div>
                <div className="text-sm text-white/60">Clauses Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white">4.9/5</div>
                <div className="text-sm text-white/60">TrustPilot Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Paths Section */}
      <section className="py-24 bg-soft-grey">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
              Specialized protection for your specific path
            </h2>
            <p className="text-lg text-navy/70">
              We've tailored our intelligence platform to address the unique legal risks of different modern business structures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Freelancer Path */}
            <Link href="/freelancers" className="group flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-navy/5">
              <div className="bg-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Users className="w-7 h-7 text-navy group-hover:text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-3">For Freelancers</h3>
              <p className="text-navy/70 mb-6 flex-1">
                Stop scope creep and ensure you get paid. Bulletproof service agreements, rock-solid NDAs, and intellectual property protection.
              </p>
              <div className="flex items-center text-accent font-medium mt-auto group-hover:translate-x-1 transition-transform">
                Explore Freelancer Hub <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            {/* Small Business Path */}
            <Link href="/small-business" className="group flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-navy/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="bg-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Briefcase className="w-7 h-7 text-navy group-hover:text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-3">For Small Business</h3>
              <p className="text-navy/70 mb-6 flex-1">
                End-to-end compliance. Employment contracts, commercial leases, shareholder agreements, and GDPR policy generators.
              </p>
              <div className="flex items-center text-accent font-medium mt-auto group-hover:translate-x-1 transition-transform">
                Take the Legal Health Check <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            {/* Agency Path */}
            <Link href="/agency" className="group flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-navy/5">
              <div className="bg-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Shield className="w-7 h-7 text-navy group-hover:text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-3">For Agencies</h3>
              <p className="text-navy/70 mb-6 flex-1">
                Protect your margins and IP. Retainer agreements, master service agreements, and instant AI review of client-supplied contracts.
              </p>
              <div className="flex items-center text-accent font-medium mt-auto group-hover:translate-x-1 transition-transform">
                Explore Agency Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Review Feature Highlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                <CheckCircle className="w-4 h-4" /> AI-Powered Contract Review
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
                Upload a contract.<br />
                Find the risks in 60 seconds.
              </h2>
              <p className="text-lg text-navy/70">
                Never sign blind again. Our proprietary AI, trained on thousands of UK legal documents, instantly analyzes your uploaded contract to flag unusual clauses, missing protections, and red-flag terms.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Identifies highly unfavorable liability clauses",
                  "Flags missing jurisdiction protections (England & Wales)",
                  "Generates a simple Red/Amber/Green risk report",
                  "Suggests exact wording for negotiation"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-gold/20 p-1 rounded-full">
                      <CheckCircle className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-navy font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contract-review" className="inline-block pt-4">
                <Button size="lg" className="gap-2">
                  Try AI Review Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            {/* Visual Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-gold/20 rounded-[2rem] transform rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-navy/5 p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-navy/10 pb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-navy" />
                    <div>
                      <div className="font-semibold text-navy">Master_Service_Agreement.pdf</div>
                      <div className="text-xs text-navy/50">Analyzing 24 clauses...</div>
                    </div>
                  </div>
                  <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
                    MEDIUM RISK
                  </div>
                </div>
                
                <div className="space-y-3 pt-2">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-red-900 text-sm">Indemnity Clause (7.2)</h4>
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">RED FLAG</span>
                    </div>
                    <p className="text-xs text-red-800">Uncapped liability. You are accepting responsibility for indirect and consequential losses. Suggest capping at 100% of contract value.</p>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-amber-900 text-sm">Payment Terms (4.1)</h4>
                      <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded">UNUSUAL</span>
                    </div>
                    <p className="text-xs text-amber-800">90-day payment terms are significantly longer than the UK standard (30 days). Consider negotiating to 30 or 45 days.</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-green-900 text-sm">Jurisdiction (15.1)</h4>
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">STANDARD</span>
                    </div>
                    <p className="text-xs text-green-800">Correctly specified as England and Wales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
