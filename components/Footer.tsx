export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted">
            Currently not accepting new clients.{" "}
            <a href="mailto:info@nihonk9.com" className="text-accent hover:text-accent-hover font-medium">
              Contact us
            </a>{" "}
            to learn more about future availability.
          </p>
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Nihon K9. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
