# 🚴‍♂️ Bike Servicing API with PostgreSQL and Prisma

![Node.js](https://img.shields.io/badge/Node.js-008000?style=for-the-badge&logo=node.js&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)

Welcome to the **Bike Servicing API** repository! This project aims to simplify the management of customers, bikes, and service records for bike servicing centers. Built using modern technologies like Node.js, Express.js, TypeScript, Prisma ORM, and PostgreSQL, this API offers a robust solution for handling CRUD operations with efficient error management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Releases](#releases)

## Features

- **CRUD Operations**: Create, Read, Update, and Delete operations for customers, bikes, and service records.
- **Robust Error Handling**: Comprehensive error management to ensure smooth API operations.
- **RESTful API Design**: Follows REST principles for easy integration and use.
- **Type Safety**: Leverages TypeScript for type safety, enhancing code quality and maintainability.
- **Modular Architecture**: Organized code structure for easy navigation and scalability.
- **Database Management**: Utilizes PostgreSQL for reliable data storage and retrieval.
- **Prisma ORM**: Simplifies database interactions and improves developer productivity.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
- **Express.js**: A web application framework for Node.js, designed for building APIs.
- **TypeScript**: A superset of JavaScript that compiles to plain JavaScript, offering static typing.
- **Prisma ORM**: An open-source database toolkit that simplifies database workflows.
- **PostgreSQL**: An advanced, open-source relational database system.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/spolik123-cel/Bike-Servicing-Api-with-postgresql-prismar.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Bike-Servicing-Api-with-postgresql-prismar
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up your PostgreSQL database**:
   - Create a new database in PostgreSQL.
   - Update the `.env` file with your database connection details.

5. **Run migrations**:

   ```bash
   npx prisma migrate dev --name init
   ```

6. **Start the server**:

   ```bash
   npm run start
   ```

Your API should now be running on `http://localhost:3000`.

## Usage

Once the server is running, you can interact with the API using tools like Postman or cURL. Below are some examples of how to use the API.

### Example Request

To create a new bike service record:

```http
POST /api/services
Content-Type: application/json

{
  "customerId": 1,
  "bikeId": 2,
  "serviceDate": "2023-10-01",
  "details": "Full service including brake check."
}
```

### Example Response

```json
{
  "id": 1,
  "customerId": 1,
  "bikeId": 2,
  "serviceDate": "2023-10-01",
  "details": "Full service including brake check."
}
```

## API Endpoints

| Method | Endpoint                | Description                           |
|--------|-------------------------|---------------------------------------|
| GET    | /api/customers          | Get all customers                     |
| POST   | /api/customers          | Create a new customer                 |
| GET    | /api/bikes              | Get all bikes                         |
| POST   | /api/bikes              | Create a new bike                     |
| GET    | /api/services           | Get all service records               |
| POST   | /api/services           | Create a new service record           |

## Error Handling

The API includes robust error handling. If a request fails, the API will return a meaningful error message along with the appropriate HTTP status code. 

### Example Error Response

```json
{
  "error": {
    "message": "Customer not found",
    "status": 404
  }
}
```

## Contributing

We welcome contributions! If you would like to help improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, feel free to reach out:

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [Your GitHub Profile](https://github.com/yourprofile)

## Releases

To download the latest version of the API, visit the [Releases section](https://github.com/spolik123-cel/Bike-Servicing-Api-with-postgresql-prismar/releases). You can find the latest updates and download the necessary files for execution.

Feel free to check the **Releases** section for more details about each version and updates.

---

Thank you for checking out the **Bike Servicing API**! We hope it serves you well in managing your bike servicing operations efficiently.