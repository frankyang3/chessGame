class Square extends React.Component {

    constructor(props) {
        super(props)
        this.state = {pieceID: -1,
                      coord: this.props.coords}
    }

    render() {
        if (this.state.pieceID != -1) {
            return(
                <div className = "square">
                    <div className = "piece">
                        piece
                    </div>
                </div>
            );
        }
        else if ((this.state.coord[0] + this.state.coord[1])%2 === 0) {
            return(
                <div className = "square">
                    square, ({this.state.coord[0]},{this.state.coord[1]}) &nbsp;
                    <style jsx> {`
                        .square {
                            background: black;
                            height: 4.2rem;
                            width: 4.2rem;
                        }

                        .square:hover {
                            background: yellow;
                        }
                    `} </style>
                </div>
            );
        }
        else if ((this.state.coord[0] + this.state.coord[1])%2 === 1){
            return(
                <div className = "square">
                    square, ({this.state.coord[0]},{this.state.coord[1]}) &nbsp;
                    <style jsx> {`
                        .square {
                            background: white;
                            height: 4.2rem;
                            width: 4.2rem;
                        }

                        .square:hover {
                            background: yellow;
                        }
                    `} </style>
                </div>
            );
        }
    }
}

export default Square