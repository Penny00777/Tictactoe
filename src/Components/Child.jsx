import Square from './Square';

function Child({ Passindex }) {
    return (
        <>
            <div className="grid">
                <div className="row1">
                    {Passindex(0)}
                    {Passindex(1)}
                    {Passindex(2)}
                </div>
                <div className="row2">
                    {Passindex(3)}
                    {Passindex(4)}
                    {Passindex(5)}
                </div>
                <div className="row3">
                    {Passindex(6)}
                    {Passindex(7)}
                    {Passindex(8)}
                </div>
            </div>
        </>
    );
}

export default Child;
