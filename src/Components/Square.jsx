function Square({ handleClick, value, index }) {
    return (
        <button className="square" onClick={() => handleClick(index)}>
            {value}
        </button>
    );
}

export default Square;
