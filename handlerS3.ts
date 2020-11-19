import { CloseAccount, closeAccount } from "./app/domain/closeAccount";
import { DynamoDbAccountManager } from "./app/instrastructure/driven/accountManager/DynamoDbAccountManager";
import { s3Adaptor } from "./app/instrastructure/driving/s3Adaptor";
import { S3 } from "aws-sdk";

// Instantiate core functionality with its dependencies
const accountCloser: CloseAccount = closeAccount({
  accountManager: new DynamoDbAccountManager(), // Implements AccountManager interface (port)
});

// Initialise the handler with the s3Adaptor which depends on the CloseAccount port
export const handler = s3Adaptor(accountCloser, new S3());
