export class Calculator {

    public static add(x: number, y: number): number {
        return x + y;
    }

    public static sub(x: number, y: number): number {
        return x - y;
    }

    public static mul(x: number, y: number): number {
        return x * y;
    }

    public static div(x: number, y: number): number {
        return y ? x / y : null;
    }
}
