export function increment() {
  return {
    type: "INCREMENT",
  };
}

export function decrement() {
  return { type: "DECREMENT" };
}

export function incrementByAmount(amount) {
  return { type: "INCREMENT_BY_AMOUNT", payload: amount };
}
