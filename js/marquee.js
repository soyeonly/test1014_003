$(document).ready(function(){

   //텍스트 흐르는 효과
   function createLoopingText(el) {
    const lerp = (current, target, factor) => current * (1 - factor) + target * factor;
  
    const state = {
      el, 
      lerp: {
        current: 0,
        target: 0 
      },
      interpolationFactor: 0.05, // 선형 보간에 사용되는 요인
      speed: 0.03, 
      direction: -1,
    };
    
    state.el.style.cssText = 'position: relative; display: inline-flex; white-space: nowrap;';
    state.el.children[1].style.cssText = `position: absolute; left: ${100 * -state.direction}%;`;
  
    
    function animate() {
      state.lerp.target += state.speed;
      state.lerp.current = lerp(state.lerp.current, state.lerp.target, state.interpolationFactor);
  
      if (state.lerp.target > 100) {
        state.lerp.current -= state.lerp.target;
        state.lerp.target = 0;
      }
  
      const x = state.lerp.current * state.direction;
      state.el.style.transform = `translateX(${x}%)`;
    }
  
    function render() {
      animate();
      window.requestAnimationFrame(render);
    }
  
    render();
    return state;
  }
  
  document.querySelectorAll('.loop-container').forEach(el => createLoopingText(el));










});