import React from 'react'
import "../css/Cell.css"

const Cell = ({ cellValue, onClick }) => {
    return (
        <div className='board-cell'>
            {cellValue !==0 &&
                <div className='cell-content'>
                    {cellValue === -1? "X":"O"}
                </div>
            }
        </div>
    )
}

export default Cell