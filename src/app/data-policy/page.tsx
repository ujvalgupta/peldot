import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Data Policy — Peldot",
  description: "Peldot Data Policy.",
};

export default function DataPolicyPage() {
  return (
    <LegalPage
      title="Data Policy"
      updated="Effective date: October 6, 2024"
      sections={[
        { heading: "Data Submission Responsibilities", body: "Users must confirm they have legal authority to collect and process submitted data. Uploading personally identifiable information (PII) of any individual based in the European Economic Area (EEA), the United Kingdom, or Switzerland without explicit consent is prohibited." },
        { heading: "Right to Opt Out and Data Removal", body: "Individuals can request access, correction, deletion, or exclusion of their data by contacting hello@peldot.com. We commit to responding within 15 days in accordance with GDPR Article 12." },
        { heading: "Data Use and Access", body: "Data is used exclusively for intended platform purposes like sales prospecting. We do not sell user-submitted data to third parties." },
        { heading: "Enforcement and Violations", body: "We conduct audits and may suspend accounts, purge data, or notify authorities if violations occur." },
        { heading: "Contact and Complaints", body: "Users can contact hello@peldot.com with questions or to report violations." },
      ]}
    />
  );
}
