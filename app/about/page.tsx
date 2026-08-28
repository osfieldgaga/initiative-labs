import type { Metadata } from "next";
import { Button } from "@/components/button";
import { LabelSection } from "@/components/label-section";
import { copy } from "@/lib/copy";
import { EMAIL, GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "The mission and manifesto behind Initiative Labs.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-content px-content-x pb-[90px] pt-[100px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
          {copy.about.eyebrow}
        </div>
        <h1 className="mt-9 max-w-[22ch] text-display-md font-medium text-balance">
          {copy.about.headline}
        </h1>
      </div>

      <LabelSection label={copy.about.mission.label}>
        <div className="max-w-[66ch]">
          <p className="text-xl leading-relaxed text-fg text-pretty">
            {copy.about.mission.paragraphs[0]}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">
            {copy.about.mission.paragraphs[1]}
          </p>
        </div>
      </LabelSection>

      <LabelSection label={copy.about.throughline.label}>
        <div className="max-w-[66ch]">
          <p className="text-xl leading-relaxed text-fg text-pretty">
            {copy.about.throughline.paragraphs[0]}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">
            {copy.about.throughline.paragraphs[1]}
          </p>
        </div>
      </LabelSection>

      <LabelSection label={copy.about.howItWorks.label}>
        <div className="grid grid-cols-1 gap-[2px] border-2 border-border bg-border sm:grid-cols-2">
          {copy.about.howItWorks.items.map((item, i) => (
            <div key={item.title} className="bg-bg p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-muted text-pretty">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </LabelSection>

      <div className="bg-accent text-bg">
        <div className="mx-auto max-w-content px-content-x py-section-y">
          <h2 className="max-w-[20ch] text-heading-md font-medium leading-none text-balance">
            {copy.about.closingHeadline}
          </h2>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button tone="accent" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </Button>
            <Button tone="accent" variant="secondary" href={GITHUB_URL}>
              github.com/osfieldgaga
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
