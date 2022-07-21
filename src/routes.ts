import Todolist from "@/pages/TodoList/Todolist";
import { PayloadAction } from '@reduxjs/toolkit';
import Main from "@/pages/TodoList/Main";

type SagaWorker = (...args: any[]) => void;

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

export type SagasToRun = Array<
    [
        SagaWorker,
        (params: Record<string, string>) => Pick<PayloadAction<unknown>, 'payload'>
    ]
    >;

export interface Route<S = {}> {
    cache: boolean;
    auth: boolean;
    exact: boolean;
    component: any;
    path: string | string[];
    sagasToRun: SagasToRun;
    /* TODO type more properly */
    layout: 'default' | 'auth' | 'user' | 'settings' | 'common' | 'sell';
    title?: string;
    handleResponse?: (
        res: Response,
        state: S,
        params: PartialRecord<string, string>
    ) => void;
}


export const routes: Route[] = [
    {
        path: '/',
        exact: true,
        component: Todolist,
        cache: false,
        auth: false,
        layout: 'default',
        title: 'UI',
        sagasToRun: [],
    },
    {
        path: '/main',
        exact: true,
        component: Main,
        cache: false,
        auth: false,
        layout: 'default',
        title: 'UI',
        sagasToRun: [],
    },
]