document.addEventListener('DOMContentLoaded', () => {

    // Profile Management
    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        // Save profile information (this should be sent to the backend)
        console.log(`Profile Updated: ${username}, ${email}, ${phone}, ${password}`);
        alert('Profile Updated');
    });

    // Passport and Visa Management
    const visaForm = document.getElementById('visa-form');
    const expiryList = document.getElementById('expiry-list');

    visaForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const passportNo = document.getElementById('passportNo').value;
        const issueDate = document.getElementById('issueDate').value;
        const expiryDate = document.getElementById('expiryDate').value;

        // Add visa details (you will save this data to a database)
        const listItem = document.createElement('li');
        listItem.innerText = `Passport No: ${passportNo}, Expiry Date: ${expiryDate}`;
        expiryList.appendChild(listItem);

        alert('Passport/Visa Added');
    });

    // Notification Settings
    const notificationForm = document.getElementById('notification-form');
    notificationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const daysNotice = document.getElementById('days-notice').value;

        // Save notification preferences (you will save this data to the backend)
        console.log(`Notification preference saved: ${daysNotice} days`);
        alert('Notification Settings Saved');
    });

    // Subscription Management
    const subscriptionForm = document.getElementById('subscription-form');
    subscriptionForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedPlan = document.querySelector('input[name="plan"]:checked').value;

        // Subscription plan selection (send this data to the backend/payment gateway)
        console.log(`Subscription Plan Selected: ${selectedPlan}`);
        alert(`Subscribed to ${selectedPlan} plan`);
    });
});
