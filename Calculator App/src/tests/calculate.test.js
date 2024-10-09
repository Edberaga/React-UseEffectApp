import { expect, test } from 'vitest'
import { calculate } from '../calculate'

test('Adding test', () => {
    let result = calculate(5, 3, '+')
    expect(result).toBe(8)
})

test('Subtracting test', () => {
    let result = calculate(5, 3, '-')
    expect(result).toBe(2)
})

test('Multiplying test', () => {
    let result = calculate(5, 3, '*')
    expect(result).toBe(15)
})

test('Dividing test', () => {
    let result = calculate(15, 3, '/')
    expect(result).toBe(5)
})

test('Divde by zero test', () => {
    let result = calculate(5, 0, '/')
    expect(result).toBe('Cannot divide by zero')
})

test('Invalid operator test', () => {
    expect(() => calculate(5, 3, '%').toThrowError('Invalid Operator'))
})