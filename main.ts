import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { serveFile } from "https://deno.land/std@0.190.0/http/file_server.ts"

const handler = async (request: Request): Promise<Response> => {
	const url: URL = new URL(request.url)

	switch (url.pathname) {
		case "/":
			return await serveFile(request, "./static/index.html")
		case "/script.js":
			return await serveFile(request, "./static/script.js")
		default:
			return Response.redirect(`${url.protocol}//${url.host}`)
	}
}

serve(handler)
