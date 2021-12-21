import React from 'react';
import { Task } from '../../interface/interface';
import styles from './TaskCard.module.css';

interface TableProps {
	task: Task;
}

const TaskCard = ({ task }: TableProps) => {
	return (
		<div className={styles.taskCard}>
			<div className={styles.id}>
				<h5>id</h5>
				<p>{task.work_order_id}</p>
			</div>
			<div className={styles.description}>
				<h5>description</h5>
				<p>{task.description}</p>
			</div>
			<div>
				<h5>date</h5>
				<p>{task.received_date}</p>
			</div>
			<div className={styles.assignedTo}>
				{task.assigned_to.map(el => (
					<>
						<div key={`1${task.work_order_id}el`}>
							<h5>person name</h5>
							<p>{el.person_name}</p>
						</div>
						<div key={`2${task.work_order_id}el`}>
							<h5>status</h5>
							<p>{el.status}</p>
						</div>
					</>
				))}
			</div>
			<div>
				<h5>status</h5>
				<p>{task.status}</p>
			</div>
			<div>
				<h5>priority</h5>
				<p>{task.priority}</p>
			</div>
		</div>
	);
};

export default TaskCard;
