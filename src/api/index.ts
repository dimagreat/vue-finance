export interface IBudgetSettings {
  savings: number;
  income: number;
}

export interface ITarget {
  name: string;
  price: number;
  balance: number;
  id: string;
}

const BUDGET_SETTINGS = 'BUDGET_SETTINGS';
const TARGETS = 'TARGETS';
const COMPLETED_TARGETS = 'COMPLETED_TARGETS';

class BudgetApi {
  private storage = window.localStorage;

  public getBudgetSettings(): IBudgetSettings {
    return this.getData(BUDGET_SETTINGS);
  }

  public setBudgetSettings(budget: IBudgetSettings) {
    this.setData(BUDGET_SETTINGS, budget);
  }

  public getCompletedTargets() {
    return this.getData(COMPLETED_TARGETS);
  }

  public completeTarget(target: ITarget) {
    const targets = this.getCompletedTargets() || [];
    this.setData(COMPLETED_TARGETS, [...targets, target]);
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
