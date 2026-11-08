import {
  Award,
  BookOpen,
  BookText,
  Building2,
  ChartColumn,
  Clapperboard,
  Compass,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Headphones,
  Lightbulb,
  Link2,
  MapPin,
  MessageSquare,
  MessagesSquare,
  Mic,
  PenLine,
  ShoppingBasket,
  SquareCheck,
  Target,
  TrainFront,
  Users,
  Layers,
  type LucideIcon,
} from "lucide-react";

const icons = {
  award: Award,
  book: BookOpen,
  bookText: BookText,
  building: Building2,
  chart: ChartColumn,
  film: Clapperboard,
  compass: Compass,
  eye: Eye,
  fileText: FileText,
  globe: Globe,
  cap: GraduationCap,
  headphones: Headphones,
  lightbulb: Lightbulb,
  link: Link2,
  mapPin: MapPin,
  message: MessageSquare,
  messages: MessagesSquare,
  mic: Mic,
  pen: PenLine,
  basket: ShoppingBasket,
  squareCheck: SquareCheck,
  target: Target,
  train: TrainFront,
  users: Users,
  layers: Layers,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

/** Renders a Lucide icon by name. Unknown names fall back to a neutral icon. */
export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Component: LucideIcon = (icons as Record<string, LucideIcon>)[name] ?? Layers;
  return <Component aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
