var RateLimit = require('express-rate-limit');
  const rate_limit = (function(){
    var apiLimiter = new RateLimit({
        windowMs: 1*60*1000, // 15 minutes 
        max: 10,
        delayMs: 0 // disabled 
      });
    
    var Limiter = new RateLimit({
        windowMs: 60*1000, // 1 min window 
        // delayAfter: 1, // begin slowing down responses after the first request 
        // delayMs: 3*1000, // slow down subsequent responses by 3 seconds per request 
        max: 5, // start blocking after 5 requests 
        message: "Too many accounts created from this IP, please try again after an hour"
      });
    return {
        apiLimiter : apiLimiter,
        Limiter:Limiter
    }
  })();

  module.exports = rate_limit;