import { apiGatewayAdapter } from "./app/instrastructure/driving/apiGatewayAdapter";
import { DynamoDbAccountManager } from "./app/instrastructure/driven/accountManager/DynamoDbAccountManager";
import {addAccount, AddAccount} from "./app/domain/addAccount";

// Instantiate core functionality with its dependencies
/*const accountCloser: CloseAccount = closeAccount({
  instrumentation: new StubInstrumentation(), // Implements Instrumentation interface (port)
  accountManager: new DynamoDbAccountManager(), // Implements AccountManager interface (port)
});*/

const accountCreator: AddAccount = addAccount({
  accountManager: new DynamoDbAccountManager()
});
// Initialise the handler with the apiGatewayAdaptor which depends on the CloseAccount port
export const handler = apiGatewayAdapter(accountCreator);
