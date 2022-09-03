import classNames from "classnames";
import './priorityButton.css';

const PriorityButton = ({color, text, priority, handleClick}) => {
    const isPrioritySelected = (value) => priority === value;

    const labelClasses = classNames({
        'label': true,
        'low': text === 'Low',
        'medium': text === 'Medium',
        'high': text === 'High'
    })
    return (
        <>
            <input
                type="radio"
                checked={isPrioritySelected(text)}
                id={text}
                name='priority'
                onChange={handleClick}
                className='button'
                value={text}

            />
            <label
                style={{backgroundColor: `${color}`}}
                htmlFor={text}
                className={labelClasses}><span>{text}</span></label>
        </>
    )
}

export default PriorityButton;
