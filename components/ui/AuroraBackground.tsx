import { cn } from "@/lib/utils";

export default function AuroraBackground({
  className,
  intensity = "default",
}: {
  className?: string;
  intensity?: "default" | "subtle";
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute inset-0 bg-aurora animate-aurora",
          intensity === "subtle" && "opacity-50"
        )}
      />
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-accent-primary/10 blur-[120px] animate-float" />
      <div
        className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-accent-secondary/10 blur-[130px] animate-float"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/2 h-64 w-64 rounded-full bg-accent-purple/10 blur-[110px] animate-float"
        style={{ animationDelay: "-4s" }}
      />
      <div className="noise-overlay" />
    </div>
  );
}
