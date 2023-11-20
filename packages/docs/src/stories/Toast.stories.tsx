import type { Meta, StoryObj} from '@storybook/react'

import {Box, ToastComponent, ToastProps, Text} from '@ignite-ui-njeronimo/react'

export default{
    title: 'Form/Toast',
    component: ToastComponent,
    args: {
        open: true,
        content: '21 de Outubro - Indisponível',
        children: (<span></span>) ,
        
    },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
}