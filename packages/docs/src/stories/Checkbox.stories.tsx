import type { Meta, StoryObj} from '@storybook/react'

import {Box, Checkbox, Checkboxprops,Text} from '@ignite-ui-njeronimo/react'

export default{
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {
        
    },
    decorators: [
        (Story) => {
            return(
                <Box as="label" css={{display: 'flex', flexDirection: 'row', gap:'$2'}}>
                    {Story()}
                    <Text size="sm">Accept terms of use</Text>
                </Box>
            )
        }
    ]
} as Meta<Checkboxprops>

export const Primary: StoryObj<Checkboxprops> = {
}