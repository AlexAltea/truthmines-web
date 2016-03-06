/// <reference path="../../../typings/main.d.ts" />

import {Component} from 'angular2/core';
import {Theorem, TheoremComponent} from './theorem';
import {Statement} from './statement';

@Component({
    selector: 'app',
    directives: [
        TheoremComponent
    ],
    template: `
        <h1>Truth Mines</h1>
        <div class="sidebar">
            <div class="sidebar-section">
                <div class="sidebar-header">Public</div>
                <div class="sidebar-content">
                    <p>Online services are not available yet.</p>
                </div>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-header">Private</div>
                <div class="sidebar-content">
                    <p>Online services are not available yet.</p>
                </div>
            </div>
            <div class="sidebar-section">
                <div class="sidebar-header">Local</div>
                <div class="sidebar-content">
                    <ul class="sidebar-list">
                        <li *ngFor="#theorem of theorems">
                            {{theorem.name}}
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
        <tm-theorem></tm-theorem>
        `
})

export class AppComponent {
    // Local state
    theorems = kTheorems;
    
    // Current state
    curTheorem: Theorem;
}

var kStatements: Statement[] = [
    { "source": "Statement0", implications: [], equivalences: [] },
    { "source": "Statement1", implications: [], equivalences: [] },
    { "source": "Statement2", implications: [], equivalences: [] },
];

var kTheorems: Theorem[] = [
    { "name": "Theorem0", statementA: kStatements[0], statementB: kStatements[1] },
    { "name": "Theorem1", statementA: kStatements[1], statementB: kStatements[2] },
    { "name": "Theorem2", statementA: kStatements[0], statementB: kStatements[2] },
];
