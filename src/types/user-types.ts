export type User = {
    id: number;
    username: string;
    dateJoined: string;
};

export type UserResponseData = { user: User };

export type UserListResponseData = { users: User[] };
