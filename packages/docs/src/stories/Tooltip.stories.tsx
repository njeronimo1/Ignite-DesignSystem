import type { Meta, StoryObj} from '@storybook/react'

import {Box, Tooltip, TooltipProps, Text} from '@ignite-ui-njeronimo/react'

export default{
    title: 'Form/Tooltip',
    component: Tooltip,
    args: {
        open: true,
        content: (
            <>
                <Text>21 de Outubro - Indisponível</Text>
            </>
        ),
        children: (<span></span>) ,
        
    },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
}