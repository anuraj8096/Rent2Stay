import {
  Car,
  Sofa,
  Armchair,
  Zap,
  MoveVertical,
  Dumbbell,
  ShieldCheck,
  Droplets,
  Sun,
  CookingPot,
  Wifi,
  Baby,
  Fence,
  Check,
} from 'lucide-react'

// Maps an amenity label to a lucide icon. Anything unmapped falls back to a tick.
const MAP = {
  Parking: Car,
  Furnished: Sofa,
  'Semi-Furnished': Armchair,
  'Power Backup': Zap,
  Lift: MoveVertical,
  Gym: Dumbbell,
  Security: ShieldCheck,
  'Water Supply': Droplets,
  Balcony: Sun,
  'Modular Kitchen': CookingPot,
  'Wifi Ready': Wifi,
  'Play Area': Baby,
  'Gated Community': Fence,
}

export default function AmenityIcon({ name, className = 'h-4 w-4' }) {
  const Icon = MAP[name] || Check
  return <Icon className={className} aria-hidden="true" />
}
