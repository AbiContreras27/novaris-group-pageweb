export function Chart() {
  return (
    <svg
      viewBox="0 0 300 120"
      className="w-full h-24"
    >
      <polyline
        fill="none"
        stroke="#7C5CFF"
        strokeWidth="4"
        points="
        0,90
        40,75
        80,80
        120,40
        170,60
        220,25
        300,10
      "
      />
    </svg>
  );
}