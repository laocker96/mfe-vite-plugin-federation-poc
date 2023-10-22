import {useCallback, useState} from 'react';

const Button = () => {
    const [state, setState] = useState<number>(0);
    const handleClick = useCallback(() => {
        setState(state + 1);
    }, [state])

    return <button style={{background: "purple"}} onClick={handleClick}>Remote button {state}</button>

};

export default Button;