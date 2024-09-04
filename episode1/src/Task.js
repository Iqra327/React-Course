export const Task = (props) => {
 return (
  <div className='list' style={{backgroundColor: props.complete ? 'green' : '#d646f3'}}
  >
    <h1 className='task'>{props.taskName}</h1>
  
    <button className="completeTask" 
    onClick={() => props.completeTask(props.id)}>
      Complete
    </button>
    
    <button className='removeTask' 
    onClick={() => props.removeTask(props.id)}>
      Delete
    </button>
  </div>
)};