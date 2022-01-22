<script>
	import { goto } from '$app/navigation';
	import { user } from '../../store/User';
	import { auth } from '../../firebase';
	import { onMount } from 'svelte';
	onMount(async () => {
		try {
			await user.current();
			console.log($user);
		} catch (error) {
			goto('/login', { replaceState: true });
		}
	});
</script>

<!-- markup (zero or more items) goes here -->
{#if $user}
	<h1>profile</h1>
	<button
		on:click={() => {
			auth.signOut().then(() => {
				console.log('log out');
				goto('/login', { replaceState: true });
			});
		}}
	>
		logout
	</button>
{/if}

<style>
	/* your styles go here */
</style>
