/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) =>{
     //if we are in development
     if(phase === PHASE_DEVELOPMENT_SERVER) {
          return {
               env: {
                    mongodb_username: "tamika1234",
                    mongodb_password: "1234tamika",
                    mongodb_cluster: "cluster0",
                    mongodb_database: "my-site-dev"
               }
          }
     }
     //if we are in production
     return {
          reactStrictMode: true,
          env: {
               mongodb_username: "tamika1234",
               mongodb_password: "1234tamika",
               mongodb_cluster: "cluster0",
               mongodb_database: "my-site"
          }
     };
} 



module.exports = nextConfig
