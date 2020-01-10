import Move from "../side_disp/Move"

const MoveTable = props => {
    var Moves = [<Move/>, <Move/>, <Move/>, <Move/>, <Move/>, <Move/>]
    return (
        <div className = "container">
            {Moves}
            <style jsx> {`
                .container {
                    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
                    background: brown;
                    width: 9rem;
                }
            `} </style>
        </div>
    );
}
    
export default MoveTable