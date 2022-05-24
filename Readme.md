### Reach
A very basic Course Managment Systems that uses Strapi CMS on its backend and Next JS on the frontend.

## How to set up

1. Clone the repository
2. Run `yarn install` in both the folders
3. Run `yarn migrate` in the `ExpressServer` folder
4. Run `yarn dev` to start

### Here is sample cURL request to create a user

```
curl --location --request POST 'http://localhost:5000/api/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@test.com",
    "password": "test",
    "firstName": "TestF",
    "lastName": "TestL",

}'
```
