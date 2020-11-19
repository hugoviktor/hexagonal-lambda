import {addAccount, AddAccount} from "./app/domain/addAccount";
import {DynamoDbAccountManager} from "./app/instrastructure/driven/accountManager/DynamoDbAccountManager";
import {sqsAdaptor} from "./app/instrastructure/driving/sqsAdaptor";

const accountCreator: AddAccount = addAccount({
    accountManager: new DynamoDbAccountManager()
});

export const handler = sqsAdaptor(accountCreator);
