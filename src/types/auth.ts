export type UserRole = "admin"| "doctor" | "nurse" | "lab_scientist" | 'receptionist'

export interface User{
    id: string;
    full_name: string;
    email: string;
    role: UserRole;
    createdAt: string;
}

export interface LoginCredentials{
    email: string;
    password: string;
}


export interface RegisterCredentials{
    full_name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: UserRole;
}

export interface AuthResponse {
    success: boolean;
    data:{
        user:User;
        accessToken:string;
    }
}