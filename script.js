// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
  import { firebaseConfig } from './firebase-config.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCxWhWhDLdQE51_xQhhgajaqcr7-2ukI3c",
    authDomain: "lumina-project-af644.firebaseapp.com",
    projectId: "lumina-project-af644",
    storageBucket: "lumina-project-af644.firebasestorage.app",
    messagingSenderId: "390118211680",
    appId: "1:390118211680:web:6ecda70fc0f199d1888305",
    measurementId: "G-EVWHNLW39J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  async function sendOrder() {
    // 1. Pegar os valores dos inputs
    const name = document.getElementById('custName').value;
    const email = document.getElementById('custEmail').value;
    const submitBtn = document.querySelector('.btn-submit');

    // Validação básica
    if (!name || !email) {
        alert("Please fill in all fields.");
        return;
    }

    // Feedback visual para o usuário
    submitBtn.innerText = "Processing...";
    submitBtn.disabled = true;

    try {
        // 2. Enviar para o Firestore
        const docRef = await addDoc(collection(db, "orders"), {
            customer_name: name,
            customer_email: email,
            product: "Lumina Smart Lamp",
            status: "pending",
            createdAt: serverTimestamp() // Registra a data/hora exata
        });

        console.log("Order saved with ID: ", docRef.id);
        
        // 3. Sucesso!
        alert("Thank you, " + name + "! Your order has been placed.");
        document.getElementById('purchase-form').reset();

    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Something went wrong. Please try again.");
    } finally {
        // Restaurar o botão
        submitBtn.innerText = "Confirm Purchase";
        submitBtn.disabled = false;
    }
}

// Tornar a função global para o HTML conseguir chamá-la
window.sendOrder = sendOrder;
