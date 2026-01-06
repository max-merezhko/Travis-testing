# Travis-testing

A simple JavaScript project demonstrating CI/CD principles with Travis CI.

## What is CI/CD?

**CI/CD** stands for **Continuous Integration** and **Continuous Deployment/Delivery**:

- **Continuous Integration (CI)**: Automatically runs tests whenever code is pushed to a repository, ensuring code quality and catching bugs early.
- **Continuous Deployment/Delivery (CD)**: Automatically deploys code to production (or staging) after successful tests.

## Project Structure

```
.
├── greeter.js          # Simple greeting application
├── greeter.test.js     # Unit tests
├── package.json        # Node.js dependencies and scripts
├── .travis.yml        # Travis CI configuration
└── README.md          # This file
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests Locally

```bash
npm test
```

### 3. Run the Application

```bash
node greeter.js
```

## Setting Up Travis CI

### Step 1: Push to GitHub

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit with CI/CD setup"
   ```

2. Create a repository on GitHub and push:
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 2: Connect to Travis CI

1. Go to [travis-ci.com](https://travis-ci.com) and sign in with your GitHub account
2. Click on your profile → Settings
3. Find your repository in the list and toggle it ON
4. Travis CI will automatically detect the `.travis.yml` file

### Step 3: Test the Pipeline

1. Make a small change to the code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test CI pipeline"
   git push
   ```
3. Go to Travis CI dashboard to see your build running!

## How It Works

The `.travis.yml` file configures:
- **Language**: Node.js
- **Node versions**: Tests on Node 18 and 20
- **Script**: Runs `npm test` automatically
- **Notifications**: Email alerts only on failures

## Understanding the Pipeline

1. **Trigger**: When you push code to GitHub
2. **Build**: Travis CI spins up a virtual machine
3. **Install**: Runs `npm install` to get dependencies
4. **Test**: Runs `npm test` to execute your test suite
5. **Report**: Shows pass/fail status with detailed logs

## Next Steps

- Add more tests to `greeter.test.js`
- Add linting (ESLint) to the pipeline
- Set up deployment to a hosting service
- Add code coverage reporting
- Explore other CI/CD tools (GitHub Actions, CircleCI, etc.)

## Resources

- [Travis CI Documentation](https://docs.travis-ci.com/)
- [Jest Testing Framework](https://jestjs.io/)
- [CI/CD Best Practices](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
