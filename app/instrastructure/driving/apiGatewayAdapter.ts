import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import {AddAccount} from "../../domain/addAccount";

const response = (body: string, statusCode = 200): APIGatewayProxyResult => ({
  body,
  statusCode,
  headers: { "Content-Type": "text/plain" },
});

const tryExtractBody = (event: APIGatewayProxyEvent) => (event.body ? JSON.parse(event.body) : undefined);

export const apiGatewayAdapter = (next: AddAccount): APIGatewayProxyHandler => async event => {
  console.log(event);
  const body = tryExtractBody(event);
  if (!body) {
    return response("Account body not defined", 500);
  }

  try {
    const currency = body["currency"];
    const customer = body["customer"];
    const balance  = body["balance"];
    await next(currency,customer, balance);
    return response("Successfully closed account");
  } catch (err) {
    console.error(err);
    return response("Unknown error", 500);
  }
};
