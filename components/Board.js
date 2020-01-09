import Row from "../components/Row"

export default Board => {
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
            <style jsx> {`
                .board {
                    width: 100%;
                    height: 100%;
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
                    margin-bottom: 1rem;
                    margin-left: 10%;
                }
                .index {
                    display: flex;
                    width: 1rem;
                    writing-mode: vertical-rl;
                    text-orientation: upright;
                    justify-content: center;
                    margin-left: 0.3rem;
                    margin-top: 1.5rem;
                    letter-spacing: 3rem;
                }
            `} </style>
        </div>
    );
};