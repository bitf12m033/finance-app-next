import {variants , sizes} from'@/lib/variants'
const Button = (props) => {
    return (<button {...props} className={`${props.variant ? variants[props.variant] : variants['default']} ${props.size ? sizes[props.size] : sizes['base']} ${props.className}`}></button>)
}

export default Button