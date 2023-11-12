import type { Meta, StoryObj} from '@storybook/react'

import {Heading, HeadingProps} from '@ignite-ui/react'

export default{
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse iure molestiae exercitationem fugit impedit ratione quam dolores nisi fuga. Veniam nulla modi recusandae? Illo atque vero tempore autem non!',
        size: 'md'
    },
    argTypes: {
        size:{
            options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl','6xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
    args:{
        children: 'h1 Heading',
        as: 'strong'
    },

    parameters: {
        docs:{
            description: {
                story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a pripriedade `as`'
            }
        }
    }
}