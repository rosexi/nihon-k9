interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide";
}

export default function ImagePlaceholder({
  label = "Image",
  className = "",
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      className={`bg-gradient-to-br from-warm to-border/30 rounded-lg flex items-center justify-center ${aspectClasses[aspectRatio]} ${className}`}
    >
      <span className="text-muted/50 text-sm font-medium">{label}</span>
    </div>
  );
}
