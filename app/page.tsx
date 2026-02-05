import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center scale-150 md:scale-125">
          <Image
            src="/logo.png"
            alt=""
            width={1200}
            height={900}
            className="opacity-20 object-contain w-full h-full"
            priority
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-card/60 to-card/90" />
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Training for the{" "}
            <span className="text-accent">Independent Spirit</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
            Specialized training for Nihon Ken. We understand these dogs
            think differently—and we train differently to match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/philosophy"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
            >
              Our Approach
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-white/50 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/training.jpg"
                alt="Training a Nihon Ken"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Why Nihon Ken Require a Different Approach
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Shiba Inu. Akita. Kai Ken. Shikoku. Hokkaido. Kishu. These breeds
              share traits that make conventional training methods
              ineffective—independence, high prey drive, and sensitivity to
              pressure.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              They&apos;re not &quot;difficult&quot; dogs. They&apos;re
              intelligent dogs that require understanding.
            </p>
            <p className="text-muted leading-relaxed">
              At Nihon K9, we build relationships first. We create dogs who{" "}
              <em>want</em> to work with their handlers—not dogs who simply
              comply out of pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Proven Expertise with Japanese Breeds
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We&apos;ve trained many Japanese dogs including Shiba Inu, Akita Inu, and Shikoku Ken. Our graduates have gone on to make history for their breed in both sports and work.
              </p>
              <p className="text-muted leading-relaxed">
                We&apos;ve built young dogs into successful, competitive sports dogs—whether in agility, scentwork, barn hunt, or obedience—proving that Nihon Ken can excel when trained with the right approach.
              </p>
            </div>
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/expertise.jpg"
                alt="Shikoku Ken exploring outdoors"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-foreground">
            Our Services
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Long-term training designed for lasting results with independent breeds.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-2 text-accent">
                Foundation Program
              </h3>
              <p className="text-sm text-muted mb-4">1-Year Program</p>
              <p className="text-muted leading-relaxed">
                Build the foundation for a lifetime of success. We work with
                your puppy through their critical first year.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-2 text-accent">
                Service Dog
              </h3>
              <p className="text-sm text-muted mb-4">2-Year Program</p>
              <p className="text-muted leading-relaxed">
                Comprehensive task training and public access preparation from
                puppyhood through certification.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-2 text-accent">
                Private Training
              </h3>
              <p className="text-sm text-muted mb-4">Ongoing</p>
              <p className="text-muted leading-relaxed">
                Personalized sessions for graduates. Flexible scheduling
                to meet your evolving goals.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-accent hover:text-accent-hover font-medium"
            >
              Learn more about our services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="bg-warm/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Ready to Start the Journey?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            We&apos;d love to hear about your dog and discuss how we might work
            together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
