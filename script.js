
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
  import { firebaseConfig } from './firebase-config.js';
 
 

  
 
  const firebaseConfig = {
    apiKey: "AIzaSyCxWhWhDLdQE51_xQhhgajaqcr7-2ukI3c",
    authDomain: "lumina-project-af644.firebaseapp.com",
    projectId: "lumina-project-af644",
    storageBucket: "lumina-project-af644.firebasestorage.app",
    messagingSenderId: "390118211680",
    appId: "1:390118211680:web:6ecda70fc0f199d1888305",
    measurementId: "G-EVWHNLW39J"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  async function sendOrder() {
    const name = document.getElementById('custName').value;
    const email = document.getElementById('custEmail').value;
    const submitBtn = document.querySelector('.btn-submit');

    if (!name || !email) {
        alert("Please fill in all fields.");
        return;
    }

    submitBtn.innerText = "Processing...";
    submitBtn.disabled = true;

    try {
        const docRef = await addDoc(collection(db, "orders"), {
            customer_name: name,
            customer_email: email,
            product: "Lumina Smart Lamp",
            status: "pending",
            createdAt: serverTimestamp() 
        });

        console.log("Order saved with ID: ", docRef.id);
        
        alert("Thank you, " + name + "! Your order has been placed.");
        document.getElementById('purchase-form').reset();

    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.innerText = "Confirm Purchase";
        submitBtn.disabled = false;
    }
}

// Tornar a função global para o HTML conseguir chamá-la
window.sendOrder = sendOrder;
