
const Btn = props => {
    return (
        <div className = "button">
            {props.type}
            <style jsx> {` 
                .button {
                    height: 3rem;
                    width: 4rem;
                    background: white;
                    margin: 0.5rem 0rem 0.5rem 0.5rem;
                    text-align: center;
                    display: inline-block;
                }
            `} </style>
        </div>
    );
}

export default Btn