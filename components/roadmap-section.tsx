export function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "current",
      items: [
        "Fair launch on Nad.fun",
        "Community building & social presence",
        "Forge AI beta waitlist",
        "Initial partnerships",
      ],
    },
    {
      phase: "Phase 2",
      title: "Growth",
      status: "upcoming",
      items: [
        "Forge AI public beta launch",
        "Nad.fun graduation",
        "Staking rewards program",
        "Community governance launch",
      ],
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      status: "upcoming",
      items: ["CEX listings", "Advanced AI agent features", "Enterprise partnerships", "Cross-chain integration"],
    },
    {
      phase: "Phase 4",
      title: "Ecosystem",
      status: "upcoming",
      items: ["Developer SDK & API", "Third-party integrations", "DAO treasury management", "Global expansion"],
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        {/* Background glow */}
        <div className="w-[350px] h-[350px] absolute top-[50%] left-[10%] bg-primary/10 blur-[120px] z-0 rounded-full" />

        <div className="self-stretch flex flex-col justify-center items-center gap-8 z-10">
          {/* Header */}
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary text-sm font-medium">Our Journey</span>
            </div>
            <h2 className="w-full max-w-[700px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Roadmap
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Our path to revolutionizing AI-assisted development
            </p>
          </div>

          {/* Roadmap Timeline */}
          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border backdrop-blur-sm flex flex-col gap-4 relative ${
                  phase.status === "current" ? "border-[#14F195]/40 bg-[#14F195]/10" : "border-white/10 bg-white/5"
                }`}
              >
                {phase.status === "current" && (
                  <div className="absolute -top-3 left-4 px-2 py-1 rounded-full bg-[#14F195] text-black text-xs font-semibold">
                    Current
                  </div>
                )}
                <div>
                  <span className="text-muted-foreground text-sm">{phase.phase}</span>
                  <h3 className="text-foreground text-xl font-semibold mt-1">{phase.title}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          phase.status === "current" ? "text-[#14F195]" : "text-muted-foreground"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
