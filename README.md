# PetListing Vite React App

## Features

- **Home Page**
- **Pet Listing**: Search and filter pets by breed, animal type, and location.
- **Pet Details**: View detailed information about individual pets.
- **Implemented Pagination on only 10 pets on each page**
- **Responsive Design**

## Technologies Used

- **Vite**
- **React**
- **Tailwind CSS**
- **Redux-Toolkit**
- **Axios**
- **React Router**

## Installation

To get started , follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rakesh-99/React-Pet-listing-App-.git
   ```

2. **Navigate to the root directory and enter below command:**

```
npm install

```

3.  **Create the .env file in root directory and paste below environment variables:**

```
VITE_PETS_API_KEY=https://pets-v2.dev-apis.com/pets
VITE_PETS_API_KEY_BY_ID=http://pets-v2.dev-apis.com/pets?id=${id}
VITE_PETS_ANIMAL= http://pets-v2.dev-apis.com/breeds?animal=${animal}
VITE_SEARCH_API=http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
```

4. **Start the server using blow command:**

```
npm run dev
```
