import { bitbucket } from "./client.js"

const user = await bitbucket.users.getAuthedUser({})
console.log("Got the authenticated user", user)
