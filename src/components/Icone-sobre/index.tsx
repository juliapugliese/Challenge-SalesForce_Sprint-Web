'use client'
import { Props } from "./interfaces";
import "./styles.css"
import Link from "next/link";



const IconeSobre = (props: Props) => {

    return (
        <Link className="icone-sobre" href={props.link}>
            <img src={props.img} alt={props.alt}/>
            <div>
                <p>{props.tag}</p>
                <p>{props.title}</p>
                <p>{props.text}</p>
            </div>
        </Link>
     

    );
};
export default IconeSobre