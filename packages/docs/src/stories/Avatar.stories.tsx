import type { Meta, StoryObj} from '@storybook/react'

import {Avatar, AvatarProps} from '@ignite-ui-njeronimo/react'

export default{
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/njeronimo1.png',
        alt: 'Nicolas Jeronimo'
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
    args:{ 
        src: undefined
    }
}