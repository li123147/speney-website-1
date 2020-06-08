import tagStore from "./tagStore";
import recordStore from "./recordStore";

const store = {
  ...recordStore,
  ...tagStore,
};
console.log(store);

export default store;
