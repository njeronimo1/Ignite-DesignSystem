import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";
import { ComponentProps } from "react";

export interface Checkboxprops extends ComponentProps<typeof CheckboxContainer>{}

export function Checkbox(props : Checkboxprops){
    return(
        <CheckboxContainer {...props}>
            <CheckboxIndicator asChild>
                <Check weight="bold"/>
            </CheckboxIndicator>
        </CheckboxContainer>
    )
}

Checkbox.displayName = "Checkbox"