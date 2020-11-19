import { SQSHandler } from "aws-lambda";
import {AddAccount} from "../../domain/addAccount";

export const sqsAdaptor = (next: AddAccount): SQSHandler => async event => {
    console.log(event);
    const record = event.Records[0];
    const body = JSON.parse(record.body);
    const currency = body["currency"];
    const customer = body["customer"];
    const balance  = body["balance"];
    const account = await next(currency,customer, balance);
    console.log(`Added account ${account.id}`);
}
