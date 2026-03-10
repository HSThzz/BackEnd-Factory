import { Router } from 'express';
import { HealthController } from '../controllers/HealthController';

const router = Router();
const healthController = new HealthController();

// Health check
router.get('/health', (req, res) => healthController.check(req, res));

// Root route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to teste API',
    version: '1.0.0',
  });
});

export default router;
