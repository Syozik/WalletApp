
type TransactionType = {
    id: number;
    type: "payment" | "credit";
    transactionName: string;
    description: string;
    date: string;
    amount: number;
    pending: boolean;
    person: string | null;
    icon: string | null;
};

export type { TransactionType };
