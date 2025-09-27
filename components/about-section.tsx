export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-balance">
              STYLE HOUSE는 패션을 통해
              <br />
              개성을 표현하는 공간입니다
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              2015년 설립된 이래, 우리는 고품질의 의류와 액세서리를 통해 고객들의 라이프스타일을 더욱 풍요롭게
              만들어왔습니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-2">품질에 대한 약속</h3>
                  <p className="text-muted-foreground text-sm">
                    엄선된 소재와 정교한 제작 과정을 통해 오래도록 사랑받을 수 있는 제품을 만듭니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-2">지속가능한 패션</h3>
                  <p className="text-muted-foreground text-sm">
                    환경을 생각하는 소재 선택과 생산 과정으로 지속가능한 패션 문화를 만들어갑니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="/fashion-designer-working-on-clothing-sketches-in-m.jpg" alt="패션 디자이너 작업 모습" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
