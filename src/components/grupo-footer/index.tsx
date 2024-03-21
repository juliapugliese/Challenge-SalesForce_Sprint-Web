import {PropsFooterItem} from './interfaces'
import "./styles.css"

const FooterItem = (props: PropsFooterItem) => 
{
    return(
        <div>
            <p>{props.title}</p>
            <div className="paragrafo-footer">
                <p>{props.line}<br/></p>
                <p>{props.line}</p>
                <p>{props.line}</p>
            </div>
        </div>
    )
}

export default FooterItem

