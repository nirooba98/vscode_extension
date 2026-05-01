# Nirooba's Extension

A beginner-friendly VS Code extension that shows a greeting when VS Code opens
and can generate a basic `README.md` file for the current project.

## Features

- Shows a `Hello` information message when VS Code finishes opening.
- Logs `Hello` to the Extension Host console.
- Adds a command named `Generate Basic README`.
- Creates a basic `README.md` template in the currently open workspace folder.
- Checks whether `README.md` already exists before writing.
- Asks before replacing an existing `README.md`.

## Project Structure

This extension lives inside a subfolder of the GitHub repository:

```text
vscode_extension/
  niroobas-extension/
    package.json
    src/
      extension.ts
    README.md
```

After cloning the repository, go into the extension folder before running npm
commands:

```bash
cd niroobas-extension
```

## Requirements

- Visual Studio Code `1.117.0` or newer
- Node.js
- npm

## Install From GitHub Source

Clone the repository:

```bash
git clone https://github.com/nirooba98/vscode_extension.git
```

Go into the extension project folder:

```bash
cd vscode_extension/niroobas-extension
```

Install dependencies:

```bash
npm install
```

Compile the extension:

```bash
npm run compile
```

Package the extension as a VSIX file:

```bash
npx @vscode/vsce package
```

Install the generated VSIX file:

```bash
code --install-extension niroobas-extension-0.0.1.vsix
```

Restart or reload VS Code after installing.

## Install From a Downloaded VSIX

If someone already has the `.vsix` file, they can install it directly.

Open VS Code, then open the Command Palette:

```text
Cmd + Shift + P
```

Search for:

```text
Extensions: Install from VSIX...
```

Choose the file:

```text
niroobas-extension-0.0.1.vsix
```

Reload VS Code if prompted.

## Run in Development Mode

Open the extension folder in VS Code:

```bash
cd vscode_extension/niroobas-extension
code .
```

Start debugging:

```text
F5
```

This opens a new **Extension Development Host** window. When that window
finishes opening, the extension should show a `Hello` message.

## Use the README Generator

In the Extension Development Host window, open the Command Palette:

```text
Cmd + Shift + P
```

Search for:

```text
Generate Basic README
```

Run the command.

If the current workspace does not have a `README.md`, the extension creates one.

If `README.md` already exists, the extension asks:

```text
README.md already exists. Do you want to replace it?
```

Choose `Replace` to overwrite the file, or choose `Cancel` to leave the existing
README unchanged.

## Development Commands

Compile the extension:

```bash
npm run compile
```

Watch for TypeScript changes:

```bash
npm run watch
```

Package the extension:

```bash
npx @vscode/vsce package
```

## Notes

The generated `README.md` is intentionally basic. It includes starter sections
for description, installation, usage, contributing, and license information.

## Release Notes

### 0.0.1

Initial extension with startup greeting and basic README generation.
