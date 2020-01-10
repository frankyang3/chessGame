
const Move = props => {
    return (
        <div className = "container">
            <div className = "white">
                move
            </div>
            <div className = "black">
                move
            </div>
            <style jsx> {`
                .container {
                    width: 9rem;
                    height: 1.5rem;
                    display: flex;
                }
                .container .white {
                    background: white;
                    width: 50%;
                    height: 100%;
                    text-align: center;
                    display: inline-block;
                }
                .container .black {
                    background: black;
                    width: 50%;
                    height: 100%;
                    text-align: center;
                    display: inline-block;
                }
            `} </style>
        </div>
    );
}

export default Move