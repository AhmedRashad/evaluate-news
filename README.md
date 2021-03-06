# Evaluate a News Article with Natural Language Processing

3th project at Udacity Advanced Front-End Web Development

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page  dispalys sentiment analysis returned from meaningcloud API
## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## Installation
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```
node version 14 needed 

1. Move to the project folder
```
cd <project directory>
```
2. Clone the repo
```
git clone <repo>
```
3. Install npm
```
npm install
```

4. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

	```
	1. Create a new `.env` file in the root of your project
	2. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
5. Start the project

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project

6. Open browser at http://localhost:8081/
