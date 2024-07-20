export const authService = {
    login: (email,password) => {
        if(email === "pavel@abc.com" && password === "abc") {
            localStorage.setItem("user", JSON.stringify({email}))
            return { email };
        }
        return null;
    },
    logout: () => {
        localStorage.removeItem("user");
    },
    getUser: () => {
        const user = localStorage.getItem("user")
        return user ? JSON.parse(user) : null;
    }
}