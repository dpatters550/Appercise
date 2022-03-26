import React from 'react';
import {RiDeleteBin2Fill} from 'react-icons/ri';
import {FaEdit} from 'react-icons/fa';



function Exercise({ exercise, onDelete, onEdit}) {
    return (
        <tr id="exercise-row">
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FaEdit onClick={() => onEdit(exercise)}/></td>
            <td><RiDeleteBin2Fill onClick={() => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;