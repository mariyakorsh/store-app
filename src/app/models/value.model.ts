export default class Value {
    skus: Product[];
    group: Group;
}

class Product {
    id: number;
    name: string;
    price: number;
}

class Group {
    id: number;
    name: string;
}
