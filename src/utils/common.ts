export const getRelativeUnixDuration = (amount: string): string => {
    const parsedAmount = parseInt(amount, 10);
    return (parsedAmount * 86400).toString();
};
