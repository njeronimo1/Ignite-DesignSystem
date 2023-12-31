import type { Meta, StoryObj} from '@storybook/react'

import {Text, TextProps} from '@ignite-ui-njeronimo/react'

export default{
    title: 'Typography/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse iure molestiae exercitationem fugit impedit ratione quam dolores nisi fuga. Veniam nulla modi recusandae? Illo atque vero tempore autem non!',
    },
    argTypes: {
        size:{
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl','6xl','7xl','8xl','9xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
    args:{
        children: 'Strong text',
        as: 'strong'
    }
}