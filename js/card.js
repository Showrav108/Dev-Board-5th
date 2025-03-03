document.addEventListener('DOMContentLoaded', function(){
    const taskAssignedElement = document.getElementById('task-assigned');
    const navbarCountElement = document.getElementById('navbar-count');
    const activityElement = document.getElementById('activity');
    const clearHistory = document.getElementById('clear-history');
    const completeButton = document.querySelectorAll('.complete-btn');

    completeButton.forEach(button => {
        button.addEventListener('click', function(){
            const taskName = this.closest('.card').querySelector('.card-title').textContent;
            alert(`Task "${taskName}" marked as completed!`);
            decreaseTaskAssigned();
            increaseNavbarCount();
            addSuccessMessage(taskName);
        });
    });

    clearHistory.addEventListener('click', function(){
        activityElement.innerHTML = '';
    });

    function decreaseTaskAssigned(){
        let taskCount = parseInt(taskAssignedElement.textContent);
        if(!isNaN(taskCount) && taskCount >0){
            taskCount--;
            taskAssignedElement.textContent = taskCount;
        }
    }

    function increaseNavbarCount(){
        let navbarCount = parseInt(navbarCountElement.textContent);
        if(!isNaN(navbarCount)){
            navbarCount++;
        navbarCountElement.textContent = navbarCount;
        }  
    }

    function addSuccessMessage(taskName){
        const now = new Date();
        const time = now.toLocaleTimeString();

        const message = document.createElement('p');
        message.textContent = `${time}: Task '${taskName}' completed successfully. `;
        activityElement.appendChild(message);
    }

});