'use client'
import { Props } from "./interfaces";
import "./styles.css"
import Link from "next/link";
import Image from "next/image";


const IconeSobre = (props: Props) => {

    return (
        <Link className="icone-sobre" href={props.link}>
            <Image src={props.img} alt={props.alt}/>
            <div>
                <p>{props.tag}</p>
                <p>{props.title}</p>
                <p>{props.text}</p>
            </div>
        </Link>
     

    );
};
export default IconeSobre