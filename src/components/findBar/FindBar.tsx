import React, { useState } from 'react';
import { Task } from '../../interface/interface';
interface FindBarProps {
	tasksQty: number;
	onHandleFindBarChars: Function;
}
const FindBar = ({ onHandleFindBarChars, tasksQty }: FindBarProps) => {
	const [charsToFind, setCharsToFind] = useState('');
	const handleInputChars = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setCharsToFind(e.target.value);
		onHandleFindBarChars(e.target.value);
	};
	const style = {
		border: '2px solid red',
		margin: '20px',
		padding: '20px',
	};
	return (
		<div style={style}>
			<input type='text' value={charsToFind} onChange={handleInputChars} />
			<p>
				We found: {tasksQty} {tasksQty > 1 ? 'tasks' : 'task'}.
			</p>
		</div>
	);
};

export default FindBar;
