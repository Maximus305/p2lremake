import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const Page = () => {
  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 text-white backdrop-blur-sm bg-black/10 z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.svg" alt="Logo" width={28} height={28} />
          <span className="font-semibold text-base">PDF2LLM.AI</span>
        </div>

        {/* Sign Up / Sign In Buttons */}
        <div className="flex space-x-3">
          <button className="text-sm font-semibold hover:text-gray-300 transition-colors">
            Sign Up
          </button>
          <button className="text-sm font-semibold hover:text-gray-300 transition-colors">
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden" style={{ paddingTop: '112px' }}>
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black" />
        
        {/* Glow effects */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -top-1/4 left-1/3 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

        {/* Main Content */}
        <div className="text-center mb-32 relative z-10">
          <h1 className="text-white text-5xl font-semibold mb-4 drop-shadow-2xl">
            Transform PDFs into Precise Markdown.
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Experience the world&apos;s most accurate PDF to Markdown<br />
            conversion, powered by ChatGPT.
          </p>
          <button className="px-8 py-3 text-white bg-transparent border-2 border-[#D7524A]/70 rounded-lg 
            hover:bg-[#D7524A]/10 transition-all duration-300 relative group">
            <div className="absolute inset-0 rounded-lg bg-[#D7524A]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Get Started</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-medium text-center mb-20">
            We convert pdfs <span className="bg-[#D7524A]/20 px-2 rounded">beyond</span><br />
            text with <span className="font-bold">AI</span>.
          </h2>

          <div className="flex justify-between items-center gap-12">
            {/* PDF Document Illustration */}
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
                <div className="space-y-2 mb-6">
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                  <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                </div>
                <div className="border border-gray-200 rounded p-4">
                  <div className="flex h-32 gap-2">
                    <div className="w-1/4 bg-green-400 rounded-t self-end h-1/2"></div>
                    <div className="w-1/4 bg-[#D7524A] rounded-t self-end h-2/3"></div>
                    <div className="w-1/4 bg-blue-400 rounded-t self-end h-full"></div>
                    <div className="w-1/4 bg-purple-400 rounded-t self-end h-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="w-24 h-px bg-gray-300 relative">
              <div className="absolute -right-2 -top-1 w-3 h-3 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
            </div>

            {/* Status Card */}
            <div className="flex-1">
              <div className="bg-gray-900 rounded-lg p-8 space-y-8 shadow-lg border border-[#D7524A]">
                <div className="flex items-center justify-between text-white">
                  <span>Text converted:</span>
                  <Check className="text-green-400" size={24} />
                </div>
                <div className="flex items-center justify-between text-white">
                  <span>Charts converted</span>
                  <Check className="text-green-400" size={24} />
                </div>
                <div className="flex items-center justify-between text-white">
                  <span>Images Described</span>
                  <Check className="text-green-400" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Section */}
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
        <div className="max-w-6xl w-full space-y-8">
          <h2 className="text-white text-5xl font-medium text-center mb-16">
            Use our API to convert any amount of pages
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Loading Card */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="space-y-4">
                <p className="text-white text-lg">Loading pdfs</p>
                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#D7524A] to-[#D7524A] rounded-full transform transition-transform duration-1000 animate-progress"></div>
                </div>
                <p className="text-white text-right">99%</p>
              </div>
            </div>

            {/* Limits Card */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <h3 className="text-white text-6xl font-bold">
                1k pages +<br />limits
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add the animation keyframe
const styles = `
@keyframes progress {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}

.animate-progress {
  animation: progress 2s ease-in-out infinite;
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Page;