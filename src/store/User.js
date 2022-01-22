import { writable } from 'svelte/store';
import { firebase } from "../firebase";
export const isLogged = writable(false);

const createUser = () => {
    const { subscribe, set } = writable(false);
    return {
        subscribe,
        setUser: (user) => {
            set(user)
        },
        current: async() =>{
            const user = await firebase.getCurrentUser();
            set(user)
        }
    }
}
export const user = createUser();