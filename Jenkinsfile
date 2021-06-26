pipeline {
    agent any
    stages {
        stage('Building') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deploy') {
            steps {
                input message: 'Do you want to continue? (Click "Proceed" to continue)'
                sh './jenkins/scripts/deliver.sh'
            }
        }
    }
}
