import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Hello');
  vscode.window.showInformationMessage('Hello');

  const generateReadme = vscode.commands.registerCommand(
  'niroobas-extension.generateReadme',
  async () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;

    if (!workspaceFolders) {
      vscode.window.showErrorMessage('Open a folder before generating a README.');
      return;
    }

    const projectFolder = workspaceFolders[0].uri;
    const readmeUri = vscode.Uri.joinPath(projectFolder, 'README.md');

    let readmeExists = false;

    try {
      await vscode.workspace.fs.stat(readmeUri);
      readmeExists = true;
    } catch {
      readmeExists = false;
    }

    if (readmeExists) {
    const answer = await vscode.window.showWarningMessage(
      'README.md already exists. Do you want to replace it?',
      'Replace',
      'Cancel'
    );

    if (answer !== 'Replace') {
      vscode.window.showInformationMessage('README generation cancelled.');
      return;
    }
    }



    const readmeContent = `# Project Name

    ## Description

    TODO: Add a short description of this project.

    ## Installation

    TODO: Add installation steps.

    ## Usage

    TODO: Add usage instructions.

    ## Contributing

    TODO: Add contribution guidelines.

    ## License

    TODO: Add license information.
    `;

    await vscode.workspace.fs.writeFile(
      readmeUri,
      Buffer.from(readmeContent, 'utf8')
    );

    vscode.window.showInformationMessage('README.md saved!');
  }
);

context.subscriptions.push(generateReadme);

}

export function deactivate() {}
