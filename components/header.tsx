import { Button } from "@/components/ui/button"
import { Menu, ShoppingBag } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-sm"></div>
          <span className="text-xl font-bold tracking-tight">STYLE HOUSE</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
            회사소개
          </a>
          <a href="#products" className="text-sm font-medium hover:text-accent transition-colors">
            제품
          </a>
          <a href="#values" className="text-sm font-medium hover:text-accent transition-colors">
            가치
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
            연락처
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            쇼핑몰 방문
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
