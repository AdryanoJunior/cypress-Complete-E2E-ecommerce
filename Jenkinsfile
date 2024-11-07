pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                git branch: 'main', url: 'https://github.com/AdryanoJunior/cypress-Complete-E2E-ecommerce.git'
                bat 'npm install'
            }
        }
         stage('Run Tests') {
            steps {
                bat '''set NO_COLOR=1
npm test'''
            }
        }
    }
}
