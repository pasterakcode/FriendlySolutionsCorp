import React, { useState } from 'react';
import styles from './FindBar.module.css';
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
	return (
		<div className={styles.findBar}>
			<input
				id='toFind'
				type='text'
				value={charsToFind}
				placeholder='find ...'
				onChange={handleInputChars}
			/>
			<label htmlFor='toFind'>
				We found {tasksQty} {tasksQty > 1 ? 'tasks' : 'task'}.
			</label>
		</div>
	);
};

export default FindBar;
