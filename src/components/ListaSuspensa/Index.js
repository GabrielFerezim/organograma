import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map((item, index) => { /* .map retorna um novo array de elementos, baseado no que retornamos na função passada por callback. */
                    return <option key={index}> {item} </option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;