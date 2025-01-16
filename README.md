# Rent vs Buy Calculator

This React application helps users compare the long-term financial impact of renting versus buying a home. It provides an interactive interface to input key financial parameters and generates detailed results to aid decision-making.

## Features

- **Interactive Input Forms**: Input details about your financial position, rent, and home purchase costs.
- **Dynamic Calculations**: Uses formulas to calculate rent, savings, and buying costs over a specified period.
- **Detailed Results Modal**: Presents a comparison of renting vs buying after the specified time period.
- **Responsive Design**: Optimised for various screen sizes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rent-vs-buy-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rent-vs-buy-calculator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`.

## Embedding the App as an iFrame

To embed this application in another website, use the following iFrame code snippet:

```html
<iframe
	src="https://vermillion-truffle-142e9e.netlify.app/"
	width="100%"
	height="600"
	frameborder="0"
	style="border: none; overflow: hidden;"
	allowfullscreen
>
</iframe>
```

### Notes:

- Replace the `height` value if you need a taller or shorter iFrame.
- The `width` is set to 100% to ensure responsiveness.
- Ensure the domain where the iFrame is embedded allows cross-origin resource sharing (CORS).

## Usage

1. Open the app in your browser or embed it in another website using the iFrame snippet.
2. Input your financial details:
   - Initial savings
   - Monthly rent and rent increase rate
   - Home purchase price, upfront costs, ongoing costs, and appreciation rates
   - Loan details including interest rate and term
3. Click the "Calculate" button.
4. View detailed results in the modal that appears.

## Technology Stack

- **Frontend**: React.js, TailwindCSS
- **Animations**: Framer Motion
- **Hosting**: Netlify

## Development

### File Structure

- `src/components/SavingsCalculator.js`: Main component for the calculator.
- `src/utils/equations/rentVsBuyCalculator.js`: Core logic for calculations.
- `src/index.js`: Entry point for the application.

### Running Tests

1. Install testing dependencies:
   ```bash
   npm install --save-dev jest @testing-library/react
   ```
2. Run tests:
   ```bash
   npm test
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
