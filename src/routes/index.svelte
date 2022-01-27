<script>
	import Navbar from '../components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { user } from '../store/User';
	import { db } from '../firebase';
	import { goto } from '$app/navigation';
	import Card, { Content, Actions } from '@smui/card';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	let posts = [];
	onMount(async () => {
		try {
			await user.current();
			db.collection('posts')
				.orderBy('created')
				.onSnapshot((querySnapshot) => {
					let docs = [];
					querySnapshot.forEach((doc) => {
						docs.push({ ...doc.data(), id: doc.id });
					});
					posts = [...docs];
				});
		} catch (error) {
			console.error(error);
		}
		if ($user == null) {
			goto('/login', { replaceState: true });
		}
	});
</script>

{#if $user === null}
	<p>CARGANGO...</p>
{:else if $user != false}
	<Navbar />
	<main>
		<LayoutGrid>
			{#each posts as p, i}
				<Cell order={posts.length + 1 - i}>
					<div class="card-container">
						<Card>
							<Content style="word-wrap: break-word;">
								{#if p.text[0] == '#'}
									<span style="color: #3498DB;">{p.text.split(' ')[0]}</span>
								{:else}
									<span style="color: #000;">{p.text.split(' ')[0]}</span>
								{/if}
								<span style="color: #000;"
									>{p.text.slice(p.text.split(' ')[0].length, p.text.length)}</span
								>
								<br />
								<br />
								<hr />
							</Content>
							<Actions style="display: flex;flex-direction:row;justify-content: space-between;">
								<div style="display: flex; flex-direction: row; align-items: center;">
									<img src={p.avatar} alt="avatar" />
									<div
										style="display: flex; flex-direction: column; justify-content: center; margin-left: 5px;"
									>
										<strong>{p.name}</strong>
										<span>{new Date(p.created).toLocaleDateString()}</span>
									</div>
								</div>
							</Actions>
						</Card>
					</div>
				</Cell>
			{/each}
		</LayoutGrid>
	</main>
{/if}

<style>
	main {
		height: 100%;
		background-color: transparent;
	}
	img {
		height: 50px;
		width: 50px;
		border-radius: 99px;
	}
	hr {
		color: #000;
		background-color: #000;
		border: none;
		height: 1px;
		display: block;
		unicode-bidi: isolate;
		margin-block-start: 0px;
		margin-block-end: 0px;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		overflow: hidden;
	}
</style>
