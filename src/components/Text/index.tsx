import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const textStyles = cva('w-full', {
	variants: {
		emphasis: {
			low: 'text-gray-600 font-light'
		},
		size: {
			sm: 'text-sm',
			base: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl'
		},
		weight: {
			thin: 'font-thin',
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
			black: 'font-black'
		},
		align: {
			left: 'text-left',
			right: 'text-right',
			center: 'text-center'
		},
		italic: {
			true: 'italic'
		},
		underline: {
			true: 'underline underline-offset-2'
		}
	},
	defaultVariants: {
		size: 'base',
		align: 'left'
	}
})

type TextProps = ComponentProps<'span'> & VariantProps<typeof textStyles>

export const Text = ({ ...props }: TextProps) => {
	return <span {...props}>Text</span>
}
