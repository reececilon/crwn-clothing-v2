import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div class='group'>
            <input class='form-input' type='text' {...otherProps}/>
            {label && (
                <label class={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
        </div>
    )
}

export default FormInput;