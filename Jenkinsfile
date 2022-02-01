pipeline {
  agent any

  tools {nodejs "Node 17.4.0"}

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }


    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}