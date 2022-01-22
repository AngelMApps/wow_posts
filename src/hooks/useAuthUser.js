import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { goto } from '$app/navigation';
import { onMount } from "svelte";
import { isLogged } from "../store/User";
export const useAuthUser = () => {
    onMount(() => {
        onAuthStateChanged(auth, user => {
            let userLogged = user == null ? false : true;
            if (!userLogged) {
                goto('/login', { replaceState: true });
                isLogged.set(false);
            } else {
                isLogged.set(true);
            }
        })
    });
}