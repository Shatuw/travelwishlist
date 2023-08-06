import express from 'express';
import dotenv from 'dotenv';
import countriesRoutes from './components/routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
//import countries from './countries.json';

app.use(express.json());
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

//Task 1 with countries.json
// app.get("/api/countries", (req, res, next) => {
//     const sort = req.query.sort;
//     console.log(sort);
//     if (sort){
//         const sortedCountries = countries.sort((a,b) => a.name.localeCompare(b.name));
//         res.render("countries.ejs", {countries : sortedCountries});
//     }
//     else{
//         res.render("countries.ejs", {countries});
//     }
// });

//Task 1 with posgreSQL DB:
app.use('/api/countries', countriesRoutes);

app.get("/api/countries", async (req, res, next) => {
  const sort = req.query.sort;
  const countries = await fetch("http://localhost:3001/api/countries")
  if (sort) {
    const sortedCountries = countries.sort((a, b) => a.name.localCompare(b.name));
    res.render("countries.ejs", { countries: sortedCountries });
  }
  else {
    res.render("countries.ejs", { countries })
  }
});

//Task2:
// app.post("/api/countries", (req, res, next) => {

// })