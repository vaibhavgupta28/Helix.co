import type { Metadata } from "next";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Helix terms of service and usage policies.",
};

export default function TermsPage() {
  return (
    <>
      <Hero
        title="Terms of Service"
        subtitle="Terms and conditions for using Helix services"
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <p className="text-hx-muted">
            <strong>Last Updated:</strong> January 1, 2025
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the
            terms and provision of this agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily view the materials (information or
            software) on Helix's website for personal, non-commercial transitory viewing
            only.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on Helix's website are provided on an 'as is' basis. Helix makes
            no warranties, expressed or implied, and hereby disclaims and negates all other
            warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall Helix or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business
            interruption) arising out of the use or inability to use the materials on
            Helix's website.
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Helix's website could include technical,
            typographical, or photographic errors. Helix does not warrant that any of the
            materials on its website are accurate, complete, or current.
          </p>

          <h2>6. Links</h2>
          <p>
            Helix has not reviewed all of the sites linked to its website and is not
            responsible for the contents of any such linked site.
          </p>

          <h2>7. Modifications</h2>
          <p>
            Helix may revise these terms of service for its website at any time without
            notice. By using this website you are agreeing to be bound by the then current
            version of these terms of service.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <a href="mailto:legal@helix.co">legal@helix.co</a>
          </p>
        </div>
      </section>
    </>
  );
}
