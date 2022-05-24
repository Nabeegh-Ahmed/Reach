import {BsPencilFill} from 'react-icons/bs'
import { InputBarProps } from './types'

const InputBar: React.FC<InputBarProps> = ({icon, placeholder, type, className, value, onChange, name }) => {
    return (
        <div className="pt-2 relative mx-auto text-gray-600 w-full">
        <input className={`${className} border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-primary w-full`}
          type={type} name={name} placeholder={placeholder}  value={value} onChange={onChange}/>
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4 ">
          {icon}
        </button>
      </div>
    )
}

InputBar.defaultProps = {
    icon: <BsPencilFill />
}

export default InputBar