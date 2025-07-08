"use client"; 
import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';

function randomPercent() {
  return (Math.floor(Math.random() * 110) - 10)+ '%';
}


export default function Home() {

  const [isJumping, setIsJumping] = useState(false);
  const [credits, setCredits] = useState('');
  const [showCredits, setShowCredits] = useState(false);

  const handleJump = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 800); // match jump animation length
  };

  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    const newBlobs = Array(5).fill(null).map(() => ({
      width: 250 + Math.floor(Math.random() * 200),
      height: 250 + Math.floor(Math.random() * 200),
      top: randomPercent(),
      left: randomPercent(),
      opacity: 0.6 + Math.random() * 0.3,
      animationDuration: 15 + Math.random() * 7 + 's',
    }));
    setBlobs(newBlobs);
  }, []);

  useEffect(() => {
    if (showCredits && !credits) {
      fetch('/sheet-credits.txt')
        .then((res) => res.text())
        .then((text) => setCredits(text));
    }
  }, [showCredits, credits]);

  return (
    <div className="relative h-screen text-[var(--foreground)] overflow-hidden">

      {/* Blobs container */}
      <div className="fixed inset-x-0 inset-y-0 z-10 overflow-hidden">
        {blobs.map((blob, i) => (
          <div
            key={i}
            className="blob bg-[var(--color-accent)] rounded-full blur-3xl"
            style={{
              position: 'absolute',
              width: blob.width,
              height: blob.height,
              top: blob.top,
              left: blob.left,
              opacity: blob.opacity,
              animation: `moveBlob${i + 1} ${blob.animationDuration} linear infinite`,
            }}
          />
        ))}
      </div>


      {/* Main content */}
      {/* Two-column layout */}
      <main className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center h-screen gap-10">
        {/* Left - intro text */}
        <div className="flex flex-col gap-8 text-left max-w-5xl m-20 md:mr-8 menu-background">
          <h1 className="text-8xl font-bold font-cursive leading-tight animate-fadeIn">
            Hey, I'm Ysabella!
          </h1>
          <p className="text-xl leading-relaxed font-serif animate-delay-200 animate-fadeIn">
           A Computer Science & Biology student at Tufts University, passionate about building tech for healthcare innovation, exploring the intersection of data and medicine, and collaborating on creative projects. Feel free to explore my work and connect with me!
          </p>
        </div>

        {/* Right - placeholder for illustration or animation */}
       <div className="flex flex-col justify-center items-center">
          <div
            className={`sprite ${isJumping ? 'jump' : ''}`}
            onClick={handleJump}
          />
          <p className="text-lg text-black-300 dark:text-gray-400 mt-150 font-serif">
            Click the sprite to make it jump!
          </p>

          <button
            onClick={() => setShowCredits(!showCredits)}
            className="mt-2 text-lg text-black-300 underline font-serif"
          >
            {showCredits ? 'Hide Credits' : 'Show Sprite Credits'}
        </button>
           {showCredits && (
          <div className="absolute top-15 right-20 bg-white text-black rounded-xl shadow-lg p-4 w-140 h-50 overflow-y-scroll font-serif text-sm z-50 border border-gray-300">
            <button
            className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
          onClick={() => setShowCredits(false)}
            >
              ×
          </button>
          <pre className="whitespace-pre-wrap">{credits}</pre>
        </div>
        )}
        </div>
     
     
      </main>

    </div>

  );
}
