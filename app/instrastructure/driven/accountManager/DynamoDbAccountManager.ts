import {AccountManager} from "./AccountManager";
import {Account} from "../../../domain/models/Account";
import {DynamoDB} from 'aws-sdk'

export class DynamoDbAccountManager implements AccountManager {


    public async closeAccount(): Promise<void> {
        return Promise.resolve();
    }


    addAccount(account: Account): Promise<Account> {
        const docClient = new DynamoDB.DocumentClient();
        var params = {
            TableName: 'accounts',
            Item: {
                "id": account.id,
                "currency": account.currency,
                "customer": account.customer,
                "balance": account.balance
            }
        };
        return new Promise<Account>((resolve, reject) => {
            docClient.put(params, ((err) => {
                if (err)
                    reject(err);
                else
                    resolve(account);
            }))
        })

    }
}
