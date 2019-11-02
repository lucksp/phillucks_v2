export const debounce = (fn: Function, time: number) => {
  let timeout: number | undefined;

  return function() {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};
