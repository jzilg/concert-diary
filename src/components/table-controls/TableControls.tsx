import React, { FC } from 'preact/compat'
import { Link } from 'react-router-dom'
import EditIcon from 'react-bootstrap-icons/dist/icons/pencil-square'
import DeleteIcon from 'react-bootstrap-icons/dist/icons/trash'
import style from './tableControls.module.scss'

type Props = {
    editUrl: string
    deleteFn: Function
}

const TableControls: FC<Props> = (props) => {
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
                    title="Edit"
                >
                    <EditIcon />
                </Link>
            </li>
            <li>
                <button
                    onClick={deleteButtonClickHandler}
                    className={style.deleteBtn}
                    type="button"
                    title="Delete"
                >
                    <DeleteIcon />
                </button>
            </li>
        </ul>
    )
}

export default TableControls
