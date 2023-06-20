# Mode - Ecommerce Site
![Mode](frontend/public/mode.gif)

Mode is a web application that allows users to explore and purchase various products online. Visit the live site [here](https://mode-ecommerce.onrender.com/).

## Description

Mode is a platform for online shopping enthusiasts. Users can browse through a range of products and make purchases. Users can also manage their shopping carts and process payments securely. The application is deployed using [Render](https://render.com/), and the database is hosted on [ElephantSQL](https://www.elephantsql.com/).

## Features

- **Browse Products**: Users can explore a collection of products.
- **Shopping Cart Functionality**: Users can add products to their shopping cart and view the details of their cart before checking out.
- **User Authentication**: Users can register and log in to view their order history.
- **Secure Online Payment**: Users can process their payments securely with Stripe integration.
  
These features were implemented to create an engaging and personalized experience for users, allowing them to have a seamless online shopping experience.

## User Flow

- Users can view featured products listed on the homepage.
- Users can add specific products to their shopping cart.
- Guests as well as authenticated users can make purchases.
- Users can proceed to checkout, process their payments, and view their order history.
- Users can manage their profile and view past transactions.

## API

Mode utilizes the Stripe API for payment processing. The API provides a secure method for processing online payments.

## Technology Stack

- Front-end: React.js, Tailwind CSS
- Back-end: Node.js
- Payment Processing: Stripe API
- Database: PostgreSQL

## Deployment

The application is deployed using [Render](https://render.com/), and the PostgreSQL database is hosted on [ElephantSQL](https://www.elephantsql.com/).

## Additional Notes

Mode is designed to provide a seamless and secure online shopping experience. If you have any suggestions or feedback, please feel free to contribute to the project.

## How to Run

```bash
# Clone Repository
$ git clone https://github.com/hollyabrams/capstone-project-2.git

# Navigate to the frontend directory and install dependencies
$ cd frontend
$ npm install

# Start the frontend server
$ npm start

# In a new terminal window, navigate to the backend directory and install dependencies
$ cd backend
$ npm install

# Start the backend server
$ npm start
