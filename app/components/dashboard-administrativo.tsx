/**
 * v0 by Vercel.
 * @see https://v0.dev/t/e8UFSvzmAZt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ResponsivePie } from "@nivo/pie"
import { JSX, ClassAttributes, HTMLAttributes } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "lucide-react"

export default function DashboardAdministrativo() {
  return (
      <div className="max-w-4xl mx-auto p-6 sm:p-8">
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Dashboard de Instalaciones</h1>
            <p className="text-muted-foreground">Visualiza el estado de las instalaciones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Disponibilidad de Instalaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChartDisp className="aspect-square" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Estado de Mantenimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChartMant className="aspect-square" />
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Disponibilidad</CardTitle>
                <div className="ml-auto">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Descargar
                        <ChevronDownIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuItem as="a" href="https://github.com/tu_usuario/tu_repositorio/raw/main/files/data.xlsx" download>Reporte de Uso</DropdownMenuItem>
                      <DropdownMenuItem as="a" href="https://github.com/tu_usuario/tu_repositorio/raw/main/files/data.xlsx" download>Análisis de Demanda y Utilización</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <p>Aquí se mostrará la disponibilidad de las instalaciones.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mantenimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Aquí se mostrará la información del estado de mantenimiento de las instalaciones.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}

function PieChartDisp(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  const data = [
    { id: "Disponibles", value: 40 },
    { id: "Reservados", value: 150 },
  ]
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <div {...props}>
      <ResponsivePie
        data={data}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id} (${((d.value / total) * 100).toFixed(2)}%)`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        arcLabelsSkipAngle={10} 
        colors={({ id }) => (id === "Disponibles" ? "#A5D6A7" : "#B0BEC5")} // Verde para "Disponibles" y rojo para "Reservados"
        theme={{
          labels: {
            text: {
              fontSize: "14px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
function PieChartMant(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  const data = [
    { id: "Preventivo", value: 50 },
    { id: "Correctivo", value: 51 },
    { id: "Al día", value: 120 },
  ];
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return (

    <div {...props}>
      <ResponsivePie
        data={data}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id} (${((d.value / total) * 100).toFixed(2)}%)`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsSkipAngle={10} 
        arcLabelsRadiusOffset={0.65}
        colors={({ id }) => {
          if (id === "Preventivo") return "#90CAF9";
          if (id === "Correctivo") return "#FFCC80";
          if (id === "Al día") return "#A5D6A7";
          return "#E0E0E0"; // Color de respaldo por si acaso
        }}
        theme={{
          labels: {
            text: {
              fontSize: "14px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}