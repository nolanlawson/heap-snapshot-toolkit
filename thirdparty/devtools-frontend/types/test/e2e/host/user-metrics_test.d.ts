interface UserMetrics {
    Action: {
        [name: string]: number;
    };
}
declare global {
    interface Window {
        Host: {
            UserMetrics: UserMetrics;
            userMetrics: {
                actionTaken(name: number): void;
            };
        };
    }
}
export {};
