import { cn } from '@/utils'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/utils/types'
import { VariantProps, cva } from 'class-variance-authority'
import { ElementType, ReactElement, forwardRef } from 'react'

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

type TextProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
	C,
	VariantProps<typeof textStyles>
>

type TextComponent = <C extends ElementType = 'span'>(
	props: TextProps<C>
) => ReactElement | null

// @ts-expect-error - unexpected typing errors
export const Text: TextComponent = forwardRef(
	<C extends ElementType = 'span'>(
		{
			as,
			align,
			size,
			emphasis,
			italic,
			underline,
			weight,
			className,
			...props
		}: TextProps<C>,
		ref?: PolymorphicRef<C>
	) => {
		const Component = as || 'span'
		return (
			<Component
				ref={ref}
				className={cn(
					textStyles({
						align,
						size,
						emphasis,
						italic,
						underline,
						weight,
						className
					})
				)}
				{...props}
			/>
		)
	}
)
