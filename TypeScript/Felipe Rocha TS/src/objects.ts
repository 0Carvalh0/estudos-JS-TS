type product = {
    productId: string;
    productPrice: number;
};

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    order: product[];
};

const user: User = {
    firstName: "Joao",
    age: 21,
    email: "joao@gmail.com",
    password: "12345",
    order: [
        { productId: "1", productPrice: 200 },
        { productId: "2", productPrice: 500 },
    ],
};

const printLog = (message: string) => {};

printLog(user.password!);

type Author = {
    books: string[];
};

const author: Author & User = {
    firstName: "Machado",
    age: 61,
    email: "assis@gmail.com",
    order: [],
    books: ["1", "2"],
};

interface IUser {
    firstName: string,
    email: string
}

interface IAuthor {
    books: string[]
}

const author2: IUser & IAuthor = {
    firstName: "Lucas",
    email: "lucas@gmail.com",
    books: []
}
