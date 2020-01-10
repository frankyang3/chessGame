import Row from "./Row"
import MoveTable from "../side_disp/MoveTable"
import Buttons from "../side_disp/Buttons"

class Board extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var chessboard = [];
        for (let i = 0; i < 8; i++) {
            var alpha = ['a','b','c','d','e','f','g','h','i'];
            chessboard.push(<Row rownum = {i} rowlabel = {alpha[i]} key = {i}/>);
        }
        var index = [8,7,6,5,4,3,2,1];
        return (
            <div className="board">
                <div className="boardSpace">
                    {chessboard}
                    <div className = "index">
                        <div className = "content">
                            {index}
                        </div>
                    </div>
                </div>
                <div className = "side">
                    <div className = "table">
                        <MoveTable/>
                    </div>
                    <div className = "buttons">
                        <Buttons/>
                    </div>
                </div>
                <style jsx> {`
                    .board {
                        width: 100%;
                        height: 90vh;
                        background: gray;
                        display: flex;
                    }
                    .boardSpace {
                        display: flex;
                        justify-content: center;
                        text-align: center;
                        background: brown;
                        padding: 1rem 1rem 1rem 1rem;
                        margin-top: 1rem;
                        margin-bottom: auto;
                        margin-left: 10%;
                    }
                    .index {
                        display: flex;
                        width: 1rem;
                        writing-mode: vertical-rl;
                        text-orientation: upright;
                        justify-content: center;
                        margin-left: 0.3rem;
                        margin-right: auto;
                        margin-top: 1.5rem;
                        letter-spacing: 3rem;
                    }
                    .side {
                        margin-left: 9rem;
                        margin-top: 8rem;
                    }
                    .buttons {
                        margin-top: 5rem;
                    }
                    .table {
                        margin-left: 1rem;
                    }
                `} </style>
            </div>
        );
    }
}

export default Board