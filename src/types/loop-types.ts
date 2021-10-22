// Data

export type Step = 0 | 1;

export type Bar = Step[];

export type Instrument = Bar[];

export type Loop = {
    id: number;
    userId?: number;
    title: string;
    tempo: number;
    barLength: number;
    barCount: number;
    instruments: {
        [key: string]: Instrument;
    };
};

// Requests.

export type CreateLoopRequest = Omit<Required<Loop>, "id" | "userId">;

export type UpdateLoopRequest = Omit<Required<Loop>, "id">;

// Responses.

export type LoopResponseData = { loop: Loop };

export type LoopListResponseData = { loops: Loop[] };
