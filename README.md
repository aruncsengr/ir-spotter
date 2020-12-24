# IR spotter
 The live spotter for the Indian Railways, will sure be a saviour of your journey plans!

# Business problem
Demand of a real-time monitoring system for Indian Railways
- to display all available trains with their current locations to the connected devices (mobile, PC, web, API integration)
- to provide live feeds to 3rd party integration
- to serve growing number of connected devices at any time

# Factors to consider as I/P
- Live location tracker from the connected device 
- Desired location chosen by the traveller on app

# Core feature
- Live feeds (live streaming of the train running status)
- Maps (UI with map, if needed)

# Explore
- DB design: MongoDB (if needed)
- REST API: GraphQL
- Backend: Rails 5 API or Node.js
- Frontend: React.js
- UI testing: Cypress.io

# Performance tune-up exploration
- Broker service

# Architecture things
- Caching to speed-up clients fetching the data from Indian Railways discovered API 
- Serverless (FaaS)
- API gateway
- Unit test cases
- API testing (shift-left)
- Performance Benchmark
- Approach doc (if any)
- Git all

# DevOps (CI/CD)
- AWS EC2/Jenkins or Travis in GitHub infrastructure setup

# Deployment
- AWS with VPC (if needed)

# Tinkering steps & fine-tune areas
- SPA
- Performance check for 1 Billion simultaneous & concurrent users
