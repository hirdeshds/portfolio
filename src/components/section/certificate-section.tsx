/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function CertificateSection() {
  return (
    <div className="flex flex-wrap gap-2">
      {DATA.certifications.map((cert, id) => (
        <BlurFade key={cert.name} delay={BLUR_FADE_DELAY * 1 + id * 0.05}>
          <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
            {cert.icon && (
              <cert.icon className="size-4 rounded overflow-hidden object-contain" />
            )}
            <span className="text-foreground text-sm font-medium">
              {cert.name}
            </span>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
