
interface ProductProps {
    name: string; 
    price: number;
}

export default function Product({name, price} : ProductProps) {
    return (
        <p>{name} - {price}</p>
    )
}