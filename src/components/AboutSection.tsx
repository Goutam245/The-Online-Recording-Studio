import { Globe, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Globe,
      value: "50+",
      label: "Countries",
      description: "Artists from around the world",
    },
    {
      icon: Users,
      value: "25+",
      label: "Team Members",
      description: "Producers, engineers & musicians",
    },
    {
      icon: Award,
      value: "8+",
      label: "Years Experience",
      description: "In online music production",
    },
    {
      icon: TrendingUp,
      value: "5000+",
      label: "Songs Produced",
      description: "Across all genres",
    },
  ];

  return (
    <section id="about" className="py-section-lg relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-primary mb-4">
              About TORS
            </span>
            <h2 className="text-display-sm md:text-display-md font-serif mb-6">
              A Global Team of{" "}
              <span className="text-gradient-gold italic">Music Makers</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                TORS (The Online Recording Studio) is a global online music production company, 
                dedicated to helping independent singer-songwriters bring their music to life.
              </p>
              <p>
                We've produced thousands of songs that have accumulated over 300 million streams, 
                achieved international #1 chart positions, and secured sync placements on Netflix, 
                Hulu, Amazon Prime, and feature films.
              </p>
              <p>
                Our team spans the globe—producers, engineers, and session musicians working 
                together to deliver radio-ready productions without the traditional studio overhead.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-serif text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
