import { Relationship } from "./relationship";

export class Account {
    id: string;
    accountNumber: string;
    relationships: Array<Relationship>;
}