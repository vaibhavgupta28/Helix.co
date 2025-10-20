import type { Metadata } from "next";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Helix privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your data"
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <p className="text-hx-muted">
            <strong>Last Updated:</strong> January 1, 2025
          </p>

          <h2>Overview</h2>
          <p>
            Helix ("we," "our," or "us") is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your information when
            you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>Name, email, company name (via contact forms)</li>
            <li>Project details and inquiries</li>
            <li>Career application information</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring URLs</li>
            <li>IP address (anonymized)</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>Respond to inquiries and provide customer support</li>
            <li>Process career applications</li>
            <li>Improve our website and services</li>
            <li>Analyze usage patterns (via anonymized analytics)</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use essential cookies to improve your browsing experience and analytics
            cookies (with your consent) to understand how visitors use our site.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. However,
            no method of transmission over the internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw cookie consent</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            For privacy-related questions, contact us at:{" "}
            <a href="mailto:privacy@helix.co">privacy@helix.co</a>
          </p>
        </div>
      </section>
    </>
  );
}
