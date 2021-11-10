# Student Management

The following program is for a school management system, where a database of
student can be stored, updated and deleted.
This demonstrates how to run the program.
### Dependecy to be installed 
Since the app will run simaltaenously with the json backend serer, you must install concurrently dependecy with the following command:
### `yarn add concurrently`
After the pacakge is successfully installed, you can deploy the app.

### Deployment
### `yarn run start:dev`
After deploying, you should see the app running on your browser at the following address:

[http://localhost:3000](http://localhost:3000)

where else the backend server will be concurrently running at:

[http://localhost:3005](http://localhost:3005)

the data stored in the database can be viewed at:
[http://localhost:3005/users](http://localhost:3005/users)


### Dependencies Used
For styling `bootstrap`

For fake server `json`

Others: `axios` , `react-router-dom`, `react-router` , `yarn-concurrently`



