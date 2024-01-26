vscode.commands.registerCommand("extension.moveCaretUpUsingDefault", () => {
    vscode.commands.executeCommand("cursorUp"); // Trigger the default command
});
