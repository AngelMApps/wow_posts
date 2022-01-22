<script>
	import { onMount } from 'svelte';
	import { user } from '../store/User';
	onMount(async () => {
		try {
			await user.current();
			console.log($user);
		} catch (error) {
			goto('/login', { replaceState: true });
		}
	});
</script>

{#if $user === false}
	<p>CARGHANGO...</p>
{:else}
	<main>
		<h1>Main</h1>
		<p>{$user.email}</p>
	</main>
{/if}

<style>
	main {
		height: 100%;
	}
</style>
