ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 1500,
    
  });
  ScrollReveal().reveal('.card1', { delay: 300, origin: 'left' });
  ScrollReveal().reveal('.card2', { delay: 600, origin: 'left' });
  ScrollReveal().reveal('.card3', { delay: 900, origin: 'left' });


//login/signup form toggle

/*function showForm(formId) {
    document.getElementById('login').style.display = formId === 'login' ? 'block' : 'none';
    document.getElementById('signup').style.display = formId === 'signup' ? 'block' : 'none';

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`button[onclick="showForm('${formId}')"]`).classList.add('active');
}*/
function showLoginForm() {
  document.getElementById('loginForm').classList.remove('hidden');
  // Hide the initial button after clicking
  document.querySelector('.btn:not([type="submit"])').classList.add('hidden');
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login form submitted (demo)!');
});
function showSignUp() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupForm').classList.remove('hidden');
};

window.onload = function () {
  google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com', // Replace with your Client ID
      callback: handleCredentialResponse
  });

  // Render Google Sign-In button for Login
  google.accounts.id.renderButton(
      document.getElementById('google-login-btn'),
      { theme: 'outline', size: 'large', text: 'signin_with', width: 360 }
  );

  // Render Google Sign-In button for Sign Up
  google.accounts.id.renderButton(
      document.getElementById('google-signup-btn'),
      { theme: 'outline', size: 'large', text: 'signup_with', width: 360 }
  );

  google.accounts.id.prompt(); // Optional: Shows the One Tap prompt
};
function showLogin() {
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
}

// Basic form submission handling (for demo purposes)
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login form submitted (demo)!');
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Sign-up form submitted (demo)!');
}); 
// Get Firebase Auth instance
const auth = firebase.auth();
// DOM elements
const userInfo = document.getElementById("userInfo");
const errorMessage = document.getElementById("errorMessage");
const signOutButton = document.getElementById("signOut");
const signInOptions = document.getElementById("signInOptions");
const emailSignIn = document.getElementById("emailSignIn");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// Listen for auth state changes
auth.onAuthStateChanged((user) => {
  if (user) {
      // User is signed in
      userInfo.innerHTML = `Welcome, ${user.displayName || user.email}!`;
      signInOptions.style.display = "none";
      emailSignIn.style.display = "none";
      signOutButton.style.display = "block";
      errorMessage.innerHTML = "";
  } else {
      // No user is signed in
      userInfo.innerHTML = "";
      signInOptions.style.display = "block";
      signOutButton.style.display = "none";
  }
});

// Google Sign-In
function continueWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.continueWithPopup(provider)
      .then((result) => {
          console.log("Google Sign-In successful:", result.user);
      })
      .catch((error) => {
          errorMessage.innerHTML = `Error: ${error.message}`;
          console.error("Google Sign-In error:", error);
      });
}

// Show Email Sign-In form
function showEmailSignIn() {
  emailSignIn.style.display = "block";
  signInOptions.style.display = "none";
  emailInput.value = "";
  passwordInput.value = "";
  errorMessage.innerHTML = "";
}

// Hide Email Sign-In form
function hideEmailSignIn() {
  emailSignIn.style.display = "none";
  signInOptions.style.display = "block";
}

// Email Sign-In
function signInWithEmail() {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (!email || !password) {
      errorMessage.innerHTML = "Please enter both email and password.";
      return;
  }
  auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
          console.log("Email Sign-In successful:", result.user);
      })
      .catch((error) => {
          errorMessage.innerHTML = `Error: ${error.message}`;
          console.error("Email Sign-In error:", error);
      });
}
// Email Sign-Up
function signUpWithEmail() {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (!email || !password) {
      errorMessage.innerHTML = "Please enter both email and password.";
      return;
  }
  auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
          console.log("Email Sign-Up successful:", result.user);
      })
      .catch((error) => {
          errorMessage.innerHTML = `Error: ${error.message}`;
          console.error("Email Sign-Up error:", error);
      });
}
/*// Facebook Sign-In
function signInWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("email");
  auth.signInWithPopup(provider)
      .then((result) => {
          console.log("Facebook Sign-In successful:", result.user);
      })
      .catch((error) => {
          errorMessage.innerHTML = `Error: ${error.message}`;
          console.error("Facebook Sign-In error:", error);
      });
} */
// Sign Out
function signOut() {
  auth.signOut()
      .then(() => {
          console.log("Sign-Out successful");
      })
      .catch((error) => {
          errorMessage.innerHTML = `Error: ${error.message}`;
          console.error("Sign-Out error:", error);
      });
}
auth.createUserWithEmailAndPassword(email, password)
  .then((result) => {
      result.user.sendEmailVerification();
      console.log("Email Sign-Up successful:", result.user);
  })
  .catch((error) => {
      errorMessage.innerHTML = `Error: ${error.message}`;
      console.error("Email Sign-Up error:", error);
  });
  function signInWithGoogle() {
      const auth = firebase.auth();
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
          .then((result) => {
              console.log("Google Sign-In successful:", result.user);
              alert(`Welcome, ${result.user.displayName}!`);
          })
          .catch((error) => {
              console.error("Google Sign-In error:", error);
              alert(`Error: ${error.message}`);
          });
  }

//end login/signup here
  