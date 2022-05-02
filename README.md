  # E-Commerce U-Commerce

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Description
  This app is very helpful when managing your workforce. It not only keeps track of every employee, but also keeps track of their salary, the role they provide to the company, and which department that they belong to.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  - First Step: Clone, fork, or download the repo found at: [Repo](https://github.com/cory-hall/e-commerce-u-commerce)<br>
  - Second Step: In the console, to make sure all node modules are installed, type 
  `npm init` followed by `npm i` to install all modules<br>
  - Third Step: create a `.env` file in the root of the directory, and add in    `DB_NAME='ecommerce_db'`, `DB_USER=(your mysql username) or 'root'`, `DB_PW=(your mysql password)`
  - Fourth Step: Type `mysql -u root -p` followed by your password. Once you're in MySQL, type `source db/schema.sql;` to create the database.

  From here, you are free to add your own data to the database. If you wish to use pre-seeded data, all you need to do is type `npm run seed` to seed the tables.

  When it's all all set up, run the app by typing `npm start` to start the server and test your endpoints within insomnia or similar software.
  
  ## Usage
  This app is designed purely for back-end use. There is no front end to see the different functionality, but you can see the different api end points through localhost within your browser or through insomnia or similar software that allows api testing.

  All API endpoints start at localhost:3001 by default.

  Category API endpoints:<br>
  GET(all): /api/categories<br>
  GET(one): /api/categories/(id)<br>
  POST: /api/categories<br>
  PUT: /api/categories/(id)<br>
  DELETE: /api/categories/(id)<br>

  Product API endpoints:<br>
  GET(all): /api/products<br>
  GET(one): /api/products/(id)<br>
  POST: /api/products<br>
  PUT /api/products/(id)<br>
  DELETE: /api/products/(id)<br>

  Tag API endpoints:<br>
  GET(all): /api/tags<br>
  GET(one): /api/tags/(id)<br>
  POST: /api/tags<br>
  PUT: /api/tags/(id)<br>
  DELETE: /api/tags/(id)<br>

  ## Tests
  There are no testing features included with this app.

  ## Questions
  Any questions can be directed at the primary author via: <br>
  [GitHub](https://github.com/cory-hall) <br>
  [Contact Me!](mailto:cory.c.hall@gmail.com)

  ## Credits
  Cory Hall<br>
  Additional Code Supplied By<br>
  [Coding Boot Camp](https://github.com/coding-boot-camp/fantastic-umbrella)

  ## License
  Copyright 2022 Cory Hall

        Permission is hereby granted, free of charge, to any person obtaining a copy of this 
        software and associated documentation files (the "Software"), to deal in the Software 
        without restriction, including without limitation the rights to use, copy, modify, 
        merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
        permit persons to whom the Software is furnished to do so, subject to the following 
        conditions:
        
        The above copyright notice and this permission notice shall be included in all 
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
        INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
        PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
        FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
        OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
        DEALINGS IN THE SOFTWARE.
