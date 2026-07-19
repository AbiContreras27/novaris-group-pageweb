import { Button } from "@/components/ui";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button size="lg">
        Solicitar cotización
      </Button>

      <Button variant="outline" size="lg">
        Ver servicios
      </Button>
    </div>
  );
}