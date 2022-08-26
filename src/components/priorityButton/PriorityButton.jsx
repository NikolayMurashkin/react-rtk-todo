import './priorityButton.css';

const PriorityButton = ({color, text, setPriority}) => {
    return (
        <input
            type="button"
            id='priority'
            name='priority'
            onClick={() => setPriority(text)}
            className='button'
            value={text}
            style={{backgroundColor: `${color}`}}/>

    )
}

export default PriorityButton;