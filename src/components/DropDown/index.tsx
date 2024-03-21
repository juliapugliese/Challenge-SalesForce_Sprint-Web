'use client'
import { Props } from "./interfaces";
import "./styles.css"
import Link from "next/link";

const DropDown = (props: Props) => {
    const click1 = () => {
        console.log('Click1');
      }

    return (
        <li onClick={click1} className={props.type}>
            {props.text}
            <Link href={""}></Link>
        </li>
    );
};
export default DropDown