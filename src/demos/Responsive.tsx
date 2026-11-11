export default function Responsive() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-2 font-semibold">Mobile-first: 1 coluna → 2 (md) → 4 (lg)</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="rounded-lg bg-blue-100 p-6 text-center dark:bg-blue-900">
              {n}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-2 font-semibold">Estados: hover, focus, disabled, group-hover</h3>
        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:scale-105 hover:bg-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-300 focus-visible:outline-none disabled:opacity-50">
            Hover / Tab
          </button>
          <button disabled className="rounded-lg bg-indigo-600 px-4 py-2 text-white disabled:opacity-50">
            Disabled
          </button>
          <div className="group cursor-pointer rounded-lg border p-4">
            <p>Passa o rato aqui</p>
            <p className="text-sm text-neutral-400 transition group-hover:text-pink-500">
              …e eu mudo de cor (group-hover)
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-2 font-semibold">Dark mode: dark:</h3>
        <div className="rounded-lg bg-white p-4 text-neutral-900 dark:bg-neutral-800 dark:text-white">
          Fundo e texto mudam com a classe <code>.dark</code> no &lt;html&gt;.
        </div>
      </section>
    </div>
  )
}
