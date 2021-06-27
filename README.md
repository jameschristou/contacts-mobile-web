# contacts-mobile-web
This web application is a POC for creating a thin client, component based front end which is data driven by API. The API which is required to work with this application is the  [ContactsMobileBff](https://github.com/jameschristou/ContactsMobileBff).


## Build & Development
Run `npm install` to install all packages and depenedencies.

### Runnning ContactsMobileBff
Follow the [readme for ContactsMobileBff](https://github.com/jameschristou/ContactsMobileBff). You will need to make sure this API is running in order for `contacts-mobile-web` to work.

### Dev
To compile front end assets while developing use `npm run start`.

### Production
`npm run build`

### Analysis
`npm run build:analyze` builds static analysis to examine bundle sizing. You can see output reports in dist/stats.html and dist/report.html
then use http-server to run a http server and access the stats.html. Just run `http-server dist` (ensure you have http-server installed globally)
the dist parameter ensures that it uses the dist folder. It will give you an IP address e.g. http://172.17.126.81:8080 then you can access
stats.html using http://172.17.126.81:8080/stats.html.