export class Account{
    id: string;
    currency: string
    customer: string;
    balance: number


    constructor(id: string, currency: string, customer: string, balance: number) {
        this.id = id;
        this.currency = currency;
        this.customer = customer;
        this.balance = balance;
    }
}
