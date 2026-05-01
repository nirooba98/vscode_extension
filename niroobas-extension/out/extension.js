"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    console.log('Hello');
    vscode.window.showInformationMessage('Hello');
    const generateReadme = vscode.commands.registerCommand('niroobas-extension.generateReadme', async () => {
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
        }
        catch {
            readmeExists = false;
        }
        if (readmeExists) {
            const answer = await vscode.window.showWarningMessage('README.md already exists. Do you want to replace it?', 'Replace', 'Cancel');
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
        await vscode.workspace.fs.writeFile(readmeUri, Buffer.from(readmeContent, 'utf8'));
        vscode.window.showInformationMessage('README.md saved!');
    });
    context.subscriptions.push(generateReadme);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map