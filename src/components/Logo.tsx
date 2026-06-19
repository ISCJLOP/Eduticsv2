import React from 'react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Laptop Base */}
        <path
          d="M10 75 L20 55 L80 55 L90 75 Z"
          stroke="#F27121"
          strokeWidth="4"
          strokeLinejoin="round"
          fill="white"
        />
        <path
          d="M10 75 L90 75 L90 80 L10 80 Z"
          fill="#F27121"
        />
        {/* Keyboard lines */}
        <path
          d="M25 60 L75 60 M22 65 L78 65 M19 70 L81 70"
          stroke="#F27121"
          strokeWidth="2"
        />
        {/* Touchpad */}
        <rect x="40" y="76" width="20" height="3" fill="white" />

        {/* Laptop Screen */}
        <rect
          x="20"
          y="20"
          width="60"
          height="35"
          rx="2"
          stroke="#F27121"
          strokeWidth="4"
          fill="none"
        />

        {/* Screen Content - Circuit/Tree */}
        <path
          d="M50 55 L50 25"
          stroke="#F27121"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M50 45 L35 35 L35 28"
          stroke="#F27121"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M50 45 L65 35 L65 28"
          stroke="#F27121"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M42 40 L28 40 L28 32"
          stroke="#F27121"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M58 40 L72 40 L72 32"
          stroke="#F27121"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        
        {/* Dots */}
        <circle cx="50" cy="25" r="3" fill="#F27121" />
        <circle cx="35" cy="28" r="3" fill="#F27121" />
        <circle cx="65" cy="28" r="3" fill="#F27121" />
        <circle cx="28" cy="32" r="2.5" fill="#F27121" />
        <circle cx="72" cy="32" r="2.5" fill="#F27121" />
        
        {/* Base connection */}
        <circle cx="50" cy="55" r="2" fill="#F27121" />
      </svg>
      <span className="font-heading font-extrabold text-[#F27121] text-2xl tracking-tight hidden sm:block">
        EduTics Tapachula
      </span>
    </div>
  );
}

export default Logo;
