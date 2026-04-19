# 🏗️ AWS CI/CD Architecture for Static Website Hosting
```
Developer
   │
   ▼
GitHub / AWS CodeCommit Repository
   │
   ▼
AWS CodePipeline (CI/CD Orchestration)
   │
   ├── Source Stage
   │      └── Fetch latest code from repository
   │
   └── Deploy Stage
          └── Deploy files to S3 Website Bucket
                    │
                    ▼
        Amazon S3 Static Website Bucket (Private)
                    │
          Protected using Origin Access Identity (OAI)
                    │
                    ▼
           Amazon CloudFront (CDN)
                    │
     HTTPS enabled via AWS Certificate Manager (ACM)
                    │
                    ▼
        GoDaddy DNS (Custom Domain Mapping)
                    │
                    ▼
                 End Users
```
             
## ⚙️ CI/CD Pipeline Workflow (Step-by-Step)

### 1. Code Development
- Developer writes and updates static website code (HTML, CSS, JS)
- Code is pushed to GitHub or AWS CodeCommit repository
### 2. Source Stage (CodePipeline)
- AWS CodePipeline is triggered automatically on code changes
- It pulls the latest code from the repository
- Stores the source artifact in an S3 artifact bucket (temporary storage)
### 3. Deploy Stage
- CodePipeline deploys the final output to the S3 static website bucket
- This bucket stores all website files such as:
  - index.html
  - CSS, JS, images
### 4. Secure S3 Access (OAI)
- The S3 bucket is kept private
- Access is restricted using Origin Access Identity (OAI)
- Only CloudFront is allowed to read from the bucket
### 5. Content Delivery via CloudFront
- CloudFront serves the website globally
- Improves performance using edge caching
- Provides secure HTTPS access using AWS Certificate Manager (ACM)
### 6. Domain Routing (GoDaddy DNS)
- Custom domain purchased from GoDaddy
- DNS is configured to point to CloudFront distribution
- Users access the website via a branded domain
### 7. End User Access
- Users access the website securely via HTTPS
- Content is delivered from nearest CloudFront edge location for low latency

## 🔐 Key Security Features
- S3 bucket is not publicly accessible
- Access restricted using OAI (CloudFront only access)
- HTTPS enabled using ACM
- CloudFront acts as a secure entry point

## ⚡ Key Benefits
- Fully automated deployment (CI/CD)
- Secure architecture (no direct S3 exposure)
- High performance via CDN caching
- Scalable and production-ready setup
- Custom domain with HTTPS support

## 🔐 AWS Services Used
- Amazon S3
- AWS CodePipeline
- Amazon CloudFront
- AWS Certificate Manager (ACM)
- Origin Access Identity
- GoDaddy DNS
  
## 🧠 Key Skills Demonstrated
- CI/CD pipeline design and automation
- AWS cloud architecture design
- Static website hosting on S3
- CDN and caching with CloudFront
- Domain and DNS configuration
- SSL/TLS security implementation
- Infrastructure security best practices (OAI)

## 🧠 Summary

A production-ready simple static website deployment pipeline with automation, and basic security best practices.

