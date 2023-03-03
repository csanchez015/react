const express = require("express");
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        _id: faker.random.alphaNumeric(20),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
    }
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id : faker.random.alphaNumeric(20),
        name : faker.company.name(),
        address : {
            street: faker.address.street() ,
            city: faker.address.city(), 
            state: faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
    return newCompany;
};

const newUser = createUser();
const newCompany = createCompany();

app.get("/api/users/new", (req, res) => {
    res.json({newUser})
})

app.get("/api/companies/new", (req, res) => {
    res.json({newCompany})
})

app.get("/api/user/company", (req, res) => {
    res.json({newUser, newCompany})
})

app.listen(port, () => console.log(`currently running on port ${port}`));