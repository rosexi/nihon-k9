import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Our specialized training programs for Nihon Ken: Puppy Foundation (1 year) and Service Dog (2 years). Limited enrollment, exceptional results.",
};

export default function Program() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Programs
            </h1>
            <p className="text-xl text-muted mb-4 leading-relaxed">
              We take few students and work exclusively with Nihon Ken.
            </p>
            <p className="text-muted leading-relaxed">
              Our long-term programs allow us to build the deep foundation these
              breeds require. Quick fixes don&apos;t work with independent
              dogs—lasting results take time and consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-16">
          {/* Puppy Foundation Program */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <ImagePlaceholder
              label="Puppy Foundation"
              aspectRatio="video"
              className="shadow-lg rounded-xl"
            />
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Puppy Foundation Program
                </h2>
                <span className="text-sm font-medium bg-warm text-accent px-3 py-1 rounded-full">
                  1 Year
                </span>
              </div>
              <p className="text-muted leading-relaxed mb-6">
                The first year of a Nihon Ken&apos;s life shapes everything that
                follows. This program works with your puppy through their
                critical developmental periods, building:
              </p>
              <ul className="space-y-4 text-muted mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                  <span>
                    <strong className="text-foreground">
                      Relationship foundation
                    </strong>{" "}
                    — Trust and engagement with their handler
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Core skills</strong> —
                    Reliable basics that form the building blocks for advanced
                    work
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Socialization</strong> —
                    Confident exposure to environments, people, and situations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Impulse control</strong>{" "}
                    — Managing prey drive and teaching thoughtful responses
                  </span>
                </li>
              </ul>
              <p className="text-sm text-muted bg-background border border-border rounded-lg p-4">
                Puppies can begin at any age. The earlier we start, the stronger
                the foundation.
              </p>
            </div>
          </div>

          {/* Service Dog Program */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Service Dog Program
                </h2>
                <span className="text-sm font-medium bg-warm text-accent px-3 py-1 rounded-full">
                  2 Years
                </span>
              </div>
              <p className="text-muted leading-relaxed mb-6">
                A comprehensive program preparing Nihon Ken for service work.
                This includes both task training and public access preparation:
              </p>
              <ul className="space-y-4 text-muted mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Task training</strong> —
                    Specific skills tailored to your needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Public access</strong> —
                    Calm, focused behavior in any environment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                  <span>
                    <strong className="text-foreground">
                      Advanced obedience
                    </strong>{" "}
                    — Rock-solid reliability under distraction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Handler training</strong>{" "}
                    — You learn alongside your dog
                  </span>
                </li>
              </ul>
              <div className="bg-warm/50 border border-warm rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <strong>Requirement:</strong> Dogs must begin this program
                  before 1 year of age. Early enrollment ensures we can build
                  the necessary foundation for service work.
                </p>
              </div>
            </div>
            <ImagePlaceholder
              label="Service Dog Training"
              aspectRatio="video"
              className="shadow-lg rounded-xl order-1 md:order-2"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Interested in Working With Us?
            </h3>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              We&apos;d love to hear about your dog and discuss whether our
              programs might be a good fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
