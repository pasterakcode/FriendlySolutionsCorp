import React, { useState, useEffect } from 'react';
import TaskCard from './components/taskCard/TaskCard';
import FindBar from './components/findBar/FindBar';
import { Task } from './interface/interface';
import friendlyTasks from './api/Api';
import './App.css';

function App() {
	const [tasks, setTasks] = useState<Task[] | null>(null);
	const [tasksToShow, setTasksToShow] = useState<Task[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await friendlyTasks();
			setTasks(data.response.data);
		};
		fetchData();
	}, []);
	useEffect(() => {
		setTasksToShow(tasks);
	}, [tasks]);
	const handleFindBarChars = (charsToFind: string): void => {
		const rulesOfSelectionOfTasks = (task: Task): boolean => {
			return task.description.toUpperCase().includes(charsToFind.toUpperCase());
		};
		const selectedTasks = tasks?.filter(rulesOfSelectionOfTasks) || [];
		setTasksToShow(selectedTasks);
	};
	return (
		<div className='App'>
			<p>Friendly Tasks Menager</p>
			{tasks ? (
				<>
					<FindBar
						onHandleFindBarChars={handleFindBarChars}
						tasksQty={tasksToShow?.length || 0}
					/>
					{tasksToShow?.map(task => (
						<TaskCard task={task} key={task.work_order_id} />
					))}
				</>
			) : (
				<p>Loading page</p>
			)}
		</div>
	);
}

export default App;
