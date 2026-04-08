// User interface
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

// Function to create a user
function createUser(user: User): string {
    return `User ${user.name} created successfully`;
}

// Function to get active users
function getActiveUsers(users: User[]): User[] {
    return users.filter((user) => user.isActive);
}

// Data
const users: User[] = [
    { id: 1, name: "Suvo", email: "suvo@gmail.com", isActive: true },
    { id: 2, name: "Rahul", email: "rahul@gmail.com", isActive: false },
]

console.log(createUser(users[0]));

const activeUsers = getActiveUsers(users);
console.log(activeUsers);