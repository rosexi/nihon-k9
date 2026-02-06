import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Specialized training services for Nihon Ken: Puppy Foundation (1 year), Service Dog (2 years), and Private Training for graduates. Limited enrollment.",
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Services
            </h1>
            <p className="text-xl text-muted mb-4 leading-relaxed">
              We take few students and work exclusively with Nihon Ken.
            </p>
            <p className="text-muted leading-relaxed">
              Our long-term approach allows us to build the deep foundation these
              breeds require. Quick fixes don&apos;t work with independent
              dogs—lasting results take time and consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="space-y-8">
          {/* Foundation Program */}
          <div className="bg-card border border-border rounded-md p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Foundation Program
              </h2>
              <span className="text-sm font-medium bg-accent/10 text-accent px-3 py-1 rounded">
                1+ Years
              </span>
            </div>
            <p className="text-muted leading-relaxed mb-4 max-w-3xl">
              We build the critical foundations that shape your dog into their best self—whatever that looks like for you. Whether your goal is a competitive sport dog or the ultimate companion at home, we work together to define your vision and personalize the program around it.
            </p>
            <p className="text-muted leading-relaxed mb-6 max-w-3xl">
              The program typically runs for one year of weekly sessions, with a mix of in-person training, Zoom check-ins, and unlimited messaging support. We&apos;re in it together every step of the way to build your dream furry friend.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Socialization</strong> — Confident exposure to new environments, people, and animals
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Impulse Control</strong> — Managing prey drive and reactivity thoughtfully
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Building Drive</strong> — Developing motivation and enthusiasm for work
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Communication</strong> — Clear, consistent dialogue between you and your dog
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Reward Clarity</strong> — Your dog understands exactly what earns reinforcement
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Engagement</strong> — A dog who chooses to check in and work with you
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Relationship</strong> — Trust and connection as the foundation of everything
                </span>
              </div>
            </div>
          </div>

          {/* Service Dog Program */}
          <div className="bg-card border border-border rounded-md p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Service Dog Program
              </h2>
              <span className="text-sm font-medium bg-accent/10 text-accent px-3 py-1 rounded">
                2+ Years
              </span>
            </div>
            <p className="text-muted leading-relaxed mb-4 max-w-3xl">
              This program builds upon the Foundation Program. We develop rock-solid task work with guidance from your medical provider to ensure you&apos;re set up for success. We&apos;re building a bombproof working dog.
            </p>
            <p className="text-muted leading-relaxed mb-4 max-w-3xl">
              In addition to task training, we place heavy focus on public access—all facets of it. You&apos;ll have a dog who can be anywhere, performing tasks without distraction.
            </p>
            <p className="text-muted leading-relaxed mb-6 max-w-3xl">
              This is a very involved program. While your service dog is in training, we&apos;ll put ourselves in real-life scenarios together to proof behaviors and learnings—busy streets, restaurants, loud outdoor festivals, airports, and even in-flight.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Task Training</strong> — Reliable, precise tasks developed with your medical provider
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Focus Under Stress</strong> — Maintaining composure and performance in chaotic environments
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                <span className="text-muted">
                  <strong className="text-foreground">Public Access</strong> — Calm, confident behavior anywhere you need to go
                </span>
              </div>
            </div>
          </div>

          {/* Private Training */}
          <div className="bg-card border border-border rounded-md p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Private Training
            </h2>
            <p className="text-muted leading-relaxed mb-4 max-w-3xl">
              Personalized training sessions tailored to your specific goals. We work together to identify what you want to achieve and create a plan to get there.
            </p>
            <p className="text-muted leading-relaxed mb-6 max-w-3xl">
              Sessions are flexible—weekly or monthly depending on your needs—and focused on continued growth as you and your dog evolve together.
            </p>
            <div className="bg-accent/5 border border-accent/20 rounded-md p-4">
              <p className="text-sm text-foreground">
                <strong>Availability:</strong> Due to capacity, private training is only available to students graduating from one of our programs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-accent/5 border border-accent/20 rounded-md p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Interested in Working With Us?
            </h3>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              We&apos;d love to hear about your dog and discuss whether our
              services might be a good fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white uppercase tracking-wide text-sm font-semibold rounded-md hover:bg-accent-hover transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
