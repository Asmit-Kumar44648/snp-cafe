// Update spotsFilled as applications come in.
// When a season ends:
// 1. Set its status to 'completed'
// 2. Populate its members array: [{ name, instagram, photo, highlight }]
// 3. Append a new Season 02 object with status: 'active', spotsFilled: 0, etc.

export interface SeasonMember {
  name: string;
  instagram: string;
  photo: string;
  highlight?: string;
}

export interface Season {
  id: string;
  label: string;
  status: 'active' | 'completed' | 'upcoming';
  startDate: string;
  endDate: string;
  spotsTotal: number;
  spotsFilled: number;
  members: SeasonMember[];
}

export const seasons: Season[] = [
  {
    id: "season-01",
    label: "Season 01",
    status: "active", // "active" | "completed" | "upcoming"
    startDate: "2026-06-15",
    endDate: "2026-08-19", // 65 days after start
    spotsTotal: 8,
    spotsFilled: 0, // update manually as applications close
    members: [] // empty until season completes
  }
];
