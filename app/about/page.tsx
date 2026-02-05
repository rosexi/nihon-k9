import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the trainer behind Nihon K9. Specialized experience with Japanese dog breeds including Shiba Inu, Akita, Shikoku, and more.",
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            About Me
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            The human behind Nihon K9.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="aspect-[4/5] relative rounded-xl overflow-hidden shadow-md">
            <Image
              src="/about.jpg"
              alt="Trainer with Shikoku Ken"
              fill
              className="object-cover"
            />
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Hi, I&apos;m Rose 👋
            </h2>
            <div className="prose prose-lg text-muted space-y-4">
              <p className="leading-relaxed">
                I started Nihon K9 because I saw a gap—too many trainers
                applying cookie-cutter methods to dogs that think differently.
                Japanese breeds need an approach that respects their
                intelligence and independence.
              </p>
              <p className="leading-relaxed">
                My journey with Nihon Ken began with my own Shikoku, and I
                quickly learned that traditional training advice didn&apos;t
                work. Through years of hands-on experience and study, I
                developed methods that build genuine partnership rather than
                forced compliance—with great inspiration from Michael Ellis School
                and Okami Canine.
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Experience &amp; Qualifications
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-muted">8+ years working with Japanese breeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-muted">Trained Shiba Inu, Akita Inu, and Shikoku Ken</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-muted">Competitive titles in AKC Scentwork, Obedience, and Agility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-muted">NePoPo Silver Certified Trainer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
