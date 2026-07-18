import React from 'react';

interface SNPLogoProps {
  className?: string;
  showText?: boolean;
}

export default function SNPLogo({ className = "w-24 h-24", showText = true }: SNPLogoProps) {
  return (
    <div className={`relative group select-none transition-all duration-500 hover:scale-105 active:scale-95 ${className}`} id="snp-official-logo">
      <svg 
        viewBox="0 0 500 560" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_12px_24px_rgba(254,189,17,0.25)] transition-all duration-500"
      >
        <defs>
          {/* Flame flicker keyframe animation */}
          <style>
            {`
              @keyframes flicker {
                0%, 100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
                50% { transform: scale(1.05) rotate(1deg); filter: brightness(1.2); }
              }
              @keyframes hoverFloat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-4px); }
              }
              @keyframes plateTilt {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-2px) rotate(-1deg); }
              }
              .animate-flame-1 {
                animation: flicker 1.8s infinite ease-in-out;
                transform-origin: 360px 150px;
              }
              .animate-flame-2 {
                animation: flicker 1.4s infinite ease-in-out;
                transform-origin: 390px 140px;
              }
              .animate-chef-hat {
                animation: hoverFloat 4s infinite ease-in-out;
              }
              .animate-plate-pizza {
                animation: plateTilt 3.5s infinite ease-in-out;
              }
            `}
          </style>
        </defs>

        {/* 1. Yellow Background Circle */}
        <circle 
          cx="210" 
          cy="185" 
          r="135" 
          fill="#FEB109" 
          stroke="#111111" 
          strokeWidth="6" 
          className="transition-colors duration-500 group-hover:fill-[#FEBD11]"
        />

        {/* 2. Chef's Clothes (Red Jacket) */}
        <path 
          d="M 98,300 
             C 98,285 106,260 128,245
             C 142,235 160,230 185,230
             L 245,230
             C 270,230 288,235 302,245
             C 324,260 332,285 332,300
             C 332,315 320,325 310,325
             L 120,325
             C 110,325 98,315 98,300 Z" 
          fill="#E51F26" 
          stroke="#111111" 
          strokeWidth="6" 
          strokeLinejoin="round"
        />

        {/* Front Collar Overlay */}
        <path 
          d="M 175,230 
             C 175,248 195,258 215,258
             C 235,258 255,248 255,230" 
          fill="none" 
          stroke="#111111" 
          strokeWidth="6" 
          strokeLinecap="round"
        />

        {/* Chef Jacket Buttons */}
        <circle cx="215" cy="272" r="5" fill="#111111" />
        <circle cx="215" cy="288" r="5" fill="#111111" />

        {/* 3. Chef's Head & Ears */}
        {/* Ears */}
        <circle cx="150" cy="180" r="14" fill="#FEE3CF" stroke="#111111" strokeWidth="5" />
        <circle cx="280" cy="180" r="14" fill="#FEE3CF" stroke="#111111" strokeWidth="5" />
        
        {/* Face Oval */}
        <ellipse cx="215" cy="180" rx="65" ry="58" fill="#FEE3CF" stroke="#111111" strokeWidth="6" />

        {/* 4. Chef's Facial Features */}
        {/* Eyes */}
        <circle cx="190" cy="165" r="5.5" fill="#111111" />
        <circle cx="240" cy="165" r="5.5" fill="#111111" />
        
        {/* Eyebrows */}
        <path d="M 178,154 C 182,150 198,150 202,154" stroke="#111111" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        <path d="M 228,154 C 232,150 248,150 252,154" stroke="#111111" strokeWidth="5.5" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path d="M 215,164 C 220,164 223,170 219,176 C 217,179 213,179 211,176" fill="#FFAF99" stroke="#111111" strokeWidth="3" />

        {/* Smile */}
        <path d="M 195,192 C 205,204 225,204 235,192" fill="none" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />

        {/* Symmetrical Handlebar Mustache */}
        <path 
          d="M 215,188 
             C 192,184 170,175 160,192
             C 152,205 168,212 178,205
             C 188,198 202,192 215,192
             C 228,192 242,198 252,205
             C 262,212 278,205 270,192
             C 260,175 238,184 215,188 Z" 
          fill="#111111" 
          stroke="#111111" 
          strokeWidth="3.5" 
          strokeLinejoin="round"
        />

        {/* 5. Chef's Hat (Animate float) */}
        <g className="animate-chef-hat">
          {/* Main puff */}
          <path 
            d="M 152,122
               C 134,122 118,102 124,78
               C 128,62 142,48 158,48
               C 162,32 182,16 208,16
               C 234,16 250,28 258,40
               C 272,30 292,34 300,54
               C 308,72 298,98 286,112
               C 288,122 284,122 282,122
               Z" 
            fill="#FFFFFF" 
            stroke="#111111" 
            strokeWidth="6.5" 
            strokeLinejoin="round"
          />
          {/* Hat band / base */}
          <path 
            d="M 148,122
               L 282,122
               C 282,130 270,138 260,138
               L 170,138
               C 160,138 148,130 148,122 Z" 
            fill="#FFFFFF" 
            stroke="#111111" 
            strokeWidth="6" 
            strokeLinejoin="round"
          />
          {/* Inside hat folds lines */}
          <path d="M 174,106 C 182,75 192,75 195,122" stroke="#111111" strokeWidth="5.5" strokeLinecap="round" fill="none" />
          <path d="M 218,106 C 224,65 234,65 238,122" stroke="#111111" strokeWidth="5.5" strokeLinecap="round" fill="none" />
          <path d="M 252,108 C 258,80 264,80 266,122" stroke="#111111" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Arms / Hands */}
        {/* Right sleeve details */}
        <path d="M 100,290 C 85,285 75,310 90,325" stroke="#111111" strokeWidth="5" fill="none" />

        {/* 6. Extended Left Arm, Hand, Plate, Pizza Slice, and Flames */}
        <g className="animate-plate-pizza">
          {/* Left Extended Arm (Red) */}
          <path 
            d="M 295,248 
               C 320,248 350,230 380,185
               L 395,195
               C 365,248 335,270 295,260 Z" 
            fill="#E51F26" 
            stroke="#111111" 
            strokeWidth="6" 
            strokeLinejoin="round"
          />
          
          {/* Left Hand Fingers holding plate */}
          <path d="M 370,185 C 382,185 392,192 384,198" stroke="#111111" strokeWidth="5.5" fill="#FEE3CF" />

          {/* White Oval Plate */}
          <ellipse cx="388" cy="168" rx="84" ry="18" fill="#FFFFFF" stroke="#111111" strokeWidth="6" />
          <ellipse cx="388" cy="168" rx="74" ry="13" fill="none" stroke="#DCDCDC" strokeWidth="2" />

          {/* FLAMES (Blowing backwards to the right) */}
          <path 
            className="animate-flame-1"
            d="M 405,155
               C 440,110 470,120 495,115
               C 475,135 480,145 490,155
               C 460,152 445,170 422,160 Z" 
            fill="#E51F26" 
            stroke="#111111" 
            strokeWidth="4" 
            strokeLinejoin="round"
          />
          <path 
            className="animate-flame-2"
            d="M 412,154
               C 438,125 455,130 478,125
               C 462,140 465,148 472,152
               C 450,150 438,162 422,156 Z" 
            fill="#FEB109" 
            stroke="#111111" 
            strokeWidth="3.5" 
            strokeLinejoin="round"
          />

          {/* Slice of Pizza */}
          <path 
            d="M 334,166 
               L 412,130
               C 424,142 426,160 416,166
               Z" 
            fill="#FFE169" 
            stroke="#111111" 
            strokeWidth="5.5" 
            strokeLinejoin="round"
          />

          {/* Pizza Crust (Darker Brown/Orange) */}
          <path 
            d="M 412,130
               C 424,142 426,160 416,166" 
            fill="none" 
            stroke="#C06C2D" 
            strokeWidth="8" 
            strokeLinecap="round"
          />
          <path 
            d="M 412,130
               C 424,142 426,160 416,166" 
            fill="none" 
            stroke="#111111" 
            strokeWidth="5.5" 
            strokeLinecap="round"
          />

          {/* Pepperoni Slices & Mushroom toppings */}
          <circle cx="365" cy="158" r="5" fill="#E51F26" stroke="#111111" strokeWidth="2.5" />
          <circle cx="395" cy="144" r="5" fill="#E51F26" stroke="#111111" strokeWidth="2.5" />
          <circle cx="380" cy="152" r="4" fill="#E51F26" stroke="#111111" strokeWidth="2" />
          
          {/* Mushroom Cap shapes */}
          <path d="M 348,154 C 348,150 354,150 354,154" stroke="#111111" strokeWidth="2" fill="none" />
          <path d="M 388,158 C 388,154 394,154 394,158" stroke="#111111" strokeWidth="2" fill="none" />
        </g>

        {/* ========================================== */}
        {/* TEXTS below (conditional on showText prop) */}
        {/* ========================================== */}
        {showText && (
          <g id="logo-branding-texts">
            {/* A. SIZZLER curved text */}
            {/* Textpath helper arc */}
            <path id="sizzlerPath" d="M 75,372 Q 220,344 365,372" fill="none" />
            <text fontFamily="'Impact', 'Arial Black', sans-serif" fontSize="42" fontWeight="900" letterSpacing="4" fill="#FFFFFF" stroke="#111111" strokeWidth="4" strokeLinejoin="miter">
              <textPath href="#sizzlerPath" startOffset="50%" textAnchor="middle">
                SIZZLER
              </textPath>
            </text>

            {/* B. 'n' in Yellow Circle */}
            <circle cx="218" cy="386" r="18" fill="#FEB109" stroke="#111111" strokeWidth="4.5" />
            <text x="218" y="393" fontFamily="'Bebas Neue', 'Georgia', serif" fontSize="24" fontWeight="bold" fill="#111111" textAnchor="middle">
              n
            </text>

            {/* C. PIZZA curved text */}
            <path id="pizzaPath" d="M 35,456 Q 215,415 395,456" fill="none" />
            <text fontFamily="'Impact', 'Arial Black', sans-serif" fontSize="68" fontWeight="900" letterSpacing="6" fill="#FFFFFF" stroke="#111111" strokeWidth="5" strokeLinejoin="miter">
              <textPath href="#pizzaPath" startOffset="50%" textAnchor="middle">
                PIZZA
              </textPath>
            </text>

            {/* D. Yellow CAFE Ribbon / Banner */}
            <g id="cafe-banner" transform="translate(0, 10)">
              {/* Swallowtail left */}
              <path d="M 125,488 L 105,473 L 125,458 L 140,466 Z" fill="#FEB109" stroke="#111111" strokeWidth="4.5" strokeLinejoin="round" />
              {/* Swallowtail right */}
              <path d="M 310,488 L 330,473 L 310,458 L 295,466 Z" fill="#FEB109" stroke="#111111" strokeWidth="4.5" strokeLinejoin="round" />

              {/* Main Banner body */}
              <path 
                d="M 132,464 
                   C 185,454 250,454 303,464
                   L 293,495
                   C 245,485 190,485 142,495 Z" 
                fill="#FEB109" 
                stroke="#111111" 
                strokeWidth="5" 
                strokeLinejoin="round"
              />
              
              {/* CAFE Label */}
              <path id="cafePath" d="M 140,480 C 185,472 250,472 295,480" fill="none" />
              <text fontFamily="'Arial Black', sans-serif" fontSize="24" fontWeight="900" fill="#FFFFFF" letterSpacing="5">
                <textPath href="#cafePath" startOffset="50%" textAnchor="middle" dy="-2">
                  CAFE
                </textPath>
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
