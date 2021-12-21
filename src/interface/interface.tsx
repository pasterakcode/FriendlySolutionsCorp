interface Person{
	person_name: string,
	status: string,
}
interface Task{
	work_order_id: number,
	description: string,
	received_date: string,
	assigned_to: Person[],
	status: string,
	priority: string,
}
interface FriendlyTasks{
    exec_time: number,
    response: FriendlyTasksResponse,
}
interface FriendlyTasksResponse{
    current_page: number,
    from: number,
    last_page: number,
    per_page: number,
    to: number,
    total: number,
    data: Task[],
}
export type { Person, Task, FriendlyTasks, FriendlyTasksResponse }