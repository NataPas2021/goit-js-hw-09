import { Notify } from "notiflix";

const formRef = document.querySelector('form');
  


formRef.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay)
    
  })
  
}

function onFormSubmit (e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;
  let delayStep = Number(delay.value);
  for(let i = 1; i <= amount.value; i+=1) {
     createPromise(i, delayStep).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delayStep += Number(step.value);
    
  }
  formRef.reset();
}




