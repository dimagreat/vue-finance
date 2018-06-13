export interface IBudgetSettings {
  savings: number;
  income: number;
}

export interface ITarget {
  name: string;
  price: number;
  saved: number;
}

const BUDGET_SETTINGS = 'BUDGET_SETTINGS';
const TARGETS = 'TARGETS';

class BudgetApi {
  private storage = window.localStorage;

  public getBudgetSettings(): IBudgetSettings {
    return this.getData(BUDGET_SETTINGS);
  }

  public setBudgetSettings(budget: IBudgetSettings) {
    this.setData(BUDGET_SETTINGS, budget);
  }

  public getTargets() {
    return this.getData(TARGETS);
  }

  public setTargets(targets: ITarget[]) {
    return this.setData(TARGETS, targets);
  }

  private setData(key: string, data: any) {
    this.storage.setItem(key, JSON.stringify(data));
  }

  private getData(key: string) {
    const data = this.storage.getItem(key);
    return data && JSON.parse(data);
  }
}

export default new BudgetApi();
