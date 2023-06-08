import { build } from "https://deno.land/x/esbuild@v0.17.18/wasm.js"
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.7.0/mod.ts"

const result = await build({
	plugins: denoPlugins(),
	entryPoints: [Deno.cwd() + "/src/frontend.ts"],
	bundle: true,
})

if (result.outputFiles?.length == 1) {
	//await Deno.writeTextFile("./static/script.js", "// deno-lint-ignore-file\n")
	await Deno.writeTextFile("./static/script.js", result.outputFiles[0].text, { append: false })
	console.log("New /static/script.js written.")
} else {
	console.log("Failed to compile /static/script.js.")
}
