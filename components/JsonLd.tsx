export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Helix",
    url: "https://helix.co",
    logo: "https://helix.co/logo.png",
    description:
      "AI-native AdTech engineering partner building DSPs, SSPs, DMPs, ad servers, and MetaDSP platforms.",
    sameAs: [
      "https://linkedin.com/company/helix",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@helix.co",
      contactType: "Customer Service",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AdTech Platform Development",
    provider: {
      "@type": "Organization",
      name: "Helix",
      url: "https://helix.co",
    },
    areaServed: "Worldwide",
    description:
      "Full-stack AdTech solutions including DSP, SSP, DMP, MetaDSP, and white-label platform development.",
    offers: [
      {
        "@type": "Offer",
        name: "DSP Development",
        description: "Custom demand-side platform development and optimization",
      },
      {
        "@type": "Offer",
        name: "SSP Development",
        description: "Supply-side platform and publisher technology solutions",
      },
      {
        "@type": "Offer",
        name: "MetaDSP Systems",
        description: "Unified multi-DSP orchestration platforms",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
