
const sourcePole = [ 3, 2, 1];
const auxiliaryPole = [];
const targetPole = [];

function hanoiTower(n, source, auxiliary, target) {
    
    if (n === 0) {
        // No disk to move
        return;
    }
 
    if (n === 1) {
      // Move a single disk from the source pole to the target pole
      target.push(source.pop());
      displayState();
      return;
    }
  

    if(n >1){
      hanoiTower(n-1,source,target,auxiliary);
      target.push(source.pop());
      displayState();
      hanoiTower(n-1,auxiliary,source,target);
      return;
    }
    displayState();
    
  }
  
  function displayState() {
    document.getElementById('output').innerHTML += `
      <p>A: ${sourcePole.join(', ')}</p>
      <p>B: ${auxiliaryPole.join(', ')}</p>
      <p>C: ${targetPole.join(', ')}</p>
      <hr>
    `;
  }
  
  displayState();
  
  hanoiTower(sourcePole.length, sourcePole, auxiliaryPole, targetPole);
  

  