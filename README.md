# Capstone API Project

This project is a web application that displays a list of anime fetched from the Jikan API. The application is built using Node.js, Express, and EJS for server-side rendering. Below is a brief overview of the key files and their roles in the project.

## File Overview

### `index.ejs`
This file is the main template for rendering the anime list on the client side. It uses EJS syntax to dynamically generate HTML content based on the data fetched from the API.

Key Features:
- Displays a list of anime cards with details such as title, image, rating, status, season, year, episodes, score, rank, and genres.
- Uses conditional rendering to handle cases where the anime list is empty.
- Includes styles and classes for a responsive and visually appealing layout.

### `main.css`
This file contains the CSS styles for the web application. It defines the overall look and feel of the application, including layout, colors, typography, and component-specific styles.

Key Features:
- Global styles for elements like `*`, `img`, `button`, and more.
- CSS variables for consistent theming and easy customization.
- Specific styles for the anime cards, including hover effects, rating overlays, and genre chips.

### `index.js`
This file is the main server-side script for the application. It sets up an Express server, configures routes, and handles API requests to fetch anime data.

Key Features:
- Uses Express to serve static files and handle routing.
- Fetches anime data from the Jikan API using Axios.
- Implements pagination with "Next" and "Previous" buttons to navigate through pages of anime data.
- Renders the `index.ejs` template with the fetched anime data.

## How to Run the Project

1. **Install Dependencies**: Run `npm install` to install the required dependencies.
2. **Start the Server**: Run `node index.js` to start the Express server.
3. **Access the Application**: Open your browser and navigate to `http://localhost:3000` to view the anime list.

## API Reference

- **Jikan API**: The project uses the Jikan API to fetch anime data. More information about the API can be found [here](https://jikan.moe/).

## Future Improvements

- Add search functionality to filter anime by title or genre.
- Implement user authentication for personalized features.
- Enhance the UI with more interactive elements and animations.

Feel free to explore the code and customize it to suit your needs. Happy coding!
