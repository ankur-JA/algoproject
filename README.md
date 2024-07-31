# Basic Wallet Balance Checker

## Project Description

The Basic Wallet Balance Checker is a decentralized application (dApp) that allows users to check their Algorand wallet balance. This project demonstrates how to connect to Algorand's blockchain and interact with it using smart contracts and a user-friendly interface.

## Features

- **Connect Algorand Wallet**: Users can connect their Algorand wallets to the application.
- **Display Wallet Balance**: Users can view their wallet balance directly within the application.
- **Basic UI**: Provides a simple user interface for connecting the wallet and displaying the balance.

## Key Components

- **Wallet Integration**: Enables users to connect their Algorand wallets.
- **Balance Display**: Retrieves and shows the user's wallet balance.
- **User Interface**: A simple interface for connecting the wallet and displaying the balance.

## Getting Started

### Prerequisites

- **Algorand SDK**: Ensure you have the Algorand SDK installed.
- **Node.js**: Required for running the frontend application.
- **Python**: Required for the smart contract.

### Installation

#### Backend (Smart Contract)

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/algoproject.git
    cd algoproject
    ```

2. **Install Python dependencies:**

    ```bash
    pip install py-algorand-sdk
    ```

3. **Deploy the smart contract:**

    Navigate to the smart contract directory and follow the instructions in the `smart_contract/README.md` to deploy the contract.

#### Frontend

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend application:**

    ```bash
    npm start
    ```

## Usage

1. **Connect Wallet**: Open the frontend application and connect your Algorand wallet using the provided interface.
2. **Check Balance**: Once connected, the application will display your wallet balance.

## Contributing

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/YourFeature
    ```

3. Make your changes and commit:

    ```bash
    git commit -am 'Add new feature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature/YourFeature
    ```

5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Algorand Developer Documentation](https://developer.algorand.org/docs/)
- [Algorand SDK for Python](https://github.com/algorand/py-algorand-sdk)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
