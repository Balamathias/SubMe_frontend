export const fakeUser = () => {
    return {
        id: 1,
        email: 'matiecodes@gmail.com',
        authenticated: true,
        first_name: 'Mathias',
        last_name: 'Bala',
        phone: '09154029724',
        role: 'admin',
        username: 'matiecodes',
        pin: '1234',
        password: 'password',
        created_at: new Date(),
        balance: 1000,
        invitation_code: 'abcd',
        is_verified: true,
        is_active: true,
        is_suspended: false,
    }
}

export const isAdmin = fakeUser().role === 'admin'