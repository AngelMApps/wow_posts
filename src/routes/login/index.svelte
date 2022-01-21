<script>
	import { auth } from '../../firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import Notificacion from '../../components/Notifications.svelte';
	let credentials = {
		email: '',
		password: ''
	};
	const changeUser = (e) => {
		credentials = {
			...credentials,
			[e.target.name]: e.target.value
		};
		console.log(credentials);
	};
	let messageNotification = '';
	let showNotification = false;
	const showMessage = (message) => {
		messageNotification = message;
		showNotification = true;
		setTimeout(() => {
			showNotification = false;
		}, 2800);
	};
	const loginUser = async () => {
		try {
			await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
			console.log('usuario creado');
			goto('/profile', { replaceState: true });
		} catch (error) {
			if (error.message == 'FirebaseError: Firebase: Error (auth/wrong-password).') {
				showMessage('contraseña incorrecta');
			}
			if (error.message == 'Firebase: Error (auth/user-not-found).') {
				showMessage('usuario no encontrado');
			}
			if (error.message == 'Firebase: Error (auth/invalid-email).') {
				showMessage('correo electrónico invalido');
			}
		}
	};
</script>

<div class="container">
	<Notificacion message={messageNotification} show={showNotification} />
	<div class="form-div">
		<h1>WPosts</h1>
		<input
			class="inputs"
			on:input={(e) => changeUser(e)}
			type="email"
			id="email"
			name="email"
			size="30"
			placeholder="Email"
			required
		/>
		<input
			class="inputs"
			on:input={(e) => changeUser(e)}
			type="password"
			id="password"
			name="password"
			size="30"
			required
			placeholder="Password"
		/>
		<button class="button-submit" on:click={loginUser}>Login</button>
		<span>
			Eres nuevo? <a href="/register">registrate</a>
		</span>
	</div>
</div>

<style lang="scss">
	/* your styles go here */
	.container {
		height: 100vh;
		background-color: #000;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	h1 {
		text-align: center;
		color: #fff;
		font-size: 90pt;
		margin: 10px 0px;
	}
	.form-div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgba(58, 114, 91, 0.959);
		box-shadow: 0px 0px 16px 20px rgba(0, 0, 0, 0.2);
		width: 50%;
		border-radius: 5px;
		padding: 20px;
	}
	.inputs {
		border: 1px solid #fff;
		background-color: transparent;
		color: #fff;
		border-radius: 2px;
		height: 2.5rem;
		padding: 0px 10px;
		margin: 5px 0px;
	}
	.inputs::-webkit-input-placeholder {
		color: #fff;
	} /* WebKit */
	.inputs::-moz-placeholder {
		color: #fff;
	}
	.button-submit {
		width: 17.4rem;
		border: 1px solid transparent;
		background-color: rgba(107, 168, 115, 0.959);
		border-radius: 2px;
		height: 2.5rem;
		margin: 5px 0px;
		cursor: pointer;
		font-size: 20px;
		transition: border 1s, background-color 1s, color 1s;
		color: #000;
	}
	span {
		margin: 10px 0px;
	}
	.button-submit:hover {
		border: 1px solid #fff;
		background-color: transparent;
		color: #fff;
		transition: border 1s, background-color 1s, color 1s;
	}
</style>
