<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend - The Book Cove</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            color: #34495e;
        }
        h1, h2 {
            color: #2ecc71;
        }
        h2 {
            border-bottom: 2px solid #2ecc71;
            padding-bottom: 5px;
        }
        ul, ol {
            margin: 10px 0;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        footer {
            text-align: center;
            padding: 20px;
            background: #ecf0f1;
        }
        a {
            color: #2ecc71;
            text-decoration: none;
        }
        .image-container {
            text-align: center;
            margin: 20px 0;
        }
        .image-container img {
            max-width: 100%;
            height: auto;
            border: 2px solid #2ecc71;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center;">The Book Cove - Backend</h1>
    <p align="center">
        <img src="https://img.shields.io/badge/Node.js-18.x-brightgreen?style=flat-square" alt="Node.js">
        <img src="https://img.shields.io/badge/Express-4.x-blue?style=flat-square" alt="Express">
        <img src="https://img.shields.io/badge/Database-MongoDB-green?style=flat-square" alt="MongoDB">
    </p>

    <div class="image-container">
        <img src="book_cove.png" alt="Backend Diagram">
    </div>

    <h2>📄 Project Description</h2>
    <p>This backend provides RESTful API endpoints for managing books and authors for the "The Book Cove" application. It supports CRUD operations, search, and filtering.</p>

    <h2>✨ Features</h2>
    <ul>
        <li>CRUD operations for books and authors.</li>
        <li>Search books by title.</li>
        <li>Filter books by author.</li>
    </ul>

    <h2>⚙️ Installation Instructions</h2>
    <ol>
        <li><strong>Clone the Repository:</strong>
            <pre>git clone <a href="https://github.com/your-repo/backend.git">https://github.com/your-repo/backend.git</a></pre>
        </li>
        <li><strong>Navigate to the Backend Directory:</strong>
            <pre>cd backend</pre>
        </li>
        <li><strong>Install Dependencies:</strong>
            <pre>npm install</pre>
        </li>
        <li><strong>Create Environment Variables:</strong>
            <p>Create a <code>.env</code> file and add necessary environment variables.</p>
        </li>
        <li><strong>Start the Server:</strong>
            <pre>nodemon index.js</pre>
        </li>
    </ol>

   <h2>📄 Data File To Be Tested</h2>
    <p>Access the Postman documentation <a href="LINK_TO_POSTMAN_DOC" target="_blank">here</a>.</p>
    
    <h2>📚 Postman Documentation</h2>
    <p>Access the Postman documentation <a href="LINK_TO_POSTMAN_DOC" target="_blank">here</a>.</p>

    <footer>
        <p>Made with ❤️ by <a href="https://github.com/NooranTarek">Nooran Tarek</a></p>
    </footer>
</body>
</html>
