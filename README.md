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
1. Create a [.env](http://_vscodecontentref_/2) file in the root directory of the project.
2. Copy the contents of [.env.sample](http://_vscodecontentref_/3) to [.env](http://_vscodecontentref_/4):
    ```sh
    cp .env.sample .env
    ```

3. Fill in the required environment variables in the [.env](http://_vscodecontentref_/5) file:
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
