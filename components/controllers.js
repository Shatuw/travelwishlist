import { pool } from '../db.js';
import { getCountriesQuery, getCountryByIdQuery, createCountryQuery, deleteCountryQuery, updateCountryQuery } from './queries.js';


export const getCountries = (req, res) => {
    pool.query(getCountriesQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};