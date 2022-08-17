export const setToken = (token) => localStorage.setItem("userToken", token);
export const removeToken = () => localStorage.removeItem("userToken");