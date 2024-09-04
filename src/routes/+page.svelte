<script lang="ts">
	import '../lib/ui/app.less'
	import { invoke } from '@tauri-apps/api/core';

	let name = '';
	let greetMsg = '';

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		greetMsg = await invoke('greet', { name })
	}
</script>

<div>
	<div class="container">
		<h1>Welcome to Tauri!</h1>

		<div class="row">
			<a href="https://vitejs.dev" target="_blank">
				<img src="/vite.svg" class="logo vite" alt="Vite Logo" />
			</a>
			<a href="https://tauri.app" target="_blank">
				<img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
			</a>
			<a href="https://kit.svelte.dev" target="_blank">
				<img
					src="/svelte.svg"
					class="logo svelte-kit"
					alt="SvelteKit Logo"
				/>
			</a>
		</div>

		<form class="row" on:submit|preventDefault={greet}>
			<input
				id="greet-input"
				placeholder="Enter a name..."
				bind:value={name}
			/>
			<button type="submit">Greet</button>
		</form>

		<p>{greetMsg}</p>
	</div>
</div>
