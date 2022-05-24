import { ButtonProps } from "./types"

const Button: React.FC<ButtonProps> = ({ children, variant, textSize, style, className, onClick, fullWidth }) => {
    let styles = ""
    if (variant === "primary")
        styles = `
            text-white
            hover:text-primary
            bg-gradient-to-r from-primary to-blue-500
            hover:bg-gradient-to-r hover:from-white hover:to-cyan-50
            border-primary shadow-lg rounded-full  p-3 text-${textSize} font-bold
            animation transition-all ease-linear duration-400 ${className}
            ${fullWidth && "w-full"}
        `
    else 
        styles = `
            text-primary
            hover:text-white
            hover:bg-gradient-to-r hover:from-primary hover:to-blue-500
            bg-gradient-to-r from-white to-cyan-50
            border-primary shadow-lg rounded-full  p-3 text-${textSize} font-bold
            animation transition-all ease-linear duration-400 ${className}
            ${fullWidth && "w-full"}
        `
    return (
        <button 
            className={styles} 
            style={style}
            onClick={onClick}
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