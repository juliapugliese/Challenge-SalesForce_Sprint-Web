'use client'
import { useState } from "react";
import { Props } from "./interfaces";
import "./styles.css"
import Link from "next/link";

const DropDown = (props: Props) => {

    const [isActive, setIsactive] = useState(false);

    const handleClick = () => {
        setIsactive(!isActive)
      }

      return (
        <>        
            <li className="dpd-li" onClick={handleClick}>
                {props.text}
            </li>

            {/* <div className="dropdown">
                <div>
                    <ul>
                        <li>Serviços e planos</li>
                        <li>Customer 360</li>
                        <li>Especialistas</li>
                        <li>Pequenas Empresas</li>
                        <li>|</li>
                        <li><a href="https://www.salesforce.com/br/editions-pricing/overview/">Explore todos os produtos</a></li>
                    </ul>
                    <img src="x-icon.svg" alt="" />
                </div>
                
            </div> */}
        </>

    );
};
export default DropDown