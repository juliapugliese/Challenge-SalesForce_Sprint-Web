import Link from "next/link"
import "./styles.css"
import Button from "@/components/Button"

const ProductPage = () => {
    const Click1 = () => {
        console.log('Click1');
    }
    
    return (
        <>
        <Button text="Texto" type="default" onClick={Click1}/>
        </>
    )
}

export default ProductPage