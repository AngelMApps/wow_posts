<script>
	export let signOut;
	let showEdit = false;
	import { onMount } from 'svelte';
	import { user } from '../store/User';
	let userProperties = {
		uName: '',
		uPhoto: ''
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
			console.error(error);
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
			userProperties.uPhoto = '';
			userProperties.uName = '';
			showEdit = !showEdit;
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="div-info__profile">
	<img
		src={$user.photoURL == null
			? 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
			: $user.photoURL}
		alt="user"
	/>
	<strong>{$user.displayName == null ? 'userName' : $user.displayName}</strong>
	<strong>{$user.email}</strong>

	<div class="buttons-div">
		<button
			on:click={() => {
				showEdit = true;
			}}
		>
			<i class="fas fa-user-edit" /> edit</button
		>
		<button on:click={signOut}>
			<i class="fas fa-sign-out-alt" /> logout
		</button>
	</div>

	<div class={showEdit ? 'div-form' : 'hide-form'}>
		<div class="container-close"><i on:click={() => (showEdit = !showEdit)} class="fas fa-times" /></div>
		<label for="uName">UserName: {$user.displayName}</label>
		<input
			id="uName"
			name="uName"
			type="text"
			placeholder="enter your name"
			on:input={(e) => changeUserProperties(e)}
		/>

		{#if userProperties.uPhoto != ''}
			<img class="avatar" src={userProperties.uPhoto} alt="avatar" />
		{:else}
			<img
				class="avatar"
				src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
				alt=""
			/>
		{/if}

		<input type="file" accept=".jpg, .jpeg, .png" on:change={(e) => onFileSelected(e)} />
		<button class="save-edit__button" on:click={saveChanged}>Save</button>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
	.div-info__profile {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		padding: 10px;
		height: 20rem;
		width: 24rem;
	}
	img {
		height: 10rem;
		width: 10rem;
		border-radius: 100px;
		margin: 20px 0px;
	}
	i {
		font-size: 19pt;
		text-align: center;
	}
	strong {
		margin: 10px 0px;
		color: #fff;
	}
	.container-close{
		width: 98%;
		display: flex;
		flex-direction: row;
		justify-content: right;
	}
	.fa-times {
		text-align: right;
		font-size: 25pt;
		margin-right: 10px;
		color: #fff; 
		cursor: default;
		transition: color .3s ease-in-out;
	}
	.fa-times:hover{
		color: rgb(133, 133, 133);
		cursor: pointer;
		transition: color .3s ease-in-out;
	}
	button {
		width: 40%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		border: 1px solid transparent;
		background-color: rgb(0, 0, 0);
		border-radius: 2px;
		height: 2.5rem;
		margin: 5px 0px;
		cursor: pointer;
		font-size: 20px;
		transition: border 1s ease-in-out, background-color 1s ease-in-out, color 1s ease-in-out;
		color: #fff;
	}
	label {
		margin: 10px 0px;
	}
	button:hover {
		border: 1px solid #fff;
		background-color: transparent;
		color: #fff;
		transition: border 1s ease-in-out, background-color 1s ease-in-out, color 1s ease-in-out;
	}
	.buttons-div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		background-color: transparent;
	}
	.div-form {
		width: 420px;
		height: 520px;
		background: rgb(5, 8, 17);
		color: #fff;
		top: 300px;
		left: 50%;
		bottom: 0px;
		position: fixed;
		z-index: 3;
		border-radius: 5px;
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		box-shadow: 0px 4px 50px 10px #000;
		padding: 10px 0px 40px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		transition: top 1s ease-in-out;
	}
	.hide-form {
		width: 420px;
		height: 520px;
		background: rgb(5, 8, 17);
		color: #fff;
		top: -300px;
		left: 50%;
		position: fixed;
		z-index: 3;
		border-radius: 5px;
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		box-shadow: 0px 4px 50px 10px #000;
		padding: 10px 0px 40px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: top 1s ease-in-out;
	}
	#uName {
		border: 2px solid #fff;
		height: 2.5rem;
		padding: 0px 5px;
		background-color: transparent;
		color: #fff;
	}
	#uName:focus {
		border: 2px solid rgb(203, 214, 252);
		outline: none;
	}
	input[type='file'] {
		width: 180px;
		margin: 2px 0px;
	}
	.save-edit__button {
		width: 40%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		border: 1px solid rgb(194, 194, 194);
		background-color: rgb(255, 255, 255);
		border-radius: 2px;
		height: 2.5rem;
		margin: 10px 0px;
		cursor: pointer;
		font-size: 20px;
		transition: border 1s ease-in-out, background-color 1s ease-in-out, color 1s ease-in-out;
		color: rgb(0, 0, 0);
	}
	@media only screen and (max-width: 546px){
		button, button i{
			font-size: 17px;
		}
	}
	@media only screen and (max-width: 477px){
		.div-form,.hide-form{
			width: 100%;
		}
	}
	@media only screen and (max-width: 424px){
		.div-info__profile{
			width: 90%;
		}
	}
	@media only screen and (max-width: 408px){
		button i{
			display: none;
		}
	}
	
</style>
