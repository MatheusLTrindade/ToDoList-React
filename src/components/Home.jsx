import React from 'react'

import AddTask from './AddTask';
import Tasks from './Tasks';

const Home = ({ tasks, handleTaskAddition, handleTaskClick, handleTaskDeletion }) => {

    return ( 
        <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
            />
        </>
     );
}
 
export default Home;