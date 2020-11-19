import {Account} from "../../../domain/models/Account";


export interface AccountManager {
  closeAccount(accountId: string): Promise<void>;
  addAccount(account: Account): Promise<Account>;
}
