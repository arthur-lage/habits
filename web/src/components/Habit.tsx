interface HabitProps {
  completed: any;
}

export function Habit(props: HabitProps) {
  return <div>{props.completed}</div>;
}
