/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5WRuVn2aIYz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function ReservarInstalacion() {
  return (

      <div className="max-w-4xl mx-auto p-6 sm:p-8">
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Reserva de Instalaciones Deportivas y Salas de Estudio</h1>
            <p className="text-muted-foreground">Reserva tu espacio en las instalaciones de la universidad.</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Realizar Reserva</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="facility">Instalación</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una instalación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gym">Gimnasio</SelectItem>
                        <SelectItem value="court">Cancha de Baloncesto</SelectItem>
                        <SelectItem value="study-room">Sala de Estudio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Fecha</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="flex-col items-start w-full h-auto">
                          <span className="font-semibold uppercase text-[0.65rem]">Selecciona Fecha</span>
                          <span className="font-normal">2023-06-19</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 max-w-[276px]">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-time">Hora de Inicio</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona hora de inicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8:00">8:00 AM</SelectItem>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="end-time">Hora de Fin</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona hora de fin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  Reservar
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reservas Existentes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Instalación</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Hora</TableHead>
                    <TableHead>Usuario</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Gimnasio</TableCell>
                    <TableCell>2023-06-19</TableCell>
                    <TableCell>10:00 - 12:00</TableCell>
                    <TableCell>jdoe@university.edu</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sala de Estudio</TableCell>
                    <TableCell>2023-06-20</TableCell>
                    <TableCell>14:00 - 16:00</TableCell>
                    <TableCell>msmith@university.edu</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cancha de Baloncesto</TableCell>
                    <TableCell>2023-06-21</TableCell>
                    <TableCell>16:00 - 18:00</TableCell>
                    <TableCell>jjones@university.edu</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

  )
}