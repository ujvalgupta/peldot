import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — WhiteWhale",
  description: "WhiteWhale Privacy Policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Effective date: October 6, 2024"
      sections={[
        { heading: "Information We Collect", body: "Covers personal data (name, email, phone, company), account and profile information, usage analytics, and technical details like IP addresses." },
        { heading: "How We Use Your Information", body: "Details purposes including service delivery, personalization, customer communications, performance analytics, and legal compliance." },
        { heading: "Data Sharing and Disclosure", body: "We do not sell or rent your personal information to third parties, though sharing occurs with service providers and for legal requirements." },
        { heading: "Data Security", body: "We use industry-standard security measures, including encryption, while acknowledging no method is absolutely guaranteed." },
        { heading: "Your Rights", body: "Outlines user rights to access, correct, or delete personal data; withdraw consent; and file regulatory complaints based on location." },
        { heading: "Cookies and Tracking", body: "Explains cookie use for understanding user behavior and allowing browser-level management of preferences." },
        { heading: "Third-Party Links", body: "Disclaims responsibility for the privacy practices of external websites." },
        { heading: "Changes to This Policy", body: "Details notification procedures when updates occur, via effective-date changes and communications." },
        { heading: "Contact Us", body: "Provides contact email: hello@getwhitewhale.com." },
      ]}
    />
  );
}
