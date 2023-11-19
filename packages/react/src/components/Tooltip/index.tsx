import { ComponentProps, ElementType } from "react";
import { styled } from "../../styles";
import { TooltipContainer, TooltipContent } from "./styles";
import * as TooltipStyle from '@radix-ui/react-tooltip';

export interface TooltipProps{
    open: boolean,
    onOpenChange?: () => void,
    children: JSX.Element,
    content: JSX.Element
}

export function Tooltip({open, onOpenChange, children, content} : TooltipProps){
    return(
        <TooltipStyle.Provider >
            <TooltipContainer open={open} defaultOpen={true}>
                <TooltipStyle.Portal>
                    <TooltipContent  side="top" >
                        <TooltipStyle.Arrow fill="$gray900" />
                        {content}
                    </TooltipContent>
                </TooltipStyle.Portal>

                <TooltipStyle.Trigger asChild>
                    {children}
                </ TooltipStyle.Trigger>
            </TooltipContainer>
        </TooltipStyle.Provider>
    )
}

Tooltip.displayName = "Tooltip"