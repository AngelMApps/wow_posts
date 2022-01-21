<script>
	import Logo from './Logo.svelte';

	// your script goes here
	let email = '';
	let password = '';
</script>

<!-- markup (zero or more items) goes here -->
<main>
	<div class="div-form">
		<h1>WPosts</h1>
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
			Don't have an account? <a href="/register">register</a>
		</span>
	</div>
</main>

<style lang="scss">
	/* your styles go here */
	main {
		/*background-image: url('images/fondo.jpg');*/
		height: 100vh;
		background: rgb(0, 107, 61);
		background: linear-gradient(
			90deg,
			rgba(0, 107, 61, 1) 0%,
			rgba(53, 182, 165, 1) 48%,
			rgba(0, 92, 105, 1) 100%
		);
	}
	.div-form {
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
	.div-form .avatar {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		box-shadow: 1px 1px 20px 3px #000;
		position: absolute;
		top: -30px;
		left: calc(57% - 50px);
	}
	h1 {
		color: #fff;
		font-size: 30pt;
		margin: 0px 0px 25px 0px;
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
