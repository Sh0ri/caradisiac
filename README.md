# TOP-CARADISIAC

## Things to do to try the project
> First, install all the required packages :
```sh
❯ cd /path/to/workspace/caradisiac
❯ npm install
```

```sh
❯ cd /path/to/workspace/caradisiac/react-app
❯ npm install
```

> Then, start the elasticsearch client
```sh
❯ cd /path/to/elasticsearch/bin
❯ elasticsearch.bat
```

> Then, start the server
```sh
❯ cd /path/to/workspace/caradisiac
❯ node index.js
```

> Finally, start the react-app
```sh
❯ cd /path/to/workspace/caradisiac/react-app
❯ npm start
```

## Commands in browser
```sh
❯ http://localhost:9292/api/delete/index
❯ http://localhost:9292/api/create/index
❯ http://localhost:9292/api/populate
❯ http://localhost:9292/api/suv
❯ http://localhost:9292/api/suv + query (example : ?brand=citroen)
```

## If the web site doesn't load : 
DO : 
```sh
❯ http://localhost:9292/api/create/index
❯ http://localhost:9292/api/populate
```
## Things you can do on the web site
> Order by :
  . Brand
  . Model
  . Name
  . Volume

> Update the database by clicking on the **Update** button

> Query the database by using the form

> Reset the query by clicking on the **Reset** button

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
