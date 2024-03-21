import { PropsTitle } from "./interfaces";
import "./styles.css"

const Title = (props: PropsTitle) => {
    if (props.level == 1) {
        return(
        <h1>{props.value}</h1>
        );
    }
    
    if (props.level == 2) {
        return (
        <h2>{props.value}</h2>
        );
    }


    switch(props.level){
        case 3: return <h1>{props.value}</h1>;
        case 4: return <h2>{props.value}</h2>
    }
};
export default Title