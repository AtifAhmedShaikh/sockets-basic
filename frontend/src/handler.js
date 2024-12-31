export const registerNewUser = (username) => {
  const previousUser = localStorage.getItem("users") || "[]";
  const parsed = JSON.parse(previousUser);
  parsed.push({ name: username });
  localStorage.setItem("users", JSON.stringify(parsed));
};

export const deleteUser = (username = "") => {
  const previousUser = localStorage.getItem("users") || "[]";
  const parsed = JSON.parse(previousUser);
  const newUsers = parsed.filter((user) => user.name?.toLowerCase() !== username?.toLowerCase());
  localStorage.setItem("users", JSON.stringify(newUsers));
};

export const loginUser = (username) => {
  const previousUser = localStorage.getItem("users") || "[]";
  const parsed = JSON.parse(previousUser);
  parsed.forEach((user) => {
    if (user.name?.toLowerCase() === username?.toLowerCase()) {
      user.isLogin = true;
    }
  });
  localStorage.setItem("users", JSON.stringify(parsed));
};

export const getCurrentUserName = () => {
  const previousUser = localStorage.getItem("users") || "[]";
  const parsed = JSON.parse(previousUser);
  return parsed.find((user) => user.isLogin) || "Atif Shaikh";
};
