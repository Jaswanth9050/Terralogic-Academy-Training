function Myinput(props){
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input
            type={props.type}
            id={props.id}
            value={props.valu}
            onChange={props.onChange}
            />{" "}
        </div>
    )
}
export default Myinput          