# AWS S3 Bucket File Manager

A Node.js application demonstrating AWS S3 bucket operations using the AWS SDK for JavaScript v3. This project showcases basic S3 operations like uploading files and listing bucket contents.

## Features

- Upload files to S3 bucket
- List objects in S3 bucket
- Environment-based configuration
- Docker support for containerized deployment

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|----------|
| Node.js    | 20.x    | Runtime environment |
| AWS SDK    | ^3.627.0| S3 bucket operations |
| Docker     | -       | Containerization |
| dotenv     | ^16.4.5 | Environment management |

## Prerequisites

- Node.js 20.x or higher
- AWS account with S3 access
- S3 bucket created
- AWS credentials (Access Key and Secret Key)

## Installation

1. Clone the repository
```bash
git clone https://github.com/Briso10-dev/nodeJS-bucketS3.git
cd nodeJS-bucketS3
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your AWS credentials
```

## Configuration

Create a `.env` file with the following variables:
```env
END_POINT=your_endpoint_url
REGION=your_region
ACCESS_KEY=your_access_key
SECRET_KEY=your_secret_key
```

## Usage

### Running Locally

```bash
node app.mjs
```

### Using Docker

1. Build the image
```bash
docker build -t s3-bucket-app .
```

2. Run the container
```bash
docker run --env-file .env s3-bucket-app
```

## Code Examples

### Uploading a File
```javascript
await uploadFile(
  "your-bucket-name",
  "test-file.txt",
  "Hello World!"
);
```

### Listing Bucket Contents
```javascript
await listObjects("your-bucket-name");
```

## Security

- Environment variables for sensitive data
- Docker non-root user implementation
- .gitignore configured for sensitive files

## Author

- [@Briso10-dev](https://github.com/Briso10-dev)

## License

This project is licensed under the ISC License - see the [package.json](package.json) file for details.

## Contributing

Feel free to contribute to this project. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
