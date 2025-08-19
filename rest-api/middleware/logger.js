export const logger = (req, res, next) => {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(`${req.method} ${req.url}`);
  console.log(`[${timestamp}] ${method} request to ${url}`);
  
  next();
}