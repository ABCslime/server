export default function authHeader() {
  let user = localStorage.getItem('user');

  if (user) {
    return { Authorization: 'Bearer ' + user }; // for back-end

  } else {
    return {};
  }
}
