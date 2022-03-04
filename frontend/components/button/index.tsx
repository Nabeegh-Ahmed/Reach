import { ButtonProps } from "./types"

const Button: React.FC<ButtonProps> = ({ children, variant, textSize, style }) => {
    return (
        <button 
            className={`
                text-${ variant === 'primary' ? 'secondary' : 'primary' } 
                hover:text-${ variant === 'primary' ? 'primary' : 'secondary' } 
                bg-${ variant === 'primary' ? 'primary' : 'secondary' } 
                hover:bg-${ variant === 'primary' ? 'secondary' : 'primary' }
                border-primary shadow-lg rounded-2xl border-4 p-2 text-${textSize}
                animation transition-all ease-linear duration-200
            `} 
            style={style}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    children: "button",
    variant: "primary",
    textSize: "sm",
    style: {}
}

export default Button