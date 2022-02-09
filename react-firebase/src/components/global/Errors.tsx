import React from 'react';
interface IProps{
    errors: string[]
}
const Errors:React.FC<IProps> = ({errors}) => {
    return (
        <ul>
            {
                errors.map((err, index) =>(
                    <li key={index}>{err}</li>
                ))
            }
        </ul>
    )
};

export default Errors;
