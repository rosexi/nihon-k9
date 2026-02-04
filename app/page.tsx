import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                Training for the{" "}
                <span className="text-accent">Independent Spirit</span>
              </h1>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Specialized training for Nihon Ken. We understand these dogs
                think differently—and we train differently to match.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/philosophy"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
                >
                  Our Approach
                </Link>
                <Link
                  href="/program"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-background transition-colors"
                >
                  View Programs
                </Link>
              </div>
            </div>
            <div>
              <ImagePlaceholder
                label="Hero Image"
                aspectRatio="square"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ImagePlaceholder
              label="Training Image"
              aspectRatio="video"
              className="shadow-md"
            />
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

      {/* Programs Preview */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-foreground">
            Our Programs
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Long-term programs designed for lasting results with independent breeds.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border">
              <ImagePlaceholder
                label="Puppy Program"
                aspectRatio="video"
                className="mb-6"
              />
              <h3 className="text-xl font-semibold mb-2 text-accent">
                Puppy Foundation
              </h3>
              <p className="text-sm text-muted mb-4">1-Year Program</p>
              <p className="text-muted leading-relaxed">
                Build the foundation for a lifetime of success. We work with
                your puppy through their critical first year, establishing the
                relationship and skills they need to thrive.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border">
              <ImagePlaceholder
                label="Service Dog Program"
                aspectRatio="video"
                className="mb-6"
              />
              <h3 className="text-xl font-semibold mb-2 text-accent">
                Service Dog
              </h3>
              <p className="text-sm text-muted mb-4">2-Year Program</p>
              <p className="text-muted leading-relaxed">
                Comprehensive task training and public access preparation. We
                work with your dog from puppyhood through full certification.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/program"
              className="text-accent hover:text-accent-hover font-medium"
            >
              Learn more about our programs &rarr;
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
