import { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores saepe non dolor culpa quo, asperiores commodi obcaecati ab sit!'
	}
}
