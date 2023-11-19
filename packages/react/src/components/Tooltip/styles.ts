import { styled } from "../../styles";
import * as Tooltip from '@radix-ui/react-tooltip';

export const TooltipContainer = styled(Tooltip.Root, {
    
})

export const TooltipContent = styled(Tooltip.Content, {
    borderRadius: '4px',
    padding: '0.7rem 0.9rem',
    fontSize: '0.875rem',
    lineHeight: 1,
    color: '$gray600',
    backgroundColor: '$gray900',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    userSelect: 'none',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',

})