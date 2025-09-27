export function CompanyValues() {
  return (
    <section id="values" className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-balance">
            혁신, 품질, 지속가능성을
            <br />
            추구합니다
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-accent-foreground rounded-sm"></div>
            </div>
            <h3 className="text-xl font-medium mb-4">혁신적 디자인</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              트렌드를 앞서가는 창의적인 디자인으로 새로운 패션 경험을 제공합니다.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-accent-foreground rounded-sm"></div>
            </div>
            <h3 className="text-xl font-medium mb-4">최고의 품질</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              엄격한 품질 관리와 최상의 소재로 고객 만족을 최우선으로 합니다.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-accent-foreground rounded-sm"></div>
            </div>
            <h3 className="text-xl font-medium mb-4">지속가능성</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              환경을 생각하는 책임감 있는 생산으로 더 나은 미래를 만들어갑니다.
            </p>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="aspect-[21/9] bg-primary-foreground/10 rounded-lg overflow-hidden">
            <img
              src="/sustainable-fashion-production-process-in-modern-f.jpg"
              alt="지속가능한 패션 생산 과정"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-2xl px-6">
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-balance">
                "패션은 단순한 옷이 아닌, 자신을 표현하는 언어입니다"
              </h3>
              <p className="text-primary-foreground/80">- STYLE HOUSE 창립자</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
