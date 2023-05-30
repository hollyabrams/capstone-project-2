# Final Capstone Project Proposal: E-commerce Site
## Tech Stack
I will primarily use the React framework for the front-end development of my project, along with Tailwind CSS for styling. For the back-end, I will use Node.js. To handle payment processing, I will integrate the Stripe API.

### Project Focus
I aim to create a balanced full-stack application where both front-end UI and back-end services will be the focus. A user-friendly and aesthetically pleasing UI will be developed with React and Tailwind CSS, while robust server-side operations will be ensured using Node.js.

### Project Type
This project will be a web-based application specifically designed for desktop and mobile browsers.

### Project Goal
The primary goal of this e-commerce site is to provide a seamless and intuitive online shopping experience for users, complete with product listings, shopping cart functionality, user authentication, and secure online payment processing.

### User Demographics
The target demographic for my app will be internet users who prefer online shopping. This includes a wide range of users, from tech-savvy millennials to busy professionals looking for a convenient shopping experience.

### Data Usage
I plan to use product data, user data, and transaction data. The product data will be manually entered into the system for this project's scope, whereas user data will be collected during user registration and login. Transaction data will be created when purchases are made, using information from both user and product data.

## Project Approach
### Database Schema
The database will have three primary tables: Users, Products, and Transactions. The Users table will include fields like user ID, name, email, password (hashed and salted for security), and address. The Products table will contain product ID, name, description, price, and inventory count. The Transactions table will link Users and Products, containing fields like transaction ID, user ID, product ID, quantity, and total price.

```
Users Table:
+---------+-------+-------+----------+---------+
| userID  | name  | email | password | address |
+---------+-------+-------+----------+---------+

Products Table:
+-----------+------+-------------+-------+-----------------+
| productID | name | description | price | inventory_count |
+-----------+------+-------------+-------+-----------------+

Transactions Table:
+--------------+--------+-----------+----------+-------------+
| transactionID| userID | productID | quantity | total_price |
+--------------+--------+-----------+----------+-------------+
```

### Potential API Issues
As I'll be using the Stripe API for payment processing, potential issues could include handling failed transactions and managing secure data transfer. These will be mitigated by thorough testing and following best practices for using the Stripe API.

### Security of Sensitive Information
Sensitive user information like email addresses and passwords will be stored. Passwords will be stored in hashed and salted format, and all data transfers will be secured using HTTPS. Stripe will handle payment data, which provides an additional layer of security.

### App Functionality
The app will include user registration and login, product listing and details view, adding products to a cart, checking out and making secure online payments.

### User Flow
Users will start by registering or logging into their account. They can then browse products, add them to their cart, view their cart details, and proceed to checkout when ready. At checkout, users can review their order and make a payment to complete the transaction.
```
Start
  -->[ User visits site ]
  -->[ User logs in or registers ]
  -->[ User browses products ]
  -->[ User adds product(s) to cart ]
  -->[ User views cart details ]
  -->[ User proceeds to checkout ]
  -->[ User reviews order and makes payment ]
  -->[ Order is completed ]
End
```

### Special Features and Stretch Goals
Beyond typical CRUD operations, I plan to integrate a recommendation system that suggests products based on user behavior and purchase history. A stretch goal would be to incorporate user reviews and ratings for products.

I understand that these plans may evolve as I delve deeper into the project, but this provides a starting point for my capstone project.