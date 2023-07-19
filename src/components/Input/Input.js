import './Input.css'
const Input = (props) =>{
	const {size = "medium", ...rest} = props
	return(
			<input type="text" className={`input ${size}`} {...rest}></input>
	)
}
export default Input