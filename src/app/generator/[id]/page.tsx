"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Mock document schema
const documentSchema = {
  id: "nda",
  title: "Non-Disclosure Agreement (NDA)",
  steps: [
    {
      id: "parties",
      title: "Parties",
      fields: [
        { name: "disclosingParty", label: "Disclosing Party (Your Company)", type: "text", placeholder: "e.g. Atlas Tech Ltd" },
        { name: "receivingParty", label: "Receiving Party", type: "text", placeholder: "e.g. John Doe Consulting" },
      ]
    },
    {
      id: "terms",
      title: "Terms",
      fields: [
        { name: "purpose", label: "Purpose of Disclosure", type: "textarea", placeholder: "e.g. To evaluate a potential partnership..." },
        { name: "duration", label: "Duration of Confidentiality", type: "select", options: ["1 Year", "2 Years", "3 Years", "Indefinite"] },
      ]
    },
    {
      id: "jurisdiction",
      title: "Jurisdiction",
      fields: [
        { name: "jurisdiction", label: "Governing Law", type: "select", options: ["England & Wales", "Scotland", "Northern Ireland"] },
      ]
    }
  ]
};

export default function DocumentGenerator() {
  const params = useParams();
  const docId = params?.id as string || "nda";
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const schema = documentSchema; // In reality, fetch based on docId

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < schema.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleGenerate();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Mock API call to AI assembly
    setTimeout(() => {
      setIsGenerating(false);
      setIsComplete(true);
    }, 2500);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-soft-grey pt-20">
      
      {/* Left Column: Form Wizard */}
      <div className="w-full md:w-1/2 lg:w-2/5 bg-white border-r border-navy/5 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 relative">
        <div className="p-6 md:p-8 border-b border-navy/5">
          <div className="flex items-center gap-2 text-sm text-navy/50 font-medium mb-4">
            <Shield className="w-4 h-4 text-gold" /> AI Document Assembly
          </div>
          <h1 className="text-2xl font-serif font-bold text-navy">{schema.title}</h1>
          
          {/* Progress Bar */}
          <div className="mt-6 flex items-center gap-2">
            {schema.steps.map((step, idx) => (
              <div key={step.id} className="flex-1">
                <div className={`h-1.5 rounded-full transition-colors ${idx <= currentStep ? 'bg-gold' : 'bg-navy/10'}`}></div>
              </div>
            ))}
          </div>
          <div className="mt-2 text-xs font-bold text-navy/50 uppercase tracking-wider">
            Step {currentStep + 1} of {schema.steps.length}: {schema.steps[currentStep].title}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
              <div className="w-16 h-16 border-4 border-navy/10 border-t-gold rounded-full animate-spin"></div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">Assembling Document</h3>
                <p className="text-sm text-navy/60">Our AI is drafting your {schema.title} according to UK law...</p>
              </div>
            </div>
          ) : isComplete ? (
            <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">Ready to Download</h3>
                <p className="text-sm text-navy/60">Your document has been professionally assembled.</p>
              </div>
              <div className="flex gap-4 w-full pt-4">
                <Button className="flex-1 gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <FileText className="w-4 h-4" /> Word (.docx)
                </Button>
              </div>
            </div>
          ) : (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {schema.steps[currentStep].fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="block text-sm font-semibold text-navy">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      className="w-full border border-navy/20 rounded-md p-3 text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-accent"
                      rows={4}
                    />
                  ) : field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      className="w-full border border-navy/20 rounded-md p-3 text-navy focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select option...</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      className="w-full border border-navy/20 rounded-md p-3 text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {!isGenerating && !isComplete && (
          <div className="p-6 md:p-8 border-t border-navy/5 bg-gray-50 flex justify-between items-center">
            <Button 
              variant="ghost" 
              onClick={handleBack} 
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            <Button 
              variant={currentStep === schema.steps.length - 1 ? "gold" : "default"}
              onClick={handleNext}
              className="gap-2"
            >
              {currentStep === schema.steps.length - 1 ? "Generate Document" : "Next Step"}
              {currentStep !== schema.steps.length - 1 && <ArrowRight className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </div>

      {/* Right Column: Live Preview */}
      <div className="hidden md:flex flex-col flex-1 bg-soft-grey p-8 items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none"></div>
        
        {/* Paper Mockup */}
        <div className="w-full max-w-[600px] aspect-[1/1.414] bg-white shadow-2xl rounded-sm p-12 relative overflow-hidden">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-2xl text-navy uppercase tracking-widest border-b-2 border-navy inline-block pb-2">
              NON-DISCLOSURE AGREEMENT
            </h2>
          </div>

          {/* Skeleton Content with Live Updates */}
          <div className="space-y-6 text-sm text-navy/80 leading-relaxed font-serif">
            <p>
              This Agreement is made on <span className="font-bold underline decoration-dotted">{new Date().toLocaleDateString('en-GB')}</span> between:
            </p>
            
            <div className="pl-6 space-y-4">
              <p>
                (1) <span className="font-bold bg-gold/20 px-1 rounded transition-all">{formData.disclosingParty || "[Disclosing Party]"}</span> (the "Disclosing Party"); and
              </p>
              <p>
                (2) <span className="font-bold bg-gold/20 px-1 rounded transition-all">{formData.receivingParty || "[Receiving Party]"}</span> (the "Receiving Party").
              </p>
            </div>

            <p className="font-bold pt-4">BACKGROUND:</p>
            <p className="bg-accent/10 px-2 py-1 rounded transition-all">
              {formData.purpose || "The Disclosing Party intends to disclose confidential information to the Receiving Party for the purpose of [Purpose]."}
            </p>

            <p className="font-bold pt-4">1. CONFIDENTIALITY OBLIGATIONS</p>
            <p>
              The Receiving Party shall maintain the Confidential Information in strict confidence and shall not disclose it to any third party. This obligation shall remain in effect for a period of <span className="font-bold bg-gold/20 px-1 rounded">{formData.duration || "[Duration]"}</span>.
            </p>

            <p className="font-bold pt-4">2. GOVERNING LAW</p>
            <p>
              This Agreement shall be governed by and construed in accordance with the laws of <span className="font-bold bg-gold/20 px-1 rounded">{formData.jurisdiction || "[Jurisdiction]"}</span>.
            </p>
          </div>

          {/* Blur Overlay if generating */}
          {isGenerating && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
              <div className="bg-navy text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                Drafting Clauses...
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
