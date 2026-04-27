"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowRight, ArrowLeft, CheckCircle2, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";

const questions = [
  {
    id: "structure",
    question: "What is your current business structure?",
    options: ["Sole Trader / Freelancer", "Limited Company (LTD)", "Partnership", "Not Sure Yet"]
  },
  {
    id: "contracts",
    question: "How do you currently handle client contracts?",
    options: ["I use professionally drafted templates", "I wrote them myself / copied from online", "I rely on verbal agreements or emails", "Clients provide the contracts"]
  },
  {
    id: "team",
    question: "Do you have any employees or regular contractors?",
    options: ["No, just me", "Yes, freelancers/contractors", "Yes, full-time employees", "Both employees and contractors"]
  },
  {
    id: "data",
    question: "Do you collect personal data (emails, addresses) from customers?",
    options: ["Yes, a lot of data", "Yes, basic contact info", "No", "I'm not sure what counts as personal data"]
  }
];

export default function LegalHealthCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: answer });
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 2000);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-navy text-white pt-24 pb-20 relative overflow-hidden flex flex-col justify-center">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/20 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Activity className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Legal Health Check</h1>
            <p className="text-white/70 text-lg">Discover your legal blind spots in under 2 minutes.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-navy relative overflow-hidden">
            <AnimatePresence mode="wait">
              
              {!isCalculating && !showResults && (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-bold text-navy/50 uppercase tracking-wider">
                      Question {currentStep + 1} of {questions.length}
                    </span>
                    <div className="flex gap-1">
                      {questions.map((_, idx) => (
                        <div key={idx} className={`w-8 h-1.5 rounded-full ${idx <= currentStep ? 'bg-gold' : 'bg-navy/10'}`}></div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                    {questions[currentStep].question}
                  </h2>

                  <div className="space-y-3">
                    {questions[currentStep].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(opt)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                          answers[questions[currentStep].id] === opt 
                            ? "border-accent bg-accent/5 text-accent" 
                            : "border-navy/10 hover:border-navy/30 hover:bg-soft-grey"
                        }`}
                      >
                        <span className="font-medium">{opt}</span>
                      </button>
                    ))}
                  </div>

                  {currentStep > 0 && (
                    <div className="mt-8 pt-6 border-t border-navy/5">
                      <button onClick={handleBack} className="text-sm font-bold text-navy/50 hover:text-navy flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Previous Question
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              {isCalculating && (
                <motion.div
                  key="calculating"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 border-4 border-navy/10 border-t-gold rounded-full animate-spin mx-auto mb-6"></div>
                  <h3 className="text-2xl font-bold mb-2">Analyzing your responses...</h3>
                  <p className="text-navy/60">Cross-referencing with UK commercial compliance standards.</p>
                </motion.div>
              )}

              {showResults && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        className="text-amber-100"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-amber-500"
                        strokeWidth="3"
                        strokeDasharray="65, 100"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold text-navy">65</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold mb-2">Your Legal Health Score is Fair</h2>
                  <p className="text-navy/70 mb-8 max-w-md mx-auto">
                    You have a good foundation, but there are critical vulnerabilities in your contract processes that leave you exposed to unpaid invoices and liability.
                  </p>

                  <div className="bg-soft-grey p-6 rounded-xl text-left mb-8">
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Recommended Actions</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="mt-0.5 bg-red-100 p-1 rounded"><Shield className="w-4 h-4 text-red-600" /></div>
                        <div>
                          <div className="font-bold text-sm">Upgrade Client Contracts</div>
                          <div className="text-xs text-navy/60">Stop using self-written templates. Implement a solid Master Service Agreement.</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-0.5 bg-amber-100 p-1 rounded"><Shield className="w-4 h-4 text-amber-600" /></div>
                        <div>
                          <div className="font-bold text-sm">Create a Privacy Policy</div>
                          <div className="text-xs text-navy/60">You collect personal data but lack a formal GDPR-compliant policy.</div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-navy p-6 rounded-xl text-white">
                    <h4 className="font-serif font-bold text-lg mb-2">Get your complete 12-page report</h4>
                    <p className="text-sm text-white/70 mb-4">Enter your email to receive your full breakdown and free action plan templates.</p>
                    <div className="flex gap-2">
                      <input type="email" placeholder="Your work email" className="flex-1 p-3 rounded-md text-navy outline-none" />
                      <Button variant="gold">Send Report</Button>
                    </div>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
