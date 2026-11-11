import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ShadcnBasics() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h3 className="font-semibold">Button: variants e sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="flex gap-2">
          <Badge>Novo</Badge>
          <Badge variant="secondary">Beta</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">Card + Input + Label (composição)</h3>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Subscrever</CardTitle>
            <CardDescription>Recebe novidades da jeKnowledge.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="nome@exemplo.com" />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Subscrever</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">Dialog (acessível out-of-the-box: Esc, foco, ARIA)</h3>
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>Abrir dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tens a certeza?</DialogTitle>
              <DialogDescription>Experimenta Tab, Shift+Tab e Esc.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button>Confirmar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  )
}
