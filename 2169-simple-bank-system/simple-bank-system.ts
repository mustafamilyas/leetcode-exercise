class Bank {
    private balance: number[];
    constructor(balance: number[]) {
        this.balance = balance;
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if(!this.isValidAccount(account1) || !this.isValidAccount(account2)) return false;
        return this.withdraw(account1, money) && this.deposit(account2, money)
    }

    deposit(account: number, money: number): boolean {
        if(!this.isValidAccount(account)) return false;
        this.balance[account - 1] += money;
        return true;
    }

    withdraw(account: number, money: number): boolean {
        if(!this.isValidAccount(account) || this.balance[account - 1] < money) return false;
        this.balance[account - 1] -= money;
        return true;
    }

    private isValidAccount(account: number): boolean {
        return account >= 1 && account <= this.balance.length;
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */