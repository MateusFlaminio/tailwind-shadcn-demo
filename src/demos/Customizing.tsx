import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function Customizing({ highlight = true }: { highlight?: boolean }) {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h3 className="font-semibold">1. className pontual (o cn() resolve conflitos)</h3>
        <div className="flex flex-wrap gap-2">
          <Button>Original</Button>
          {/* px-8 vence o px-2.5 do componente graças ao tailwind-merge */}
          <Button className="rounded-full bg-pink-500 px-8 hover:bg-pink-600">Customizado</Button>
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">2. Nova variant no cva (editámos components/ui/button.tsx)</h3>
        <Button variant="success">Guardado com sucesso</Button>
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">3. Classes condicionais com cn()</h3>
        <Card className={cn("max-w-sm", highlight && "ring-2 ring-primary")}>
          <CardHeader>
            <CardTitle>Card {highlight ? "destacado" : "normal"}</CardTitle>
          </CardHeader>
          <CardContent>cn("max-w-sm", highlight &amp;&amp; "ring-2 ring-primary")</CardContent>
        </Card>
      </section>

      <section className="space-y-2">
        <h3 className="font-semibold">4. Tema global: muda --primary e --radius em index.css</h3>
        <p className="text-sm text-muted-foreground">
          Experimenta no browser DevTools: <code>document.documentElement.style.setProperty("--primary", "oklch(0.6 0.2 30)")</code>
        </p>
      </section>
    </div>
  )
}
