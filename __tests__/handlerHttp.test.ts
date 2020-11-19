import { APIGatewayProxyEvent } from "aws-lambda";
import { AccountManager } from "../app/instrastructure/driven/accountManager/AccountManager";
import { apiGatewayAdapter } from "../app/instrastructure/driving/apiGatewayAdapter";
import {addAccount} from "../app/domain/addAccount";

describe("Close Accounts via API Gateway", () => {


  let accountWithNoMeters: AccountManager;

  beforeEach(() => {
    accountWithNoMeters = {
      closeAccount: jest.fn().mockResolvedValue(undefined),
      addAccount: jest.fn().mockResolvedValue(undefined),
    };
  });

  test("Account ID from HTTP passed account closer", async () => {
    const handler = apiGatewayAdapter(addAccount({
      accountManager: accountWithNoMeters,
    }));

    const deleteEvent: Partial<APIGatewayProxyEvent> = {
      path: `/account`,
      httpMethod: "DELETE",
      pathParameters: { id: "test-id-1" },
    };
    const result = await handler(deleteEvent as any, {} as any, undefined as any);

    expect(result).toMatchObject({
      body: "Successfully closed account",
      headers: { "Content-Type": "text/plain" },
      statusCode: 200,
    });
    expect(accountWithNoMeters.closeAccount).toBeCalledWith("test-id-1");
  });
});
