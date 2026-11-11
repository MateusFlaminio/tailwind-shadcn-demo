import "./Card.css"
import styles from "./Card.module.scss"

function CardCss() {
  return (
    <div className="card">
      <h3 className="card__title">CSS puro</h3>
      <p className="card__text">Classes semânticas, estilos noutro ficheiro.</p>
      <button className="card__button">Ver mais</button>
    </div>
  )
}

function CardScss() {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>SCSS</h3>
      <p className={styles.card__text}>Nesting e variáveis, mas ainda outro ficheiro.</p>
      <button className={styles.card__button}>Ver mais</button>
    </div>
  )
}

function CardTailwind() {
  return (
    <div className="max-w-xs rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:max-w-sm">
      <h3 className="mb-2 text-xl font-semibold">Tailwind</h3>
      <p className="text-sm text-neutral-500">
        Tudo no código, zero ficheiros de CSS extra.
      </p>
      <button className="mt-4 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Ver mais
      </button>
    </div>
  )
}

export default function CssVsTailwind() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <CardCss />
      <CardScss />
      <CardTailwind />
    </div>
  )
}
