import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions — WhiteWhale",
  description: "WhiteWhale Terms and Conditions.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      updated="Last updated: August 30, 2025"
      sections={[
        { heading: "Definitions", body: "Establishes key terminology including feedback, platform, user, client data, and term duration." },
        { heading: "Service Levels", body: "We commit to at least 99.5% uptime per calendar month and offer credits for failures between 99.0%–99.5% (5%) or below 99.0% (10%)." },
        { heading: "Integrations", body: "Addresses third-party system connections (CRM, Slack, Teams). We provide setup instructions but assume no responsibility for integration failures caused by client systems or external factors." },
        { heading: "Termination", body: "Either party may end the agreement with 30 days' notice for material breach, with pro-rated refunds applied." },
        { heading: "Confidentiality", body: "Both parties must protect each other's confidential information using reasonable care standards." },
        { heading: "Intellectual Property", body: "We retain platform ownership; clients receive non-exclusive usage rights. All feedback becomes our property." },
        { heading: "Data Security & Privacy", body: "The platform maintains industry-standard protections with a 24-hour breach notification requirement." },
        { heading: "Indemnification", body: "Each party defends the other against third-party claims within their respective areas of responsibility." },
        { heading: "Limitation of Liability", body: "Excludes indirect damages and caps total liability at the fees paid during the preceding 12 months." },
        { heading: "Cause", body: "Defines material breach, security threats, illegal conduct, and violations as grounds for termination." },
        { heading: "Miscellaneous", body: "Covers force majeure, assignment restrictions, Michigan governing law, and amendment procedures." },
        { heading: "Compliance with Laws & Export Controls", body: "Requires adherence to applicable data protection and export regulations." },
        { heading: "No Warranty", body: "The platform is provided “AS IS” without guarantees of uninterrupted operation." },
        { heading: "Dispute Resolution", body: "Mandates negotiation, then mediation, then binding arbitration in Oakland County, Michigan." },
        { heading: "Severability, Waiver & Counterparts", body: "Invalid provisions don't void the agreement; waivers require written consent." },
        { heading: "Relationship of the Parties", body: "Establishes independent contractor status without partnership." },
        { heading: "Contact Information", body: "Lists our Ann Arbor office address and communication channels." },
      ]}
    />
  );
}
