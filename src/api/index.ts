export interface IBudgetSettings {
  savings: number;
  income: number;
}

const BUDGET = 'budget';

class BudgetApi {
  private storage = window.localStorage;

  public getBudgetSettings(): IBudgetSettings {
    const data = this.storage.getItem(BUDGET);
    return data && JSON.parse(data);
  }

  public setBudgetSettings(budget: IBudgetSettings) {
    this.storage.setItem(BUDGET, JSON.stringify(budget));
  }
}

export default new BudgetApi();
