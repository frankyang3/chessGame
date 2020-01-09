import Square from "./Square"

class Row extends React.Component {
    constructor(props) {
        super(props)
        this.state = {row: this.props.rownum,
                      label: this.props.rowlabel}
    }
    render() {
        var row = [];
        var i;
        for (i = 0; i < 8; i++) {
            row.push(<Square coords = {[this.state.row, i]} key = {i}/>);
        }
        return (
            <div>
                {row}{this.state.label}
            </div>
        );
    }
}

export default Row