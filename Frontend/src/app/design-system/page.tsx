import { Button, Card, Typography, Badge, Input, Grid } from "@/components/ui";


export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Novaris Design System
      </h1>

      {/* BOTONES */}

      <section className="mb-20">

        <h2 className="text-3xl font-semibold mb-6">
          Buttons
        </h2>

        <div className="flex flex-wrap gap-4">

          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>

          <button className="rounded-xl bg-red-500 px-6 py-3">
            Botón HTML
          </button>

        </div>

      </section>

      {/* CARDS */}

      <section>

        <h2 className="text-3xl font-semibold mb-8">
          Cards
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <Card>
            <h3 className="text-xl font-bold">
              Desarrollo Web
            </h3>

            <p className="mt-4 text-gray-400">
              React + Next.js + NestJS
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold">
              Infraestructura
            </h3>

            <p className="mt-4 text-gray-400">
              Redes y Servidores
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold">
              Dashboards
            </h3>

            <p className="mt-4 text-gray-400">
              Business Intelligence
            </p>
          </Card>

          <section className="mt-24">

  <Typography
    as="h2"
    variant="h2"
    className="mb-10"
  >
    Typography
  </Typography>

  <div className="space-y-6">

    <Typography as="h1" variant="hero">
      Hero Title
    </Typography>

    <Typography as="h1" variant="h1">
      Heading 1
    </Typography>

    <Typography as="h2" variant="h2">
      Heading 2
    </Typography>

    <Typography as="h3" variant="h3">
      Heading 3
    </Typography>

    <Typography variant="body">
      Este es un texto de cuerpo utilizado para describir servicios,
      productos o cualquier información relevante de Novaris Group.
    </Typography>

    <Typography variant="bodySmall">
      Este es un texto secundario.
    </Typography>

    <Typography variant="caption">
      Última actualización: Julio 2026
    </Typography>

    <Typography variant="label">
      Tecnología • Innovación • Evolución
    </Typography>

  </div>

</section>

<section className="mt-24">

  <Typography
    as="h2"
    variant="h2"
    className="mb-8"
  >
    Badges
  </Typography>

  <div className="flex flex-wrap gap-4">

    <Badge>
      Nuevo
    </Badge>

    <Badge variant="secondary">
      React
    </Badge>

    <Badge variant="success">
      Online
    </Badge>

    <Badge variant="warning">
      En Proceso
    </Badge>

    <Badge variant="danger">
      Error
    </Badge>

    <Badge variant="outline">
      Next.js
    </Badge>

  </div>

</section>

        </div>

      </section>
      <section className="mt-24">

  <Typography
    as="h2"
    variant="h2"
    className="mb-8"
  >
    Inputs
  </Typography>

  <div className="max-w-xl space-y-8">

    <Input
      label="Nombre"
      placeholder="Ingresa tu nombre"
    />

    <Input
      label="Correo electrónico"
      type="email"
      placeholder="correo@empresa.com"
    />

    <Input
      label="Empresa"
      placeholder="Novaris Group"
    />

    <Input
      label="Error"
      placeholder="Ejemplo"
      error="Este campo es obligatorio."
    />

  </div>

</section>

<Grid columns={3}>

</Grid>

    </main>
  );
}