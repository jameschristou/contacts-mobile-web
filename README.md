# contacts-mobile-web
This web application is a POC for creating a thin client, component based front end that is data driven by API. The API required to work with this application is the  [ContactsMobileBff](https://github.com/jameschristou/ContactsMobileBff).

## Benefits
### Less Logic in Clients
Using this approach means less logic needs to be built into the client experience. This is especially a benefit when working with native applications. If you have both an iOS app and an Android app then any logic built into the client needs to be built twice. If you also have other experiences such as mobile web then that's a 3rd implementation you need to worry about. Logic bugs can be fixed from the API and will immediately take affect for all clients without requiring the lengthy process of updating apps, submitting to the app store and waiting for users to download the updates.

### More Alignment Across Client Experiences
This approach simplifies development for the clients and also creates more alignment between different client experiences since all client experiences need to implement the same components.

### Enhance Features Without Client App Updates
Enhancing existing features with more functionality can sometimes be done without requiring any client experience changes. For example, in this application, the Sort Order options are completely API driven. If we want to provide a new Sort Order option to users, or even remove an existing Sort Order option, we just need to make the change in the API and the client will just work.

### Personalisation & Localisation Can Be API Driven
The API can return personalised responses and even localised responses without having to build this into the client experiences.

## Drawbacks
### Larger Blast Radius With API Bugs
If there is a bug with the API then it affects all clients. However, compare this against having the same bug in the client. An API bug can be resolved within a short period of time and deployed so that it fixes the issue for all clients. A client bug means submitting a new version of your app to the app store and then waiting as maybe 95% of your users install the latest version.

### More Chatty Applications
Using this approach will probably mean more requests to the API. But in this age of high bandwidth, even for mobile devices, this in itself is not a significant problem.

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