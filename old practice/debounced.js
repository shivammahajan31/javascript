function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debouncedLog = debounce(() => console.log('Function executed'), 5000);

debouncedLog();
debouncedLog();
debouncedLog(); 