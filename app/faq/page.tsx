import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Nihon K9 training services for Japanese dog breeds.",
};

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Common questions about our training services.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <dl className="divide-y divide-border">
          <div className="py-6">
            <dt className="font-semibold text-foreground mb-2">
              Do you only work with Japanese breeds?
            </dt>
            <dd className="text-muted leading-relaxed">
              Yes. Our methods are specifically developed for Nihon Ken—Shiba Inu, Akita, Kai Ken, Shikoku, Hokkaido, and Kishu. These breeds share traits that require a specialized approach.
            </dd>
          </div>

          <div className="py-6">
            <dt className="font-semibold text-foreground mb-2">
              Do you offer board-and-train?
            </dt>
            <dd className="text-muted leading-relaxed">
              No. We believe lasting results come from training the handler alongside the dog. You&apos;ll be an active participant in every session.
            </dd>
          </div>

          <div className="py-6">
            <dt className="font-semibold text-foreground mb-2">
              Can you help with behavioral issues?
            </dt>
            <dd className="text-muted leading-relaxed">
              It depends on the issue. We address many common Nihon Ken challenges—reactivity, recall, impulse control—through our foundation work. Reach out and we can discuss your specific situation.
            </dd>
          </div>

          <div className="py-6">
            <dt className="font-semibold text-foreground mb-2">
              Where are sessions held?
            </dt>
            <dd className="text-muted leading-relaxed">
              We offer both in-person sessions in the San Francisco Bay Area and remote coaching via video. Many clients use a combination of both.
            </dd>
          </div>
        </dl>

        <div className="mt-12 text-center">
          <p className="text-muted mb-6">Have a question that&apos;s not answered here?</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white uppercase tracking-wide text-sm font-semibold rounded-md hover:bg-accent-hover transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
