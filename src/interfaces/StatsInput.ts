export interface StatsInput {
  label: string;
  id: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}