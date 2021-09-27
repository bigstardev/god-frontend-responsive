# Volvo Cars (Global Online Digital) 
## Front-end coding (React)



Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop
![ProductListDesktop](./docs/ProductList-Desktop.png)

### Mobile
![ProductListDesktop](./docs/ProductList-Mobile.png)

The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data from the client side and render it in the browser. The data looks like this: 

```json
[
    {
      "id": "xc90-recharge",
      "modelName": "XC90 Recharge", 
      "bodyType": "suv",
      "modelType": "plug-in hybrid",
      "imageUrl": "/images/xc90_recharge.jpg"
    }
]
```
### What I have done
-Layout composition
-Develop responsive image slider using npm package
  Using React hook (useRef)
-Filter Products according to Body type

### Todo
-Data management
At the moment just using dummmy data and import that data in several components.
Ideally, creat the context, and store fetched data into context, so that every component can has access of data.
-Improve Some UI part
  most of them are simple, and  placeholder just for demonstration of dynamic Routing