type PolicySection = {
  title: string
  body?: string
  items?: string[]
}

type PolicyPageProps = {
  title: string
  intro: string
  sections: PolicySection[]
}

export default function PolicyPage({ title, intro, sections }: PolicyPageProps) {
  return (
    <main className="min-h-screen bg-secondary pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary text-center mb-4">
          KienVocal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-primary">
          {title}
        </h1>
        <p className="text-gray-300 text-center leading-relaxed max-w-3xl mx-auto mb-12">
          {intro}
        </p>

        <div className="space-y-6 text-gray-300">
          {sections.map((section, index) => (
            <section key={section.title} className="bg-secondary-light p-6 sm:p-8 rounded-lg border border-primary/10">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                {index + 1}. {section.title}
              </h2>
              {section.body ? (
                <p className="leading-relaxed mb-4">{section.body}</p>
              ) : null}
              {section.items ? (
                <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-primary/10 bg-secondary-light/60 p-6 text-sm leading-relaxed text-gray-400">
          <p>Cập nhật lần cuối: 29/05/2026.</p>
          <p className="mt-2">
            Thông tin hỗ trợ: zaikaman123@gmail.com, 0903100887, 536/43/68A Âu Cơ, Phường Bảy Hiền, TP. Hồ Chí Minh.
          </p>
        </div>
      </div>
    </main>
  )
}
