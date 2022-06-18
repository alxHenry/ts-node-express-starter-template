# ts-node-starter

Starter template for ts-node projects.

I use [CapRover](https://caprover.com/) to deploy my projects to a VPS provider. I don't like to do the typescript build on my VPS servers as they typically have small amounts of memory, so I will check in my dist folder and let CapRover run that on the VPS. That means that when you `npm run deploy`, it will run your typescript build, GIT COMMIT the dist folder, and then deploy your built code. That means you SHOULD NOT run the deploy command if you have code you don't want shipped!
