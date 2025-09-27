import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-balance">
            스타일과 혁신이
            <br />
            만나는 곳
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
            STYLE HOUSE는 현대적인 감각과 품질을 바탕으로
            <br />
            당신만의 특별한 스타일을 완성합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="px-8 py-6 text-base">
              브랜드 스토리 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-base bg-transparent">
              제품 컬렉션 둘러보기
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
            <img
              src="/modern-fashion-store-interior-with-elegant-clothin.jpg"
              alt="STYLE HOUSE 매장 인테리어"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="bg-background/90 backdrop-blur-sm p-6 rounded-lg max-w-md">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">브랜드 스토리 알아보기</h3>
              <p className="text-sm">{"우리의 여정과 철학을 >"}</p>
            </div>

            <div className="bg-background/90 backdrop-blur-sm p-6 rounded-lg max-w-md">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">최신 컬렉션 보기</h3>
              <p className="text-sm">{"새로운 시즌 제품들을 >"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
