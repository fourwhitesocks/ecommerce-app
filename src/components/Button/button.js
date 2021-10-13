
import styles from './Button.module.scss';

//...rest means 'the rest' of the variables that somebody might pass in
const Button = ({ children, className, ...rest }) => {
    let buttonClassName = styles.button;

   if (className) {
        buttonClassName = `${buttonClassName} ${className}` ;
    }
   
   
   
    return (
        <button className={buttonClassName} {...rest} >
            
            { children }

        </button>
    )
}

export default Button