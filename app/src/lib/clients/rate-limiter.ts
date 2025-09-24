import { RateLimiterMemory } from "rate-limiter-flexible";

export const rateLimiter = new RateLimiterMemory({
  points: 3,
  duration: 60 * 5, // 3 email every 5 minutes
});
