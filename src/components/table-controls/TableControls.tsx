import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import style from './tableControls.scss'

type Props = {
    editUrl: string
    deleteFn: Function
}

function TableControls(props: Props): ReactElement {
    const {
        editUrl,
        deleteFn,
    } = props

    function deleteButtonClickHandler(): void {
        deleteFn()
    }

    return (
        <ul className={style.controlsList}>
            <li>
                <Link
                    to={editUrl}
                    className={style.editBtn}
                >
                    Edit
                </Link>
            </li>
            <li>
                <button
                    onClick={deleteButtonClickHandler}
                    className={style.deleteBtn}
                    type="button"
                >
                    Delete
                </button>
            </li>
        </ul>
    )
}

export default TableControls
