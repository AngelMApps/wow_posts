import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { goto } from '$app/navigation';
import { useLocation } from "svelte-navigator";
import { onMount } from "svelte";
import { isLogged } from "../store/isLogged";
export const useAuthUser = () => {
    const { subscribe } = useLocation();
    let pathname = "/"
    subscribe((info) => {
        pathname = info.pathname;
    });
    onMount(() => {
        onAuthStateChanged(auth, user => {
            let userLogged = user == null ? false : true;
            if (!userLogged) {
                goto('/login', { replaceState: true });
                isLogged.set(false);
            } else {
                isLogged.set(true);
                if (pathname === "/login" || "/register") {
                    goto('/', { replaceState: true });
                }
            }
        })
    });
}