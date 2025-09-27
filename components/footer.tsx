export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-foreground rounded-sm"></div>
              <span className="text-xl font-bold tracking-tight">STYLE HOUSE</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              스타일과 혁신이 만나는 곳,
              <br />
              당신만의 특별한 패션을 완성하세요.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">회사</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  브랜드 스토리
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  채용정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  보도자료
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">제품</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  여성복
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  남성복
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  액세서리
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  신상품
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">고객지원</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  고객센터
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  배송안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  교환/반품
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  사이즈 가이드
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">© 2025 STYLE HOUSE. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                쿠키정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
