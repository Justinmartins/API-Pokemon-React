export function CheckBox ({checked, onChange, label}) {
    return <div>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e)=> onChange(e.target.value)}
        />
        <label>{label}</label>
    </div>
}