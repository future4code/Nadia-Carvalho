import { User, performPurchase } from "../src/exerc1"

test("Teste do saldo > valor", () => {
	const user: User = {
		name: "IronMan",
		balance: 1000000
  }

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 999950
	})
})

test("Teste do saldo = valor", () => {
	const user: User = {
		name: "IronMan",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("Teste do saldo < valor", () => {
	const user: User = {
		name: "IronMan",
		balance: 40
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual(undefined)
})