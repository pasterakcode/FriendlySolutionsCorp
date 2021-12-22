import React, { useState } from 'react';
import { Task } from '../../interface/interface';
import styles from './TaskCard.module.css';

interface TableProps {
	task: Task;
}

const TaskCard = ({ task }: TableProps) => {
	const [showDetails, setShowDetails] = useState(false);
	const handleOnClick = () => {
		setShowDetails(!showDetails);
	};
	return (
		<div className={styles.taskCard}>
			<div className={styles.mainInformation}>
				<div className={styles.id}>
					<h5>id</h5>
					<p>{task.work_order_id}</p>
				</div>
				<div className={styles.description}>
					<h5>description</h5>
					<p>{task.description}</p>
				</div>
			</div>
			{showDetails && (
				<div className={styles.moreDetails}>
					<div className={styles.boxReceivedStatusPriority}>
						<div className={styles.receivedDate}>
							<h5>received date</h5>
							<p>{task.received_date}</p>
						</div>
						<div className={styles.status}>
							<h5>status</h5>
							<p>{task.status}</p>
						</div>
						<div className={styles.priority}>
							<h5>priority</h5>
							<p>{task.priority}</p>
						</div>
					</div>
					<div className={styles.boxAssignedTo}>
						<h5>assigned to</h5>
						{task.assigned_to.length === 0 ? (
							<p className={styles.personNone}>none</p>
						) : (
							task.assigned_to.map((el, index) => (
								<div
									className={styles.person}
									key={`T${task.work_order_id}.P${index}`}
								>
									<h5>person name</h5>
									<p>{el.person_name}</p>
									<h5>status</h5>
									<p>{el.status}</p>
								</div>
							))
						)}
					</div>
				</div>
			)}
			<button className={styles.btn} onClick={handleOnClick}>
				{showDetails ? 'hide' : 'show'} details
			</button>
		</div>
	);
};

export default TaskCard;
