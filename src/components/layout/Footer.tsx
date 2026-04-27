import React from "react";
import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-white/10 p-1.5 rounded shadow-lg">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">
                ATLAS <span className="text-gold">LEGAL</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Providing clarity, authority, and automated legal intelligence for the modern UK business landscape. 
              Designed for freelancers, agencies, and small businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold/20 transition-colors">
                <Linkedin className="w-4 h-4 text-gold" />
              </a>

              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold/20 transition-colors">
                <Facebook className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>

          {/* Documents Column */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Document Library</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/documents/employment" className="hover:text-gold transition-colors">Employment Contracts</Link></li>
              <li><Link href="/documents/commercial" className="hover:text-gold transition-colors">Service Agreements</Link></li>
              <li><Link href="/documents/commercial" className="hover:text-gold transition-colors">Partnership Agreements</Link></li>
              <li><Link href="/documents/ip" className="hover:text-gold transition-colors">NDA Templates</Link></li>
              <li><Link href="/documents/property" className="hover:text-gold transition-colors">Commercial Leases</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/guides" className="hover:text-gold transition-colors">Legal Guides</Link></li>
              <li><Link href="/health-check" className="hover:text-gold transition-colors">Legal Health Check</Link></li>
              <li><Link href="/solicitors" className="hover:text-gold transition-colors">Solicitor Network</Link></li>
              <li><Link href="/news" className="hover:text-gold transition-colors">Legal Updates</Link></li>
              <li><Link href="/glossary" className="hover:text-gold transition-colors">Legal Glossary</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Support & Trust</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>support@atlaslegal.ai</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>+44 (0) 20 7946 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>One Canada Square, Canary Wharf, London E14 5AB</span>
              </li>
            </ul>
            
            {/* Badges */}
            <div className="mt-8 flex gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="bg-white/10 px-3 py-2 rounded text-[10px] font-bold border border-white/5 text-center">
                <div className="text-gold">SRA</div>
                <div>PARTNER</div>
              </div>
              <div className="bg-white/10 px-3 py-2 rounded text-[10px] font-bold border border-white/5 text-center">
                <div className="text-gold">ICO</div>
                <div>REGISTERED</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <p>© {currentYear} Atlas Legal AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-gold transition-colors">Cookies</Link>
            <Link href="/accessibility" className="hover:text-gold transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
