import Link from "next/link";

export function FooterBottom() {
  return (
    <div
      className="
        mt-16
        flex
        flex-col
        items-center
        justify-between
        gap-6
        border-t
        border-white/10
        pt-8
        text-sm
        text-zinc-500
        md:flex-row
      "
    >
      <p>
        © {new Date().getFullYear()} Novaris Group. Todos los derechos
        reservados.
      </p>
    </div>
  );
}