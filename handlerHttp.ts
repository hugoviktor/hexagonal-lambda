import { apiGatewayAdapter } from "./app/instrastructure/driving/apiGatewayAdapter";
import { DynamoDbAccountManager } from "./app/instrastructure/driven/accountManager/DynamoDbAccountManager";
import {addAccount, AddAccount} from "./app/domain/addAccount";



const accountCreator: AddAccount = addAccount({
  accountManager: new DynamoDbAccountManager()
});
// Initialise the handler with the apiGatewayAdaptor which depends on the CloseAccount port
export const handler = apiGatewayAdapter(accountCreator);
