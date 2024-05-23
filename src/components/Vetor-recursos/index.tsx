'use client'
import { Props } from "./interfaces";
import "./styles.css"
import Link from "next/link";


const Recursos = (props: Props) => {

    return (

        <Link className="vetor-recursos" href={props.link}>
            <img src={props.img} alt={props.alt}/>
            <div>
                <p>{props.title}</p>
                <p>{props.text}</p>
            </div>
        </Link>

    );
};
export default Recursos