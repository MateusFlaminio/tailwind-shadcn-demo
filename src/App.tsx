import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import CssVsTailwind from "./demos/CssVsTailwind"
import Customizing from "./demos/Customizing"
import Enunciado from "./demos/Exercicio/Enunciado"
//import Solucao from "./demos/Ex_Solucao/Solucao"
import Responsive from "./demos/Responsive"
import ShadcnBasics from "./demos/ShadcnBasics"

const tabs = [
  { id: "css", label: "CSS vs SCSS vs Tailwind", element: <CssVsTailwind /> },
  { id: "responsive", label: "Responsive / estados / dark", element: <Responsive /> },
  { id: "shadcn", label: "shadcn: componentes", element: <ShadcnBasics /> },
  { id: "custom", label: "Customizar", element: <Customizing /> },
  {
    id: "exercicio",
    label: "Exercício",
    element: (
      <div className="flex flex-wrap items-start gap-8">
        <div>
          <p className="mb-2 text-sm font-medium">Enunciado (CSS)</p>
          <Enunciado />
        </div>
        {/* <div>
          <p className="mb-2 text-sm font-medium">Solução (Tailwind + shadcn)</p>
          <Solucao />
        </div> */}
      </div>
    ),
  },
]

export default function App() {
  const [active, setActive] = useState(tabs[0].id)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex flex-wrap items-center gap-2 border-b p-4">
        <h1 className="mr-4 text-lg font-bold">Tailwind + shadcn</h1>
        <nav className="flex flex-wrap gap-1">
          {tabs.map((t) => (
            <Button
              key={t.id}
              size="sm"
              variant={active === t.id ? "default" : "ghost"}
              className={cn("cursor-pointer")}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </Button>
          ))}
        </nav>
        <Button size="sm" variant="outline" className="ml-auto" onClick={() => setDark((d) => !d)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </Button>
      </header>
      <main className="mx-auto max-w-5xl p-6">{tabs.find((t) => t.id === active)?.element}</main>
    </div>
  )
}
