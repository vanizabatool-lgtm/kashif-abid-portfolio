import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import contactRoutes from './routes/contactRoutes.js'
import connectDB from './config/database.js'

const app = express()

const PORT = process.env.PORT || 5000

// Database
await connectDB()

// Security
app.use(helmet())

// CORS
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)

// Request parsing
app.use(express.json())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
})

app.use('/api', limiter)

// Routes
app.use('/api', contactRoutes)

// Health check
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Kashif Abid Portfolio API is running',
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})