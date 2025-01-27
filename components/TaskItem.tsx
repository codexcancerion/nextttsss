
interface TaskItemProps {
    task: string
}

export default function TaskItem({ task }: TaskItemProps) {
    return (
        <>
            <p>{task}</p>
        </>
    )
}