# Lesson 5: Implementing Authentication and Access Control

## SWBAT:
- Understand the concepts of Authentication and Authorization in web applications.
- Implement user authentication using hashed passwords and Session Cookies.
- Implement user authorization to control access to certain routes in the application using Express.js and middleware.
- Use Postman to test API endpoints that require credentials.

## Agenda:
1. Introduction to Authentication and Authorization
    - Explanation of Authentication
    - Explanation of Authorization
2. Testing Authentication and Authorization with Postman
    - Setting up Postman
    - Testing protected routes
    - Understanding Postman responses and error messages
3. Setting up User Authentication
    - Hashing Passwords with bcryptjs
    - Storing hashed passwords in the database
    - Logging in a User and creating a Session Cookie
4. User Authorization and Middleware
    - Protecting routes with middleware
    - Checking for session cookie and granting access

# Introduction to Authentication and Authorization

- [Explanation of Authentication](#explanation-of-authentication)
    - [Understanding the need for secure user identification](#understanding-the-need-for-secure-user-identification)
    - [Explanation of username/password based authentication](#explanation-of-usernamepassword-based-authentication)
    - [Difference between authentication and authorization](#difference-between-authentication-and-authorization)
- [Explanation of Authorization](#explanation-of-authorization)
    - [Understanding the role-based access](#understanding-the-role-based-access)
    - [Checking for permissions before granting access](#checking-for-permissions-before-granting-access)
    - [Why authorization is essential in web applications](#why-authorization-is-essential-in-web-applications)

## Explanation of Authentication

Authentication is the process of verifying the identity of a user, device, or system. It often involves validating credentials like username and password against a known set of correct values.

### Understanding the need for secure user identification

In our job application tracker, users will be creating and storing personal data related to their job search. This could include details of the jobs they've applied to, their notes, and contact information. It's crucial that this information is kept secure and that only the correct user can access their own data. Authentication is the first step to ensuring this security, by verifying that a user is who they claim to be.

### Explanation of username/password based authentication

The most common form of authentication is via a username and password. The user enters these details, and the system checks them against stored values. If the values match, the user is granted access. In the context of our job application tracker, when a user creates an account, they'll choose a username and password which will be stored securely in our database. Then, whenever the user wants to access their data, they'll need to supply these same details.

### Difference between authentication and authorization

While they are related security measures, authentication and authorization are distinct processes:

- **Authentication** verifies who a user is. It's the process of validating user credentials to grant them access to the system.
- **Authorization**, on the other hand, determines what an authenticated user is allowed to do. It's the process of giving authenticated users permission to access specific resources or make certain requests.

In our job application tracker, authentication verifies a user's identity when they log in, while authorization checks whether they're allowed to view, create, or modify a particular job application.

## Explanation of Authorization

Authorization is the process that comes after successful authentication. Once the system knows who the user is, it must then determine what that user is allowed to do. This can range from viewing or editing certain data, to having admin privileges to change the system settings.

### Understanding the role-based access

Role-based access control is a method of restricting access to authorized users. This is typically achieved by assigning roles to users, and then setting permissions that determine what each role is allowed to do. In our job application tracker, we might have a simple role system where all users are equal, or we might decide to have admin users who have more control.

### Checking for permissions before granting access

Before the system allows a user to carry out an action, it should check that the user has the necessary permissions. In our job application tracker, this could be as simple as checking that the user is trying to view or edit their own job applications, and not those belonging to another user.

### Why authorization is essential in web applications

Authorization is crucial for maintaining security in web applications. It ensures that users can only perform actions they're allowed to, and access data they're supposed to see. Without authorization, a user might be able to view sensitive data, or even perform harmful actions like deleting data. In our job application tracker, good authorization practices will ensure that users can only access their own job applications, preserving the privacy and integrity of the data.

I like to use the analogy of checking into a Hotel to explain Authentication and Authorization.

| Hotel Analogy | Web Authentication |
|---------------|--------------------|
| Creating a Reservation | Signing up for an account |
| Checking in to the Hotel | Logging in to your account |
| Hotel Guest ID and Credit Card | User Credentials (Username and Password) |
| Key Card | Cookie |
| Card Reader | Server's Session Method |
| Hotel System | Web Server |
| Room Access | Authorization |

And now, let's expand this into a story:

> Imagine you are a guest arriving at a hotel. To begin with, you approach the front desk with your ID and credit card - your credentials. The hotel staff verifies these credentials by checking their system to find your reservation. This is akin to **authentication** in web applications. The hotel staff is validating your identity, making sure you are the guest you claim to be.
>
> Once your identity is verified, the hotel staff gives you a key card. This key card is unique to you and your stay; it's the equivalent of a **cookie** in web authentication. It doesn't have your personal information but carries an identifier that the hotel system recognizes. Like a cookie, it is something you must present each time you wish to access certain hotel facilities.
>
> Now, you proceed to your room and slot your key card into the door's card reader. This card reader works like the server's **session method** in web authentication. It reads the information on the key card and checks it with the hotel's system. This system, like a **web server**, knows which rooms you should have access to based on the details tied to your key card.
>
> If the card reader confirms that your key card corresponds to the room you're trying to access, the door unlocks, and you're allowed in. This is the **authorization** step. It doesn't matter if you're the one holding the key card, what matters is whether the key card gives you access to that room. Similarly, in web applications, once your cookie is authenticated, the server checks what resources you are authorized to access.
>
> In the event you lose your key card or your stay has ended, the hotel will invalidate your card, similar to how a session cookie might expire. Also, should you try to access areas of the hotel you are not authorized to, like another guest's room or a restricted staff area, the system will deny you access.
>
> This hotel check-in process is a great analogy for understanding the principles of authentication and authorization in web applications.

# Preparing Postman for Testing Authentication and Authorization

This section aims to guide you on how to configure Postman to simulate API requests necessary for testing our authentication and authorization features. 

* [Organizing Postman for Authentication Testing](#organizing-postman-for-authentication-testing)
    * [Creating a New Folder for Authentication Related Requests](#creating-a-new-folder-for-authentication-related-requests)
    * [Adding the Necessary Requests to the Folder](#adding-the-necessary-requests-to-the-folder)
* [Understanding Protected Routes and Their Purpose](#understanding-protected-routes-and-their-purpose)
    * [Brief Overview of the /jobs Endpoints](#brief-overview-of-the-jobs-endpoints)
    * [Why Do We Need to Be Logged In?](#why-do-we-need-to-be-logged-in)
* [Interpreting Postman Responses and Error Messages](#interpreting-postman-responses-and-error-messages)
    * [Introduction to Response Codes Specific to Authentication and Authorization Errors](#introduction-to-response-codes-specific-to-authentication-and-authorization-errors)
    * [Troubleshooting Common Error Messages](#troubleshooting-common-error-messages)

## Organizing Postman for Authentication Testing

As our application grows and becomes more complex, it's essential to keep our testing environment organized. By grouping related requests into folders within a collection, we can ensure that our tests remain easy to find and run.

### Creating a New Folder for Authentication Related Requests

In Postman, folders serve as subcategories within collections where you can group related requests. To create a new folder:

1. Locate your Job Application Tracker collection in the sidebar.
2. Right-click on it and select "Add Folder".
3. Name the folder "Authentication".

### Adding the Necessary Requests to the Folder

With the new folder created, it's time to add the requests necessary for testing authentication. These are:

1. **Signup**: To register a new user
    - Method: `POST`
    - URL: `http://localhost:4000/signup`
    - Body (JSON):
    ```json
    {
        "name": "testuser1",
        "email": "user1@test.com",
        "password": "password"
    }
    ```
2. **Login**: To authenticate an existing user
    - Method: `POST`
    - URL: `http://localhost:4000/login`
    - Body (JSON):
    ```json
    {
        "email": "user1@test.com",
        "password": "password"
    }
    ```
3. **Logout**: To invalidate a user's session
    - Method: `DELETE`
    - URL: `http://localhost:4000/logout`

To add these requests:

1. Right-click on the Authentication folder and select "Add request".
2. Name the request and set the details according to the above.
3. Click 'Save to Authentication'.

## Understanding Protected Routes and Their Purpose

In our application, certain routes are protected - they require the user to be authenticated before they can access them. For instance, the `/jobs` endpoints are protected routes.

### Brief Overview of the /jobs Endpoints

The `/jobs` endpoints provide access to job application data. However, these endpoints should only be accessible to authenticated users - we wouldn't want just anyone to view or manipulate this data.

### Why Do We Need to Be Logged In?

Being 'logged in' means that the user has been authenticated and their session is active. In our hotel analogy, this would be equivalent to checking in at the front desk and receiving a key card. In the context of our application, the 'key card' takes the form of a session cookie, which is provided upon successful login. This session cookie must then be supplied with each request to a protected route to verify the user's identity and provide access.

In the next sections, we'll discuss how we can ensure that credentials (cookies) are included with requests sent from Postman to our API.

## Interpreting Postman Responses and Error Messages

As you test your routes, you'll receive various responses and, likely at times, encounter error messages. Understanding these can provide valuable insight into the behavior and potential issues of your application.

### Introduction to Response Codes Specific to Authentication and Authorization Errors

Certain HTTP response status codes are particularly relevant to authentication and authorization:

* `401 Unauthorized`: The request requires user authentication. If you see this, it could mean that no session cookie was provided, or the session cookie was invalid.
* `403 Forbidden`: The server understood the request, but it refuses to authorize it. This could mean the user is trying to access a resource they don't have permissions for.
* `404 Not Found`: This generally means the requested resource could not be found on the server.

### Troubleshooting Common Error Messages

Error messages are your friends - they provide crucial information about what went wrong. If you encounter an error:

1. Look at the HTTP status code and refer to the list above.
2. Read the error message. It often describes the problem quite accurately.
3. Check the details of your request in Postman. Is the URL correct? Did you provide all necessary headers and the body (if needed)?
4. If everything seems correct, check your server code. Is the route defined correctly? Is your authentication/authorization middleware functioning as expected?

Through the iterative process of making requests, observing the responses, and troubleshooting any errors, you'll gain a deep understanding of how authentication and authorization work in your application.

# Setting up User Authentication

In this section, we will learn how to set up user registration and login in our application using bcryptjs for password hashing and express-session for session management. 

- [Setting Up User Registration](#setting-up-user-registration)
    - [Installing bcryptjs and understanding its role](#installing-bcryptjs-and-understanding-its-role)
    - [Adding password field in the User model](#adding-password-field-in-the-user-model)
    - [How to hash a password before storing](#how-to-hash-a-password-before-storing)
    - [Ensuring hashed passwords are stored, not plain text passwords](#ensuring-hashed-passwords-are-stored-not-plain-text-passwords)
- [Logging in a User and Creating a Session Cookie](#logging-in-a-user-and-creating-a-session-cookie)
    - [Understanding the login flow](#understanding-the-login-flow)
    - [Verifying user credentials against the stored hashed password](#verifying-user-credentials-against-the-stored-hashed-password)
    - [Creating and sending a session cookie to the client](#creating-and-sending-a-session-cookie-to-the-client)

## Setting Up User Registration

### Installing bcryptjs and understanding its role

Bcryptjs is a library that helps us hash passwords. Hashing is the process of converting an input into a fixed-size string of bytes, which is typically a 'digest' that is unique to each unique input. It is used for securely storing passwords in databases. Let's install bcryptjs using the following command:

```bash
npm install bcryptjs
```

### Adding password field in the User model

We need to update our User model to include a password field. This field will store the hashed password of the user.

```javascript
password: {
  type: DataTypes.STRING,
  allowNull: false
}
```

### How to hash a password before storing

When a user registers, we'll hash the password provided in the request before storing it in the database. This can be done using the `bcrypt.hash()` method. 

```javascript
const bcrypt = require('bcryptjs');

const hashedPassword = await bcrypt.hash(req.body.password, 10);
```

### Ensuring hashed passwords are stored, not plain text passwords

Now, when creating a new user, instead of storing the password directly, we store the hashed password.

```javascript
const user = await User.create({
  name: req.body.name,
  email: req.body.email,
  password: hashedPassword
});
```

## Logging in a User and Creating a Session Cookie

### Understanding the login flow

When a user attempts to log in, we need to verify their credentials. This involves comparing the password they've submitted with the hashed password stored in our database.

### Verifying user credentials against the stored hashed password

Bcryptjs provides a method `bcrypt.compare()` which allows us to compare the entered password with the stored hashed password. 

```javascript
const isValid = await bcrypt.compare(req.body.password, user.password);

if (!isValid) {
  return res.status(401).json({ message: "Authentication failed" });
}
```

### Creating and sending a session cookie to the client

Once the user is authenticated, we create a session and send a cookie to the client. We'll use the express-session library for this. 

```javascript
req.session.userId = user.id;
res.status(200).json({ message: "Logged in successfully" });
```

The `req.session.userId` line is storing the user's id in the session. The session data is stored server-side. 

By setting a property on the `req.session` object, we're telling Express to save that value into the session store and also send a cookie to the client.

With this setup, you should now be able to test your signup and login routes using Postman. You can send POST requests to the `/signup` and `/login` routes with the appropriate payloads (name, email, and password) and see if you get the expected responses. For example, after a successful signup, the hashed password should be stored in the database, and after a successful login, you should receive a session cookie.

## User Authorization and Middleware
- Protecting routes with middleware
    - How middleware functions work in Express.js
    - Creating middleware to protect routes
- Checking for session cookie and granting access
    - How to check for session cookies in middleware
    - Granting or denying access based on session cookies



## Key Takeaways

| Concept | Description | Example |
|---------|-------------|---------|
| Authentication | A process by which the system validates a user's identity. | Login process using username and password. |
| Authorization | A security measure used to determine user/client privileges or access levels related to system resources, including computer programs, files, services, data and application features. | Middleware in Express.js to block or allow access to certain routes. |
| Middleware | Functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. | A function in Express.js to check for session cookie. |
| Session Cookie | A piece of data that servers store on a client's device. Servers use session cookies to know if the client is logged in or not. | When logging in, the server sends a session cookie to the client. |

## Resources
- [Express.js Middleware](https://expressjs.com/en/guide/writing-middleware.html)
- [bcryptjs documentation](https://www.npmjs.com/package/bcryptjs)
- [Cookies vs Tokens: The Definitive Guide](https://auth0.com/blog/cookies-vs-tokens-definitive-guide/)
- [Postman Learning Center](https://learning.postman.com/docs/getting-started/introduction/)