import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('cetl', async (tab) => {
            await vscode.commands.executeCommand('workbench.action.closeEditorsToTheLeft');
        }),
    );
}

export function deactivate() { }
