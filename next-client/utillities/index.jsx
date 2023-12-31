import axios from "axios";
import dynamic from "next/dynamic";
export async function fetchAllJobPostings() {
    const response = await axios.get('http://localhost:8080/api/recruitments');
    console.log("first",response)
    return response.data;
}

export async function login(email, password) {
    const response = await fetch(' http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const data = await response.json();
        // Process the login response data
        return data;
    } else {
        throw new Error('Login failed');
    }
}

export async function signup(email,full_name,password, confirmPassword) {
    const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, full_name, password, confirmPassword }),
    });

    if (response.ok) {
        const data = await response.json();
        // Process the signup response data
        return data;
    } else {
        throw new Error('Signup failed');
    }
}
