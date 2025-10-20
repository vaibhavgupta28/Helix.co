import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Studio", href: "/studio" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-hx-surface border-t border-hx-border" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-heading font-bold text-hx-accent hover:text-hx-accent/80 transition-colors"
            >
              Helix
            </Link>
            <p className="mt-4 text-sm text-hx-muted leading-relaxed">
              We Build the AdTech that Powers Modern Advertising.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://linkedin.com/company/helix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hx-muted hover:text-hx-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@helix.co"
                className="text-hx-muted hover:text-hx-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-hx-text uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-hx-muted hover:text-hx-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-hx-text uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-hx-muted hover:text-hx-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-hx-text uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@helix.co"
                  className="text-sm text-hx-muted hover:text-hx-accent transition-colors"
                >
                  hello@helix.co
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/helix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-hx-muted hover:text-hx-accent transition-colors"
                >
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-hx-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-hx-muted">
              &copy; {new Date().getFullYear()} Helix. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-hx-muted hover:text-hx-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
