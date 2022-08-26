import './inputTitle.css';

const InputTitle = ({title, setTitle}) => {

    return (
        <label htmlFor="title"
               className='input-title__label'>
            <input
                placeholder='Enter title here...'
                className='input-title'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                name='title'
                id='title'
                type="text"/>
        </label>
    )
}

export default InputTitle;