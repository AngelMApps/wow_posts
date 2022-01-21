<script>
	import Logo from './Logo.svelte';

	// your script goes here
	let email = '';
	let password = '';
</script>

<!-- markup (zero or more items) goes here -->
<main>
	<div class="div-form">
		<div class="avatar"><Logo /></div>
		<input
			class="inputs"
			bind:value={email}
			type="email"
			id="email"
			size="30"
			placeholder="Email"
			required
		/>
		<input
			class="inputs"
			bind:value={password}
			type="password"
			id="password"
			size="30"
			required
			placeholder="Password"
		/>
		<button class="button-submit">Login</button>
		<span>
			Eres nuevo? <a href="/register">registrate</a>
		</span>
	</div>
</main>

<style lang="scss">
	/* your styles go here */
	main {
		background-image: url('images/fondo.jpg');
	}
	.div-form {
		width: 320px;
		height: 420px;
		background: #000;
		color: #fff;
		top: 50%;
		left: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		padding: 70px 30px;
	}
	.div-form .avatar {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		position: absolute;
		top: -40px;
		left: calc(55% - 50px);
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
