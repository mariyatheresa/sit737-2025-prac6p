const express = require('express');
const winston = require('winston');
const app = express();
const port = process.env.PORT || 3000;


// Setup Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-microservice' },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Helper: Validate numbers
function validateNumbers(val1, val2, res) {
  if (isNaN(val1) || isNaN(val2)) {
    const message = 'Invalid input: num1 and num2 must be numbers.';
    logger.error(message);
    res.status(400).json({ error: message });
    return false;
  }
  return true;
}

// Routes
app.get('/add', (req, res) => {
  const { val1, val2 } = req.query;
  if (!validateNumbers(val1, val2, res)) return;
  const result = parseFloat(val1) + parseFloat(val2);
  logger.info(`Add: ${val1} + ${val2} = ${result}`);
  res.json({ result });
});

app.get('/subtract', (req, res) => {
  const { val1, val2 } = req.query;
  if (!validateNumbers(val1, val2, res)) return;
  const result = parseFloat(val1) - parseFloat(val2);
  logger.info(`Subtract: ${val1} - ${val2} = ${result}`);
  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const { val1, valm2 } = req.query;
  if (!validateNumbers(val1, val2, res)) return;
  const result = parseFloat(val1) * parseFloat(val2);
  logger.info(`Multiply: ${val1} * ${val2} = ${result}`);
  res.json({ result });
});

app.get('/divide', (req, res) => {
  const { val1, val2 } = req.query;
  if (!validateNumbers(val1, val2, res)) return;
  if (parseFloat(val2) === 0) {
    const message = 'Division by zero is not allowed.';
    logger.error(message);
    res.status(400).json({ error: message });
    return;
  }
  const result = parseFloat(val1) / parseFloat(val2);
  logger.info(`Divide: ${val1} / ${val2} = ${result}`);
  res.json({ result });
});

// Start server
app.listen(port, () => {
  console.log(`Calculator microservice running on http://localhost:${port}`);
  logger.info(`Server started on port ${port}`);
});
