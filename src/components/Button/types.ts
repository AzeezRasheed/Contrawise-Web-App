export type ButtonProps = {
    children?: JSX.Element | string
    onClick: (arg: any) => void
    className?: string
    text?: string
    ripple?: boolean
    disabled?: boolean
}