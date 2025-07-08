
document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const scoreElement = document.getElementById('score');
    let score = 0;
    
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        gameContainer.appendChild(cell);
    }
    
    placeTarget();
    
    function placeTarget() {
        const oldTarget = document.querySelector('.target');
        if (oldTarget) {
            oldTarget.remove();
        }

        const cells = document.querySelectorAll('.cell');
        const randomIndex = Math.floor(Math.random() * 25);
        const randomCell = cells[randomIndex];
        
        const target = document.createElement('div');
        target.className = 'target';
        
        target.addEventListener('click', () => {
            score++;
            scoreElement.textContent = score;
            placeTarget();
        });
        
        randomCell.appendChild(target);
    }
});