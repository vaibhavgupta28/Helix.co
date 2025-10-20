import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Linkedin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Let's Build Your AdTech Advantage",
  description:
    "Get in touch with Helix to discuss your AdTech project. We're ready to help you build, scale, and optimize.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Let's Build Your AdTech Advantage"
        subtitle="Ready to transform your advertising infrastructure? Get in touch with our team."
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hx-text mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hx-text mb-6">
              Other Ways to Connect
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-hx-surface border border-hx-border rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-hx-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-hx-text mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:hello@helix.co"
                      className="text-hx-muted hover:text-hx-accent transition-colors"
                    >
                      hello@helix.co
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-hx-surface border border-hx-border rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-hx-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-hx-text mb-2">
                      Schedule a Call
                    </h3>
                    <a
                      href="https://calendly.com/helix"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hx-muted hover:text-hx-accent transition-colors"
                    >
                      Book a discovery call
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-hx-surface border border-hx-border rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-hx-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-hx-text mb-2">
                      Connect on LinkedIn
                    </h3>
                    <a
                      href="https://linkedin.com/company/helix"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hx-muted hover:text-hx-accent transition-colors"
                    >
                      Follow our company page
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Info (Optional) */}
            <div className="mt-8 p-6 bg-hx-surface border border-hx-border rounded-xl">
              <h3 className="text-lg font-heading font-semibold text-hx-text mb-3">
                Response Time
              </h3>
              <p className="text-hx-muted">
                We typically respond to all inquiries within 24 hours during business days.
                For urgent matters, please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
