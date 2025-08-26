import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props);
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder} /> {/* O termo 'props.obrigatorio' é puxado do arq formulario, aonde é colocado obrigatorio={true} */}
        </div>
    )

}

export default CampoTexto;