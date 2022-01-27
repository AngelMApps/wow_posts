<script>
	import { goto } from '$app/navigation';
	import { user } from '../../store/User';
	import { auth, db } from '../../firebase';
	import { onMount } from 'svelte';
	import Navbar from '../../components/Navbar.svelte';
	import CardUser from '../../components/cardUser.svelte';
	import Textfield from '@smui/textfield';
	import Card, { Content, Actions } from '@smui/card';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';
	import CharacterCounter from '@smui/textfield/character-counter';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	let post = '';
	let islike = true;
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
					posts = docs.filter((e) => e.uid == $user.uid);
				});
		} catch (error) {
			console.error(error);
		}
		if ($user == null) {
			goto('/login', { replaceState: true });
		}
	});
	const CerrarSesion = () => {
		auth.signOut().then(() => {
			goto('/login', { replaceState: true });
		});
	};
	const addPost = async () => {
		if (post != '' && $user.displayName != null && $user.photoURL != null) {
			try {
				await db.collection('posts').doc().set({
					uid: $user.uid,
					text: post,
					likes: 0,
					avatar: $user.photoURL,
					name: $user.displayName,
					created: Date.now()
				});
			} catch (error) {
				console.error(error);
			}
		}
	};
	const deletePost = async (id) => {
		try {
			await db.collection('posts').doc(id).delete();
		} catch (error) {
			console.error(error);
		}
	};
</script>

<!-- markup (zero or more items) goes here -->
{#if $user}
	<Navbar showIconProfile={false} />
	<main>
		<div class="first-part__profile">
			<CardUser user={$user} signOut={CerrarSesion} />
			<div class="margins">
				<div class="card-container">
					<Card>
						<Content>
							<Textfield
								style="width: 100%;"
								helperLine$style="width: 100%;"
								textarea
								bind:value={post}
								label="new post"
								input$maxlength={100}
								required
							>
								<CharacterCounter slot="helper">0 / 100</CharacterCounter>
							</Textfield>
						</Content>
						<Actions>
							<Button on:click={() => addPost()}>
								<Label>Add</Label>
							</Button>
							<Button on:click={() => (post = '')}>
								<Label>Clear</Label>
							</Button>
						</Actions>
					</Card>
				</div>
			</div>
		</div>
		<hr />
		<div class="div-posts">
			<div>
				{#if posts}
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
											<span>{new Date(p.created).toLocaleDateString()}</span>
										</Content>
										<Actions
											style="background-color: rgb(172, 172, 172);border-radius:0px 0px 4px 4px;display: flex;flex-direction:row;justify-content: center;"
										>
											<IconButton
												style="color: #000;"
												class="material-icons"
												on:click={() => {
													deletePost(p.id);
												}}
												title="More options">delete</IconButton
											>
										</Actions>
									</Card>
								</div>
							</Cell>
						{/each}
					</LayoutGrid>
				{:else}
					<!-- else content here -->
					<div />
				{/if}
			</div>
		</div>
	</main>
{/if}

<style>
	/* your styles go here */
	main {
		padding: 10px 10px 0px 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	hr {
		width: 100%;
		height: 1px;
		background-color: rgb(197, 197, 197);
		border: none;
	}
	.div-posts {
		background-color: transparent;
		width: 100%;
	}
	span {
		color: rgb(128, 128, 128);
	}
	.first-part__profile {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.margins {
		background-color: transparent;
		width: 70%;
	}
	@media only screen and (max-width: 459px) {
		.first-part__profile {
			flex-direction: column;
			align-self: center;
		}
		.margins {
			background-color: transparent;
			width: 100%;
		}
	}
</style>
