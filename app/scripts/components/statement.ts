/// <reference path="../../../typings/main.d.ts" />

import {Component} from 'angular2/core';

export interface Statement {
    source: string;
    implications: Statement[];
    equivalences: Statement[];
}

@Component({
    selector: 'tm-statement',
    template: `
        <span>Statement</span>
        `
})

export class StatementComponent {
    statement: Statement;
}
