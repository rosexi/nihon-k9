import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "Our relationship-based training philosophy for Nihon Ken. We work with the independent nature of Japanese dog breeds, not against it.",
};

export default function Philosophy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Philosophy
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Training built on understanding, not dominance. Engagement, not
              just compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Sidebar Image */}
          <div className="md:col-span-1">
            <div className="sticky top-8 space-y-6">
              <ImagePlaceholder
                label="Philosophy Image"
                aspectRatio="square"
                className="shadow-md"
              />
              <ImagePlaceholder
                label="Training Moment"
                aspectRatio="video"
                className="shadow-md"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-10">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4 text-accent">
                Relationship First
              </h2>
              <p className="text-muted leading-relaxed">
                Every successful training program begins with trust. Before we
                teach commands, we build connection. Your dog learns that
                working with you leads to good outcomes—not because they fear
                consequences, but because they want to engage.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4 text-accent">
                Working With Independence
              </h2>
              <p className="text-muted leading-relaxed">
                Nihon Ken think for themselves. This is not a flaw to
                correct—it&apos;s a trait to respect and channel. We don&apos;t
                break their spirit. We give them reasons to choose cooperation,
                building motivation that aligns their natural drive with your
                goals.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4 text-accent">
                Clear Communication
              </h2>
              <p className="text-muted leading-relaxed">
                Dogs learn best when feedback is immediate and unambiguous. We
                use marker-based training to precisely communicate what
                behaviors we&apos;re rewarding, creating a language between you
                and your dog that accelerates learning and deepens
                understanding.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4 text-accent">
                Balanced Approach
              </h2>
              <p className="text-muted leading-relaxed">
                Effective training combines motivation with clear boundaries. We
                create an environment where your dog feels an exciting urge to
                find the right answer. The release of pressure and reward for
                correct choices builds confident, willing dogs who understand
                what&apos;s expected.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4 text-accent">
                Respect for Sensitivity
              </h2>
              <p className="text-muted leading-relaxed">
                Japanese breeds are often sensitive to handler emotions,
                environmental pressure, and correction. Heavy-handed methods
                backfire. We adjust our approach to each dog&apos;s temperament,
                using only the level of guidance necessary while maintaining the
                trust that makes training possible.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4 text-accent">
                Engagement Over Obedience
              </h2>
              <p className="text-muted leading-relaxed">
                Our goal is not a dog who mechanically follows commands.
                It&apos;s a dog who wants to be with you, who finds working
                together rewarding, and who looks to you as a partner. This
                engagement is the foundation of everything else—reliable recall,
                focused attention, and a bond that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
