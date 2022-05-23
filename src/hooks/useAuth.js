// check auth
export default function isAuth() {
    // get token from localStorage
    const token = localStorage.getItem('r_token');
    if (token !== undefined && token != null) {
        return true;
    }
    return false;
}
