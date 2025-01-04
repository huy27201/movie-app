# XEM PHIM CLUB

[Click here to see the demo](https://huy27201-movie-app.netlify.app/).

## Description
This is a movie app where you can register and login by email or Google, and add your favorite films to your collection.

## Techstacks
* React.js
* SCSS
* Firebase Authentication and Firestore

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/movie-app.git
    cd movie-app
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Environment Variables
1. Create a `.env` file in the root directory of the project.
2. Copy the contents of `.env.sample` to `.env`:
    ```sh
    cp .env.sample .env
    ```

3. Fill in the required environment variables in the `.env` file:
    ```env
    REACT_APP_API_KEY=your_api_key
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_URL=https://api.themoviedb.org/3
    ```

### Obtaining Environment Variable Values

#### Firebase Configuration
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing project.
3. Navigate to Project Settings by clicking the gear icon next to "Project Overview".
4. In the "General" tab, you will find your Firebase configuration under "Your apps". Click on the web app you have registered.
5. Copy the following values from the Firebase configuration:
    - `REACT_APP_FIREBASE_API_KEY`
    - `REACT_APP_FIREBASE_APP_ID`
    - `REACT_APP_FIREBASE_AUTH_DOMAIN`
    - `REACT_APP_FIREBASE_MEASUREMENT_ID`
    - `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
    - `REACT_APP_FIREBASE_PROJECT_ID`
    - `REACT_APP_FIREBASE_STORAGE_BUCKET`

#### The Movie Database (TMDb) API Key
1. Go to the [TMDb website](https://www.themoviedb.org/).
2. Create an account or log in if you already have one.
3. Navigate to your account settings and find the "API" section.
4. Apply for an API key and follow the instructions provided by TMDb.
5. Copy the API key and set it as the value for `REACT_APP_API_KEY`.

### Running the App Locally
1. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Available Scripts
In the project directory, you can run:

### `npm start` or `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
