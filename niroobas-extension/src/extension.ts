import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Hello World');
  vscode.window.showInformationMessage('Hello World');
}

export function deactivate() {}
