"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, AlertTriangle, CheckCircle, Info, X, ShieldAlert, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

type AnalysisState = "idle" | "uploading" | "analyzing" | "complete";

export default function ContractReview() {
  const [state, setState] = useState<AnalysisState>("idle");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      startAnalysis();
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFileName(e.dataTransfer.files[0].name);
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setState("uploading");
    setTimeout(() => {
      setState("analyzing");
      setTimeout(() => {
        setState("complete");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-soft-grey pt-20 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            <ShieldAlert className="w-4 h-4" /> AI Risk Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Contract Risk Review
          </h1>
          <p className="text-lg text-navy/70">
            Upload any contract. Our AI will analyze it against UK law standards and flag unusual clauses, missing protections, and potential liabilities within 60 seconds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* Upload State */}
            {state === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white border-2 border-dashed border-navy/20 rounded-2xl p-12 text-center hover:border-accent/50 transition-colors cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="bg-navy/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-8 h-8 text-navy/50" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Drag & Drop your contract</h3>
                <p className="text-navy/60 mb-8">Supports PDF, DOCX, and TXT files up to 10MB</p>
                <Button variant="outline" className="mx-auto">Browse Files</Button>
                <input 
                  type="file" 
                  className="hidden" 
                  ref={fileInputRef}
                  accept=".pdf,.docx,.txt"
                  onChange={handleFileChange}
                />
              </motion.div>
            )}

            {/* Processing State */}
            {(state === "uploading" || state === "analyzing") && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-12 text-center shadow-lg border border-navy/5"
              >
                <div className="w-24 h-24 relative mx-auto mb-8">
                  <svg className="animate-spin w-full h-full text-navy/10" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75 text-accent" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <FileText className="w-8 h-8 text-navy absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  {state === "uploading" ? "Encrypting & Uploading..." : "Analyzing Clauses..."}
                </h3>
                <p className="text-navy/60">
                  {state === "uploading" ? `Securing ${fileName}` : "Cross-referencing against UK commercial standards"}
                </p>
                
                <div className="w-full max-w-md mx-auto bg-navy/5 h-2 rounded-full mt-8 overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: state === "uploading" ? "40%" : "90%" }}
                    transition={{ duration: state === "uploading" ? 1.5 : 3 }}
                  />
                </div>
              </motion.div>
            )}

            {/* Results State */}
            {state === "complete" && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Score Card */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy/5 flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-navy/50" />
                      <span className="font-medium text-navy">{fileName}</span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-navy mb-2">Risk Assessment Complete</h2>
                    <p className="text-navy/70">We analyzed 34 clauses and found 3 areas requiring your attention.</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-amber-500 mb-1">MEDIUM</div>
                      <div className="text-xs font-bold text-navy/50 uppercase tracking-wider">Overall Risk</div>
                    </div>
                    <Button variant="outline" onClick={() => setState("idle")}>Analyze Another</Button>
                  </div>
                </div>

                {/* Findings List */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-navy px-2">Key Findings</h3>
                  
                  {/* Red Flag */}
                  <div className="bg-white rounded-xl border border-red-200 overflow-hidden shadow-sm">
                    <div className="bg-red-50 px-6 py-4 flex items-center justify-between border-b border-red-100">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <h4 className="font-bold text-red-900">Uncapped Liability (Clause 8.2)</h4>
                      </div>
                      <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Red Flag</span>
                    </div>
                    <div className="p-6">
                      <p className="text-navy/80 mb-4">
                        The contract currently states you are liable for <strong>"all direct, indirect, and consequential losses"</strong> without a financial cap. This is highly unusual and exposes your business to unlimited risk.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <h5 className="text-xs font-bold text-navy/50 uppercase tracking-wider mb-2">Suggested Negotiation</h5>
                        <p className="text-sm font-medium text-navy">
                          "Liability should be capped at 100% of the total fees paid under this agreement in the 12 months preceding the claim. We cannot accept liability for indirect or consequential losses."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="bg-white rounded-xl border border-amber-200 overflow-hidden shadow-sm">
                    <div className="bg-amber-50 px-6 py-4 flex items-center justify-between border-b border-amber-100">
                      <div className="flex items-center gap-3">
                        <Info className="w-5 h-5 text-amber-600" />
                        <h4 className="font-bold text-amber-900">Auto-Renewal Notice Period (Clause 4.1)</h4>
                      </div>
                      <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Unusual</span>
                    </div>
                    <div className="p-6">
                      <p className="text-navy/80">
                        The contract requires 90 days notice to prevent auto-renewal. The standard in UK B2B contracts is typically 30 days. You may want to diarize this carefully or negotiate it down.
                      </p>
                    </div>
                  </div>

                  {/* Good */}
                  <div className="bg-white rounded-xl border border-green-200 overflow-hidden shadow-sm">
                    <div className="bg-green-50 px-6 py-4 flex items-center justify-between border-b border-green-100">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h4 className="font-bold text-green-900">Jurisdiction (Clause 15)</h4>
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Standard</span>
                    </div>
                    <div className="p-6">
                      <p className="text-navy/80">
                        The contract is correctly governed by the laws of England and Wales, which matches your company profile.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Upsell/CTA */}
                <div className="bg-navy rounded-2xl p-8 text-center text-white mt-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                  <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Need a solicitor to step in?</h3>
                  <p className="text-white/80 mb-6 max-w-xl mx-auto relative z-10">
                    Our AI has identified risks, but sometimes you need human expertise to negotiate the changes. Connect with a vetted commercial solicitor from our network.
                  </p>
                  <Button variant="gold" className="relative z-10 gap-2">
                    Find a Solicitor <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
