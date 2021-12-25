import { cloneElement, Children } from "react";

const Calculator = (props) => {
    return ( 
        <div className="calculator">
            {Children.toArray(props.children)
                .map( child => cloneElement(child, { ...props }))
            }
        </div>
    );
}
 
export default Calculator;