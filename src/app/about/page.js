import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-[var(--foreground)] px-4">
      <h1 className="text-8xl font-bold mb-8 font-cursive">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white/80 p-8 rounded-xl shadow max-w-3xl">
        <div className="w-80 flex-shrink-0 flex justify-center">
          <Image
            src="/profile.jpeg" // Place your photo in /public/profile.jpg
            alt="Ysabella Vargas"
            width={300}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="text-xl font-serif text-center md:text-left">
          <p>
            Hi! I'm Yssie, a Junior at Tufts University, pursuing degrees in Computer Science and Biology. I am passionate about building technology to advance medical research and improve healthcare systems. My interests lie at the intersection of data science, bioinformatics, and software development. <br /> <br />
            Outside of academics, I enjoy exploring creative projects, like game design and choreography. I spend my free time listening to music, dancing, reading and spending time with friends and family.
          </p>
        </div>
      </div>
      
    </div>
  );
}