import { Hono } from "hono";

// create a hono app
const app = new Hono();

app.get("/health", (c) => {
	return c.json({ status: "ok" });
});

// serve the app on port
app
	.fire({ port: 4000 })
	.then(() => {
		console.log("app fired on port 4000");
	})
	.catch(() => {
		console.log("err in firing the app");
	});
