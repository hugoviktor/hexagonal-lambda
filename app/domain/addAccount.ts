import {Account} from "./models/Account";
import {AccountManager} from "../instrastructure/driven/accountManager/AccountManager";
import {v4 as uuidv4} from 'uuid';

export type AddAccount = (currency: string, customer: string, balance: number) => Promise<Account>;

export const addAccount = ({
                               accountManager
                           }: {
    accountManager: AccountManager;
}): AddAccount => async (currency: string, customer: string, balance: number): Promise<Account> => {
    try {
        const acct: Account = new Account(uuidv4(), currency, customer, balance);
        return await accountManager.addAccount(acct);
    } catch (err) {
        throw new Error(`Failed to create account`);
    }


};
