import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-balance">
              STYLE HOUSE와
              <br />
              함께하세요
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              궁금한 점이 있으시거나 협업을 원하신다면 언제든지 연락해 주세요. 최고의 서비스로 응답드리겠습니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">본사 위치</h3>
                  <p className="text-muted-foreground text-sm">서울특별시 강남구 테헤란로 123, 패션타워 15층</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">전화번호</h3>
                  <p className="text-muted-foreground text-sm">02-1234-5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">이메일</h3>
                  <p className="text-muted-foreground text-sm">info@stylehouse.co.kr</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">운영시간</h3>
                  <p className="text-muted-foreground text-sm">평일 09:00 - 18:00 (주말 및 공휴일 휴무)</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" className="px-8 py-6">
                문의하기
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src="/modern-fashion-company-office-interior-with-team-w.jpg" alt="STYLE HOUSE 사무실" className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/90 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-medium mb-2">방문 예약</h3>
                <p className="text-muted-foreground text-sm mb-4">쇼룸 방문을 원하시면 미리 예약해 주세요.</p>
                <Button variant="outline" size="sm">
                  예약하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
