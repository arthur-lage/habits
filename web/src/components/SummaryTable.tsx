export function SummaryTable() {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <div className="w-full flex">
      <div className="grid grid-row-7 grid-flow-row gap-3">
        {weekdays.map((weekday, index) => (
          <div
            key={`${weekday}-${index}`}
            className="text-zinc-700 text-xl font-inter font-bold h-10 w-full flex items-center justify-center"
          >
            {weekday}
          </div>
        ))}
      </div>
    </div>
  );
}
