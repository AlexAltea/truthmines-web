/// <reference path="../../../typings/main.d.ts" />

import {Component} from 'angular2/core';
import {Statement, StatementComponent} from './statement';

export interface Theorem {
    name: string;
    statementA: Statement;
    statementB: Statement;
}

@Component({
    selector: 'tm-theorem',
    directives: [
        StatementComponent
    ],
    template: `
        <span>Theorem</span>
        <tm-statement></tm-statement>
        <tm-statement></tm-statement>
        `
})

export class TheoremComponent {
    theorem: Theorem;
}
