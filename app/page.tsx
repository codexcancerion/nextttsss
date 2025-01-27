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
        <h1 className="text-4xl">Home Page</h1>
    
        {
          data.map((item) => {
            return <Product name={item.name} price={item.price} />
          })
        }

      </div>
    </>
  )
}