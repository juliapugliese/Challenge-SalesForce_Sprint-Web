'use client'
import { Props } from "./interfaces";
import "./styles.css"
import Link from "next/link";
import Image from 'next/image';


const EmpresasParceiras = (props: Props) => {

    return (

        <Link className="empresas-parceiras" href={props.link}>
            <Image src={props.img} alt={props.alt}/>
            <div>
                <p>{props.setor}</p>
                <p>{props.tipo}</p>
            </div>
        </Link>

    );
};
export default EmpresasParceiras