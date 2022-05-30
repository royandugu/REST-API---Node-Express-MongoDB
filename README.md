# REST-API---Node-Express-MongoDB

This API handles basic CRUD operations with two elements in the schema, Name and hasCompleted. 
*Schema setup in model.js*

Dependencies used
1. Express mainly for middleware setups.
2. Mongoose to handle MongoDB schemas and connections 

Additional Dependencies
1. Dotenv 
2. Nodemon

API route (GET, POST) : http://localhost:5000/api/v1/tasks
API route (PATCH, DELETE, GET-SINGLE) : http://localhost:5000/api/v1/tasks/:id

MVC Architecture
The API is designed to match with MVC architecture for easy updating and error handing.
 
![web_mvc_diagram](https://user-images.githubusercontent.com/95025114/171020034-23d60202-2109-4cad-9ff0-57e3d750c68b.png)

**HOW TO USE?**
1. Run `npm install` to install the dependencies from package.json
2. Create a dotenv file (.env)
3. Place your MongoDB URI as MONGO_URI=yourURI
4. Manupulate the schemas as required
5. Match the View fetching from the API route above
6. Take a look at `controller.js` to match with the way response is being made to render in the front-end

**CONS**
1. The additional errors caught by controllers are just regularly thrown.
 

`---Learned and implemented from John Smilga---`
