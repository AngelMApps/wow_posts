<script>
	import Navbar from '../components/Navbar.svelte';
	let user = null;
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
import CompAuth from '../components/compAuth.svelte';
	
</script>

<main>
	<CompAuth/>
</main>

<style>
	main {
		height: 100%;
	}
</style>
