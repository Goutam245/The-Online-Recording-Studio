import BeforeAfterPlayer from "./BeforeAfterPlayer";

const MusicPreviewSection = () => {
  const tracks = [
    {
      title: "Midnight Dreams",
      artist: "Sarah Chen",
      genre: "Pop",
    },
    {
      title: "Breaking Through",
      artist: "Marcus Williams",
      genre: "Rock",
    },
    {
      title: "Golden Hour",
      artist: "Luna Martinez",
      genre: "Indie Folk",
    },
    {
      title: "City Lights",
      artist: "The Wanderers",
      genre: "Alternative",
    },
  ];

  return (
    <section id="music" className="py-section-lg relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-primary mb-4">
            Our Work
          </span>
          <h2 className="text-display-sm md:text-display-md font-serif mb-4">
            Hear the <span className="text-gradient-gold italic">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Toggle between demo and produced versions to experience the transformation.
          </p>
        </div>

        {/* Track Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tracks.map((track, index) => (
            <BeforeAfterPlayer
              key={index}
              title={track.title}
              artist={track.artist}
              genre={track.genre}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
          >
            View Full Portfolio
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicPreviewSection;
