# Hello!

Welcome to my github! Here's my personal site that also contains my blog.

[Check it out!](https://noel-wilson.co.uk)

# Who am I?

<img src="./public/assets/profile.jpg" width="200" height="200">

I'm an experienced Software Engineer comfortable across the tech stack. 
I Have worked in London for over 10 years in various industries.
I specialise in building and leading efficient teams, bringing people together to build great products.

# Skills

* Python & Typescript
* Dev Ops & Continous Delivery
* Infrastructure as Code
* AWS & GCP & Azure
* Serverless & Containerisation
* Team building and mentoring

# Running this project

1. run `pnpm i`
2. run `pnpm dev`

# Deployment

When deploying this site:

1. run `pnpm build`
2. Copy dist folder to static file S3 folder
3. Set header: Content-Encoding: gzip
 
https://stackoverflow.com/questions/24209671/setting-http-headers-for-all-files-in-aws-s3-bucket
