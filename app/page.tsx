import Product from "@/components/Product"

export default function Page() {

  const data = [
    {name: "bbq", price: 20},
    {name: "kwek kwek", price: 25},
    {name: "water", price: 15},
  ]

  return (
    <>
      <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
        <h1 className="text-4xl">Talipapa Store</h1>

        <p>Agatang kayo</p>
    
        {
          data.map((item, index) => {
            return <Product key={index} name={item.name} price={item.price} />
          })
        }

      </div>
    </>
  )
}