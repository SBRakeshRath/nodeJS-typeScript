# nodeJS-typeScript
It is a starter template for using typescript with nodeJs

-------

## How to use this Template

First create a new repository using this template. Then you have a project to use typescript with nodeJs.

## How to configure project before using

1. add a `.env` file in the root of the project
2. add two variables in that file as follows 

    ```
    port=5000
    environment=dev

 * alternative value of variable `environment` is `production`
 * port number specifies on which port server will run

## Important files

  ### `src/server/config.ts`

    you can add all the server specific config files here 

    * It by default holds `cors` option

  ### `src/routes/router.map.ts`

    It holds all the routes. It just act like root Router. To organize the project import all the first index roots here 

## How to handel and show errors 

 use a custom class `serverError` to create a error and pass that class to next function

  Import it from `src/interfaces/serverErrorInterface.ts` file


### packages used (only for development)

| packages   	| use                        	|
|------------	|----------------------------	|
| nodemon    	| for live reload            	|
| typescript 	| for obvious reason         	|
| ts-node    	| transpile typescript to js 	|

### packages used (in production)

| packages      	| use                                           	|
|---------------	|-----------------------------------------------	|
| cookie-parser 	| to handel cookies                             	|
| cors          	| to handel cross origin                        	|
| dotenv        	| to load environment variable form `.env` file 	|
| morgan        	| to log                                        	|
| http-errors   	| to create http-errors                         	|
| express       	| for obvious reason                            	|