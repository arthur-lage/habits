import { Habit } from "./components/Habit";

export function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={2} />
      <Habit completed={12} />
    </div>
  );
}
