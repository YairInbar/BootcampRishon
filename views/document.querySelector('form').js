///totalversion1
document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();


    const name = document.querySelector('#UserName').value.trim();   
    const email = document.querySelector('#Email').value.trim();      
    const password = document.querySelector('#password').value;       

    if (name && email && password) {
        try {
            const response = await fetch('/api/auth/register', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include', 
                body: JSON.stringify({ 
                    name,     
                    email, 
                    password 
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                document.getElementById('responseMessage').innerText = data.message;
                event.target.reset(); 
                

            } else {
                document.getElementById('responseMessage').innerText = data.message || 'שגיאה בתהליך ההרשמה';
            }

        } catch (error) {
            console.error('Error:', error);
            document.getElementById('responseMessage').innerText = 'שגיאה בתהליך ההרשמה';
        }
    } else {
        alert('אנא מלא את כל השדות.');
    }
});