import { createUserWithEmailAndPassword } from "@/config/firebase/firebaseAuthentication";
import { signInWithEmailAndPassword } from "@/config/firebase/firebaseAuthentication";

export const handleLogin = (userEmail: string, userPassword: string) => {
    console.log(userEmail, userPassword);
    signInWithEmailAndPassword(userEmail, userPassword)
        .then(() => {
            alert("Successfully logged in!");
            window.location.href = "/dashboard";
        })
        .catch(error => {
            console.error("Error logging in:", error);
            alert("Failed to log in. Please check your email and password.");
        });
};

export const handleSignUp = async (userEmail: string, userPassword: string, userFirstName: string, userLastName: string, userDepartment: string, setError: (error: string) => void) => {
    console.log(userEmail, userPassword, userDepartment, userFirstName, userLastName);

    const userDisplayName = `${userFirstName} ${userLastName}`

    try {
        await createUserWithEmailAndPassword(
            userEmail,
            userPassword,
            userDisplayName, 
            userDepartment,
        )
        alert("User registered successfully.");
        window.location.href = "/";
    } catch (error) {
        setError((error as Error).message);
    }
}

