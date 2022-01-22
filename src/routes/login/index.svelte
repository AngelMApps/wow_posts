<script>
	import { auth } from '../../firebase';
	import { goto } from '$app/navigation';
	import Notificacion from '../../components/Notifications.svelte';
	import Logo from '../../components/Logo.svelte';
	import { user } from '../../store/User';
	let credentials = {
		email: '',
		password: ''
	};
	const changeUser = (e) => {
		credentials = {
			...credentials,
			[e.target.name]: e.target.value
		};
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
		let email = credentials.email;
		let password = credentials.password;
		try {
			await auth.signInWithEmailAndPassword(credentials.email, credentials.password);
			user.setUser({ email, password });
			goto('/', { replaceState: true });
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
		<div class="avatar"><Logo /></div>
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
		background: rgb(0, 107, 61);
		background: linear-gradient(
			90deg,
			rgba(0, 107, 61, 1) 0%,
			rgba(53, 182, 165, 1) 48%,
			rgba(0, 92, 105, 1) 100%
		);
	}
	h1 {
		color: #fff;
		font-size: 30pt;
		margin: 0px 0px 25px 0px;
		text-align: center;
	}
	.form-div {
		width: 320px;
		height: 420px;
		background: rgb(28, 82, 50);
		color: #fff;
		top: 50%;
		left: 50%;
		position: absolute;
		border-radius: 5px;
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		box-shadow: 0px 4px 50px 10px #000;
		padding: 70px 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.form-div .avatar {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		box-shadow: 1px 1px 20px 3px #000;
		position: absolute;
		top: -30px;
		left: calc(57% - 50px);
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
		width: 100%;
		border: 1px solid transparent;
		background-color: rgba(25, 185, 76, 0.959);
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
	a {
		text-decoration: none;
		font-style: oblique;
		color: rgb(144, 255, 134);
	}
</style>
