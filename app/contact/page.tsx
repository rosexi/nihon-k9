import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nihon K9 to discuss training for your Japanese dog breed. Contact us to learn about future availability.",
};

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Contact
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-lg font-semibold mb-4 text-foreground">
                Get in Touch
              </h2>
              <p className="text-muted mb-6 leading-relaxed">
                Reach out to discuss your dog, ask questions about our programs,
                or learn about future availability.
              </p>
              <a
                href="mailto:info@nihonk9.com"
                className="inline-flex items-center text-xl font-medium text-accent hover:text-accent-hover transition-colors"
              >
                info@nihonk9.com
              </a>
            </div>

            <div className="bg-warm/50 rounded-xl p-6">
              <h3 className="text-sm font-semibold mb-2 text-foreground">
                Current Availability
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                We are currently not accepting new clients. However, we
                encourage you to reach out—we can discuss your situation and
                determine fit for the future when a spot opens.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <ImagePlaceholder
              label="Contact Image"
              aspectRatio="video"
              className="shadow-md"
            />
            <ImagePlaceholder
              label="Location or Training"
              aspectRatio="video"
              className="shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
