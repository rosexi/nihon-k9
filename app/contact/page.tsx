import type { Metadata } from "next";
import Link from "next/link";

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
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              We&apos;re Here to Help
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Whether you&apos;re researching training options or ready to get
              started, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-muted mb-8 leading-relaxed">
              Reach out to discuss your dog, ask questions about our approach,
              or learn about future availability. We respond to all inquiries
              within 48 hours.
            </p>

            <div className="space-y-6 mb-10">
              <a
                href="mailto:info@nihonk9.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Email</p>
                  <p className="text-lg font-medium text-accent group-hover:text-accent-hover transition-colors">
                    info@nihonk9.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+15105604360"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Phone</p>
                  <p className="text-lg font-medium text-accent group-hover:text-accent-hover transition-colors">
                    (510) 560-4360
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Location</p>
                  <p className="text-lg font-medium text-foreground">
                    San Francisco Bay Area
                  </p>
                  <p className="text-sm text-muted">In-person & remote options available</p>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="bg-accent/5 border border-accent/20 rounded-md p-6">
              <h3 className="text-sm font-semibold mb-2 text-foreground">
                Current Availability
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                We are currently not accepting new clients. However, we
                encourage you to reach out—we can discuss your situation and
                determine fit for when a spot opens.
              </p>
            </div>
          </div>

          {/* Right Column - FAQ Link */}
          <div className="bg-card border border-border rounded-md p-8 self-start">
            <h2 className="text-lg font-bold uppercase tracking-wide mb-4 text-foreground">
              Have Questions?
            </h2>
            <p className="text-muted mb-6">
              Check out our FAQ for answers to common questions about our training services.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center text-accent hover:text-accent-hover font-medium"
            >
              View FAQ
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
