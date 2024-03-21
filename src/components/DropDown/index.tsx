'use client'
import { Props } from "./interfaces";
import "./styles.css"
import Link from "next/link";

const DropDown = (props: Props) => {
    const click1 = () => {
        return(
        <section>
            <h1>jsdnfcz,dsnvc</h1>
        </section>
        )
      }

    return (
        <li onClick={click1}>
            {props.text}
        </li>
    );
};
export default DropDown