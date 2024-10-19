# Random Object Generator

## Description

This project generates a file with random objects and processes them to identify their types. The project is divided into three main challenges:

1. **Challenge A**: Generate a file with random objects.
2. **Challenge B**: Process the generated file to identify the type of each object.
3. **Challenge C**: Dockerize the solution for Challenge B.

## Folder Structure
random-object-generator/ ├── src/ │ ├── challengeA.ts │ ├── challengeB.ts │ └── types.ts ├── Dockerfile ├── docker-compose.yml ├── package.json ├── package-lock.json └── README.md




## How to Run

### Prerequisites

- Node.js
- Docker

### Steps

1. **Install dependencies**:
    ```sh
    npm install
    ```

2. **Generate random objects file**:
    ```sh
    npm run generate
    ```

3. **Process the random objects file**:
    ```sh
    npm run process
    ```

4. **Dockerize and run the process**:
    ```sh
    docker-compose up --build
    ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.