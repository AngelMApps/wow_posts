<script>
	import { goto } from '$app/navigation';
	export let showIconProfile = true;
	// your script goes here
</script>

<nav>
	<a href="/">
		<strong>WPosts</strong>
	</a>
	{#if showIconProfile}
		<i class="fas fa-user-circle" on:click={() => goto('/profile', { replaceState: true })} />
	{:else}
		<div />
	{/if}
</nav>

<style>
	/* your styles go here */
	nav {
		position: sticky;
		top: 0;
		z-index: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #000;
		height: 3.5rem;
		padding: 0px 10px;
	}
	a {
		text-decoration: none;
	}
	strong {
		font-size: 30pt;
		color: #fff;
		transition: color 0.5s ease-in-out;
	}
	strong:hover {
		color: rgb(14, 102, 126);
		transition: color 0.5s ease-in-out;
	}
	i {
		font-size: 30pt;
		color: #fff;
		transition: color 0.5s ease-in-out;
	}
	i:hover {
		color: rgb(14, 102, 126);
		transition: color 0.5s ease-in-out;
	}
</style>
