import Btn from "../side_disp/Btn"

const Buttons = props => {
    return (
        <div className = "btns">
            <Btn type = "draw"/>
            <Btn type = "resign"/>
            <Btn type = "option3"/>
            <style jsx> {` 
                .btns {
                    display: flex;
                    padding-right: 0.5rem;
                    background: brown;
                }
            `} </style>
        </div>
    );
}

export default Buttons