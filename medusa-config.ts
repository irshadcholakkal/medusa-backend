// import { loadEnv, defineConfig } from '@medusajs/framework/utils'

// loadEnv(process.env.NODE_ENV || 'development', process.cwd())

// module.exports = defineConfig({
//   projectConfig: {
//     databaseUrl: process.env.DATABASE_URL,
//     http: {
//       storeCors: process.env.STORE_CORS!,
//       adminCors: process.env.ADMIN_CORS!,
//       authCors: process.env.AUTH_CORS!,
//       jwtSecret: process.env.JWT_SECRET || "supersecret",
//       cookieSecret: process.env.COOKIE_SECRET || "supersecret",
//     }
//   }
// })




import { defineConfig } from "@medusajs/framework/utils"

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS??'',
      adminCors: process.env.ADMIN_CORS??'',
      authCors: process.env.AUTH_CORS??'',
    },
    workerMode: process.env.MEDUSA_WORKER_MODE as
      | "shared"
      | "server"
      | "worker",
      
    
  },
 
})


// import { defineConfig } from "@medusajs/framework/utils"

// export default defineConfig({
//   projectConfig: {
//     databaseUrl: process.env.DATABASE_URL,
//     databasePool: {
//       min: 1,
//       max: 3
//     },
    
//     redisUrl: process.env.REDIS_URL,
//   },
// })
