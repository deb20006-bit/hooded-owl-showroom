import logo from "@/assets/hood-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logo} alt="HOOD owl logo" width={36} height={36} className="h-9 w-9" />
      <span className="font-display text-2xl font-bold tracking-[0.25em] text-foreground">
        HOOD
      </span>
    </div>
  );
}
