export const getFromLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name)) || [];
};
export const setToLocalStorage = (data) => {
  localStorage.setItem("news", JSON.stringify(data));
};
