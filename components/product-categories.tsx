import { Button } from "@/components/ui/button"

export function ProductCategories() {
  const categories = [
    {
      title: "여성복",
      description: "세련되고 우아한 여성을 위한 컬렉션",
      image: "/elegant-women-s-clothing-collection-display.jpg",
    },
    {
      title: "남성복",
      description: "모던하고 클래식한 남성 스타일",
      image: "/modern-men-s-clothing-collection-display.jpg",
    },
    {
      title: "액세서리",
      description: "스타일을 완성하는 특별한 아이템들",
      image: "/luxury-fashion-accessories-display.jpg",
    },
  ]

  return (
    <section id="products" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-balance">
            다양한 스타일을 위한
            <br />
            완벽한 컬렉션
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            각각의 카테고리에서 당신만의 개성을 표현할 수 있는 특별한 아이템들을 만나보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden mb-6">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
              <Button variant="ghost" className="p-0 h-auto font-medium text-sm">
                {"컬렉션 보기 >"}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 py-6 bg-transparent">
            전체 제품 보러가기
          </Button>
        </div>
      </div>
    </section>
  )
}
