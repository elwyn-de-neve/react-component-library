import React from "react";
import { StyledInput, StyledLabel } from "./Input.styled";


function Input( props ) {
    return (
        <>
            <StyledLabel htmlFor={ props.id }>
                { props.position === 'left' && props.label }
                <StyledInput
                    type={ props.type }
                    id={ props.id }
                    name={ props.name }
                    placeholder={ props.name }
                    value={ props.value }
                    onChange={ props.onChange }
                />
                { props.position === 'right' && props.label }
            </StyledLabel>
        </> );
}

export default Input;