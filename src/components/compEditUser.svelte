<script>
	export let showForm = false;
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { user } from '../store/User';
	let userProperties = {
		uName: '',
		uPhone: ''
	};
	const changeUserProperties = (e) => {
		userProperties = {
			...userProperties,
			[e.target.name]: e.target.value
		};
	};
	onMount(async () => {
		try {
			await user.current();
			console.log($user);
		} catch (error) {
			goto('/login', { replaceState: true });
		}
	});

	const onFileSelected = async (e) => {
		let image = e.target.files[0];
		const formData = new FormData();
		formData.append('file', image);
		formData.append('upload_preset', 'users-avatar');
		const data = await fetch('https://api.cloudinary.com/v1_1/angelmora/image/upload', {
			method: 'POST',
			body: formData
		});
		const res = await data.json();
		console.log('res', res);
		console.log(res.secure_url);
		userProperties.uPhoto = res.secure_url;
	};

	const saveChanged = async () => {
		try {
			await $user.updateProfile({
				displayName: userProperties.uName,
				photoURL: userProperties.uPhoto
			});
			console.log($user.displayName);
			console.log($user.photoURL);
		
		} catch (error) {
			console.error(error);
		}
	};
</script>

<!-- markup (zero or more items) goes here -->
<div class={showForm ? 'div-form' : 'hide-form'}>
	<label for="uName">UserName: {$user.displayName}</label>
	<input
		id="uName"
		name="uName"
		type="text"
		placeholder="enter your name"
		on:input={(e) => changeUserProperties(e)}
	/>

	{#if $user.photoURL}
		<img class="avatar" src={$user.photoURL} alt="d" />
	{:else}
		<img
			class="avatar"
			src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
			alt=""
		/>
	{/if}

	<input type="file" accept=".jpg, .jpeg, .png" on:change={(e) => onFileSelected(e)} />
	<button on:click={saveChanged}>Save</button>
	<div on:click={()=>showForm=false}>cerrar</div>
</div>

<style lang="scss">
	.div-form {
		width: 420px;
		height: 520px;
		background: rgb(28, 82, 50);
		color: #fff;
		top: 300px;
		left: 50%;
		bottom: 0px;
		position: fixed;
		border-radius: 5px;
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		box-shadow: 0px 4px 50px 10px #000;
		padding: 70px 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: top 1s;
	}
	.hide-form {
		width: 320px;
		height: 420px;
		background: rgb(28, 82, 50);
		color: #fff;
		top: -300px;
		left: 50%;
		position: fixed;
		border-radius: 5px;
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		box-shadow: 0px 4px 50px 10px #000;
		padding: 70px 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: top 1s;
	}
	
	
	img {
		height: 15rem;
		width: 15rem;
		border-radius: 35px;
		margin: 1rem 0rem;
	}
</style>
