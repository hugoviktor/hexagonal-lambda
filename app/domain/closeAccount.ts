import { AccountManager } from "../instrastructure/driven/accountManager/AccountManager";

export type CloseAccount = (accountId: string) => Promise<void>;

export const closeAccount = ({
  accountManager
}: {
  accountManager: AccountManager;
}): CloseAccount => async (accountId: string): Promise<void> => {
  try {
    await accountManager.closeAccount(accountId);
  } catch (err) {
    throw new Error(`Failed to remove meters for account ${accountId}`);
  }


};
