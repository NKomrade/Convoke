// pages/index.tsx
'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { Plus, Home, HelpCircle, FileText, Award, X } from 'lucide-react';

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };
  
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <main className="min-h-screen md:fixed w-full bg-black text-white flex flex-col">
        {/* Top geometric line */}
        <div className="w-full h-8 relative">
          <div className="absolute left-0 w-1/6 h-1 bg-[#006462] top-6"></div>
          <div className="absolute left-[calc(1/6*100%)] w-[calc(1/12*100%)] h-8 bg-[#006462] skew-x-[45deg] origin-bottom-left"></div>
          <div className="absolute left-[calc(5/12*100%)] right-[calc(5/12*100%)] h-1 bg-[#006462] top-6"></div>
          <div className="absolute right-[calc(1/6*100%)] w-[calc(1/12*100%)] h-8 bg-[#006462] skew-x-[-45deg] origin-bottom-right"></div>
          <div className="absolute right-0 w-1/6 h-1 bg-[#006462] top-6"></div>
        </div>

        <div className="absolute z-10 top-10 left-4">
          <Link href="/">
            <button className="p-2 rounded-full bg-[#006462] text-white/50 hover:text-white transition">
              <Home className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Main content with three flex containers */}
        <div className="flex-1 px-6 py-12 md:px-8 md:py-16 flex flex-col relative">
          {/* Header text */}
          <div className="text-center mb-8 font-mono font-bold ">
            <h2 className="text-gray-300 text-xl mb-1">HashHacks is here!</h2>
            <h3 className="text-gray-300 text-lg">April 4-5 2025</h3>
            <h1 className="text-4xl mt-4 bg-[#006462] text-transparent bg-clip-text">HASHHACKS 7.0</h1>
          </div>

          {/* Three column layout */}
          <div className="w-full justify-center max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            
            {/* LEFT FLEX - Text content */}
            <div className="md:w-1/3 flex flex-col md:text-right text-center">
              <p className="text-gray-300 mb-6 max-w-md">
                One task. One team. 24 hours. Break free of all bounds and develop something exciting. Something 
                <span className="text-[#006462]"> innovative</span>. Something which has the ability to create a better world!
              </p>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Code your way through this <span className="text-[#006462]">24 hours</span> hackathon where you focus your time, energy and <span className="text-[#006462]">enthusiasm</span> into building a product or service which can help create change.
              </p>
              
              <p className="text-gray-300 max-w-md">
                Because, using good software feels good. But building one feels even better!
              </p>
            </div>
            
            {/* MIDDLE FLEX - Logo and circular design with rotation */}
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                {/* Outer circle with animation */}
                <div className="absolute inset-0 rounded-full border-2 border-gray-700 opacity-70"></div>
                
                {/* Rotating elements */}
                <div className="absolute inset-0 overflow-hidden animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="w-full h-full rounded-full border-4 border-gray-700 border-b-transparent border-l-transparent rotate-45"></div>
                </div>
                <div className="absolute inset-0 overflow-hidden animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                  <div className="w-full h-full rounded-full border-4 border-gray-700 border-t-transparent border-r-transparent -rotate-45"></div>
                </div>
                
                {/* Inner circles with pulse */}
                <div className="absolute inset-4 rounded-full border-2 border-gray-600 opacity-70 animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute inset-10 rounded-full border-2 border-gray-600 opacity-80 animate-pulse" style={{ animationDuration: '6s' }}></div>
                <div className="absolute inset-16 rounded-full border border-gray-500 opacity-50"></div>
                
                {/* Tech lines - radial */}
                <div className="absolute h-px w-full bg-[#006462]/20 top-1/2 left-0 transform rotate-45"></div>
                <div className="absolute h-px w-full bg-[#006462]/20 top-1/2 left-0 transform -rotate-45"></div>
                <div className="absolute h-px w-full bg-[#006462]/20 top-1/2 left-0"></div>
                <div className="absolute h-full w-px bg-[#006462]/20 top-0 left-1/2"></div>
                
                {/* Logo inside - tech inspired */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 w-40 h-40">
                    <div className="border-2 border-[#006462] flex items-center justify-center rounded-sm">
                      <span className="text-[#006462] text-5xl font-bold">H</span>
                    </div>
                    <div className="border-2 border-[#006462]" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
                    <div className="border-2 border-[#006462] rounded-full"></div>
                    <div className="border-2 border-[#006462]" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 33% 50%)' }}></div>
                  </div>
                </div>
                
                {/* Tech dots */}
                <div className="absolute w-2 h-2 bg-[#006462] rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                <div className="absolute w-2 h-2 bg-[#006462] rounded-full bottom-0 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                <div className="absolute w-2 h-2 bg-[#006462] rounded-full top-1/2 left-0 transform -translate-y-1/2 animate-pulse"></div>
                <div className="absolute w-2 h-2 bg-[#006462] rounded-full top-1/2 right-0 transform -translate-y-1/2 animate-pulse"></div>
              </div>
            </div>
            
            {/* RIGHT FLEX - Buttons in curved arrangement */}
            <div className="md:w-1/3 flex flex-col items-start">
              <div className="flex flex-col md:gap-10 gap-4 mt-4 relative">
                {/* Button 1 - Register */}
                <button 
                  onClick={() => openModal('register')}
                  className="flex w-[300px] items-center gap-4 border border-[#006462] rounded-full py-3 px-6 text-white hover:bg-[#006462]/10 transition-all transform justify-start"
                >
                  <Plus size={20} className="text-[#006462]" />
                  <span className="text-left">REGISTER</span>
                </button>
                
                {/* Button 2 - FAQ (Shifted Right) */}
                <button 
                  onClick={() => openModal('faq')}
                  className="flex w-[300px] items-center gap-4 border border-[#006462] rounded-full py-3 px-6 text-white hover:bg-[#006462]/10 transition-all transform justify-start md:ml-10"
                >
                  <HelpCircle size={20} className="text-[#006462]" />
                  <span className="flex-grow text-left">FAQ</span>
                </button>

                {/* Button 3 - Rules (Shifted More to Right) */}
                <button 
                  onClick={() => openModal('rules')}
                  className="flex w-[300px] items-center gap-4 border border-[#006462] rounded-full py-3 px-6 text-white hover:bg-[#006462]/10 transition-all transform justify-start md:ml-10"
                >
                  <FileText size={20} className="text-[#006462]" />
                  <span className="flex-grow text-left">Rules, T&C</span>
                </button>
                
                {/* Button 4 - Sponsors (Aligned Back to Left) */}
                <button 
                  onClick={() => openModal('sponsors')}
                  className="flex w-[300px] items-center gap-4 border border-[#006462] rounded-full py-3 px-6 text-white hover:bg-[#006462]/10 transition-all transform justify-start"
                >
                  <Award size={20} className="text-[#006462]" />
                  <span className="flex-grow text-left">SPONSORS</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Tech decorative elements */}
          <div className="absolute top-1/4 left-10 w-16 h-px bg-[#006462]/30 animate-pulse"></div>
          <div className="absolute top-1/3 right-10 w-24 h-px bg-[#006462]/30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-20 w-20 h-px bg-[#006462]/30 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-20 w-10 h-px bg-[#006462]/30 animate-pulse"></div>
          
          {/* Tech grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
              {[...Array(13)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full w-px bg-[#006462] left-0" style={{ left: `${(i/12)*100}%` }}></div>
              ))}
              {[...Array(13)].map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full h-px bg-[#006462] top-0" style={{ top: `${(i/12)*100}%` }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom geometric line */}
        <div className="mt-20 w-full h-8 relative">
          <div className="absolute left-0 w-1/6 h-1 bg-[#006462] bottom-6"></div>
          <div className="absolute left-[calc(1/6*100%)] w-[calc(1/12*100%)] h-8 bg-[#006462] skew-x-[-45deg] origin-top-left"></div>
          <div className="absolute left-[calc(5/12*100%)] right-[calc(5/12*100%)] h-1 bg-[#006462] bottom-6"></div>
          <div className="absolute right-[calc(1/6*100%)] w-[calc(1/12*100%)] h-8 bg-[#006462] skew-x-[45deg] origin-top-right"></div>
          <div className="absolute right-0 w-1/6 h-1 bg-[#006462] bottom-6"></div>
        </div>
      </main>

      {/* Modal Windows */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-white/20 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto scrollbar-hide">
            <div className="sticky bg-[#006462] flex justify-between items-center p-4">
              <h2 className="text-xl font-bold text-white">
                {activeModal === 'register' && 'Registration'}
                {activeModal === 'faq' && 'Frequently Asked Questions'}
                {activeModal === 'rules' && 'Rules & Terms and Conditions'}
                {activeModal === 'sponsors' && 'Our Sponsors'}
              </h2>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-white p-1"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {activeModal === 'register' && (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Team Leader Email</label>
                    <input type="email" className="w-full bg-black border border-gray-100 rounded-md p-2 text-white" />
                  </div>
                  <button className="w-full bg-[#006462] hover:bg-[#006462]/80 text-black font-bold py-2 rounded-md mt-4">Submit Registration</button>
                </div>
              )}
              
              {activeModal === 'faq' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#006462] font-bold mb-2">What is HashHacks?</h3>
                    <p className="text-gray-300">HashHacks is a 24-hour hackathon where teams work together to build innovative software solutions to real-world problems.</p>
                  </div>
                  <div>
                    <h3 className="text-[#006462] font-bold mb-2">Who can participate?</h3>
                    <p className="text-gray-300">Students, professionals, and anyone interested in technology can participate. Teams can have 1-4 members.</p>
                  </div>
                  <div>
                    <h3 className="text-[#006462] font-bold mb-2">Is there an entry fee?</h3>
                    <p className="text-gray-300">No, participation is completely free of charge.</p>
                  </div>
                  <div>
                    <h3 className="text-[#006462] font-bold mb-2">What should I bring?</h3>
                    <p className="text-gray-300">Your laptop, charger, and creative ideas! Food and beverages will be provided.</p>
                  </div>
                  <div>
                    <h3 className="text-[#006462] font-bold mb-2">Are there prizes?</h3>
                    <p className="text-gray-300">Yes, winning teams will receive exciting prizes and opportunities for further development of their projects.</p>
                  </div>
                </div>
              )}
              
              {activeModal === 'rules' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#006462] text-xl font-bold mb-2">General Rules</h3>
                    <p className="text-gray-300 space-y-2">
                      Please refer to the Devfolio page for a much more updated list of rules. Participants must code overnight to develop a product. The hackathon is open theme, and the work must be original. Plagiarism will lead to immediate disqualification. Any illegal activity (drinking, smoking etc. within campus) is prohibited and will be dealt with seriously. Participants are requested to abide by the CONVOKE 6.0 Code of Conduct.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#006462] text-xl font-bold mb-2">Schedule</h3>
                    <p className="text-gray-300 space-y-2">
                      The complete schedule is available on Convoke website!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#006462] text-xl font-bold mb-2">Evaluation</h3>
                    <p className="text-gray-300 space-y-2">
                      Through continuous evaluation, mentorship and feedback mechanisms; we aim to ensure that thorough analysis is performed and teams are judged accordingly. We will also try to automate some of the judging processes such as code quality through Github bots and ensure smooth running of the hackathon via bots on other platforms as well. The decision of the judges will be final and binding.
                    </p>
                  </div>
                </div>
              )}
              
              {activeModal === 'sponsors' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-700 rounded-lg p-4 text-center relative overflow-hidden">
                      <div className="w-16 h-16 bg-[#006462] rounded-full mx-auto mb-4 flex items-center justify-center relative">
                        <span className="text-2xl font-bold">S1</span>
                        
                      </div>
                      <h3 className="text-xl font-bold mb-2">WeDo</h3>
                      <p className="text-gray-400">Platinum Sponsor</p>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-4 text-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                      </div>
                      <div className="w-16 h-16 bg-[#006462] rounded-full mx-auto mb-4 flex items-center justify-center relative">
                        <span className="text-2xl font-bold">S2</span>
                        
                      </div>
                      <h3 className="text-xl font-bold mb-2">WeDo</h3>
                      <p className="text-gray-400">Gold Sponsor</p>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-4 text-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                      </div>
                      <div className="w-16 h-16 bg-[#006462] rounded-full mx-auto mb-4 flex items-center justify-center relative">
                        <span className="text-2xl font-bold">S3</span>
                        
                      </div>
                      <h3 className="text-xl font-bold mb-2">WeDo</h3>
                      <p className="text-gray-400">Silver Sponsor</p>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-4 text-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                      </div>
                      <div className="w-16 h-16 bg-[#006462] rounded-full mx-auto mb-4 flex items-center justify-center relative">
                        <span className="text-2xl font-bold">S4</span>
                        
                      </div>
                      <h3 className="text-xl font-bold mb-2">WeDo</h3>
                      <p className="text-gray-400">Silver Sponsor</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}