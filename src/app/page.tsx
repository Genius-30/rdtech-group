import AAContractingLogo from "@/components/logos/aa-contracting-logo";
import CoreGridLogo from "@/components/logos/core-grid-logo";
import RDTechGroupLogo from "@/components/logos/rdtech-group-logo";
import RDTechLogo from "@/components/logos/rdtech-logo";

export default function Home() {
  return (
    <div
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Main logo with brand primary color */}
        <RDTechGroupLogo size={200} />

        {/* Title with gold accent */}
        <h1
          className="text-4xl font-bold text-center sm:text-left"
          style={{ color: "var(--accent)" }}
        >
          Welcome to RDTech Group
        </h1>

        {/* Company logos inside a light gray box */}
        <div
          className="flex flex-col sm:flex-row gap-8 items-center justify-center p-6 rounded-lg"
          style={{
            backgroundColor: "var(--secondary)",
            border: "1px solid var(--border)",
          }}
        >
          <RDTechLogo />
          <AAContractingLogo />
          <CoreGridLogo />
        </div>
      </main>
    </div>
  );
}
