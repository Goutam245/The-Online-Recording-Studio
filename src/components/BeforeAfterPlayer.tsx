import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterPlayerProps {
  title: string;
  artist: string;
  genre: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BeforeAfterPlayer = ({
  title,
  artist,
  genre,
  beforeLabel = "Demo",
  afterLabel = "Produced",
  className,
  style,
}: BeforeAfterPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAfter, setIsAfter] = useState(false);
  const [progress, setProgress] = useState(0);
  const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate random waveform heights on mount
  useEffect(() => {
    const heights = Array.from({ length: 40 }, () => Math.random() * 80 + 20);
    setWaveformHeights(heights);
  }, []);

  // Simulate playback progress
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className={cn("bg-card rounded-2xl border border-border overflow-hidden", className)} style={style}>
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="font-serif text-lg mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{artist}</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
            {genre}
          </span>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className={cn(
            "text-sm font-medium transition-colors duration-300",
            !isAfter ? "text-foreground" : "text-muted-foreground"
          )}>
            {beforeLabel}
          </span>
          
          <button
            onClick={() => setIsAfter(!isAfter)}
            className="relative w-16 h-8 rounded-full bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <div
              className={cn(
                "absolute top-1 w-6 h-6 rounded-full transition-all duration-300",
                isAfter 
                  ? "left-9 bg-gradient-gold glow-gold" 
                  : "left-1 bg-muted-foreground"
              )}
            />
          </button>
          
          <span className={cn(
            "text-sm font-medium transition-colors duration-300",
            isAfter ? "text-gradient-gold" : "text-muted-foreground"
          )}>
            {afterLabel}
          </span>
        </div>
      </div>

      {/* Waveform Visualization */}
      <div className="px-6 mb-4">
        <div className="relative h-16 flex items-center gap-[2px]">
          {waveformHeights.map((height, index) => {
            const barProgress = (index / waveformHeights.length) * 100;
            const isPassed = barProgress <= progress;
            
            return (
              <div
                key={index}
                className={cn(
                  "flex-1 rounded-full transition-all duration-150",
                  isPassed
                    ? isAfter 
                      ? "bg-gradient-gold" 
                      : "bg-muted-foreground"
                    : "bg-border"
                )}
                style={{
                  height: `${isAfter ? height : height * 0.6}%`,
                  opacity: isPassed ? 1 : 0.4,
                }}
              />
            );
          })}
          
          {/* Playhead */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-foreground"
            style={{ left: `${progress}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-4">
          {/* Play Button */}
          <button
            onClick={togglePlay}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
              isAfter
                ? "bg-gradient-gold text-primary-foreground glow-gold"
                : "bg-secondary text-foreground hover:bg-muted"
            )}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>

          {/* Progress Bar */}
          <div className="flex-1">
            <div className="h-1 bg-secondary rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all duration-100",
                  isAfter ? "bg-gradient-gold" : "bg-muted-foreground"
                )}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">
                {Math.floor((progress / 100) * 180 / 60)}:{String(Math.floor((progress / 100) * 180) % 60).padStart(2, '0')}
              </span>
              <span className="text-xs text-muted-foreground">3:00</span>
            </div>
          </div>

          {/* Volume */}
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Quality Indicator */}
      <div className={cn(
        "px-6 py-3 border-t border-border text-center transition-all duration-300",
        isAfter ? "bg-primary/5" : "bg-transparent"
      )}>
        <span className={cn(
          "text-xs font-medium transition-colors duration-300",
          isAfter ? "text-primary" : "text-muted-foreground"
        )}>
          {isAfter ? "✨ Professional Production" : "Original Demo Recording"}
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterPlayer;
