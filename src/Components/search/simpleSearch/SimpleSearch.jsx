export const SimpleSearch = ({label, value, onChange, onClick}) => {

    return (
        <header className="header">
            <div>
                <p>{label}</p>
                <input className="headerInput" type="text" value={value} onChange={onChange}/>
                <button onClick={onClick}>rechercher</button>
            </div>
        </header>
    )
}