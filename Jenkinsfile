pipeline {
  agent any

  stages {

    stage('checkout') {
      steps {
        checkout scm
      }
    }

    stage('build') {
      steps {
        sh 'npm install'

      }
    }

    stage('test') {
      steps {
        sh 'echo This is where testing would be'
      }
    }

    stage('deploy') {
      steps {
        sh 'echo Deploy stuff'
      }
    }
  }
}
