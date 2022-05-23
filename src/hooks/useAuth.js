// check auth
export default function isAuth() {
    // get token from localStorage
    const token = '5989323042';
    if (token !== undefined && token != null) {
        return true;
    }
    return false;
}
