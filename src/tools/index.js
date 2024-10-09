export const delayDecorator = (fn, delay = 0) => {
  return async (...args) => {
    const promise = fn(...args);

    await new Promise((resolve) => setTimeout(resolve, delay));

    return promise;
  };
};
