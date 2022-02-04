import Amplify, { Auth } from "aws-amplify";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

Auth.configure({
    oauth: {
        domain: 'your-domain-name-from-cognito-user-pools-web-client',
        scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: 'http://localhost:8080',
        redirectSignOut: 'http://localhost:8080',
        responseType: 'code'
    }
})

function authenticate() {
    Auth.federatedSignIn({
        provider: 'COGNITO'
    });
}

const AuthButton = document.getElementById("btnAuth");
AuthButton.addEventListener("click", (evt) => {
    authenticate();
});