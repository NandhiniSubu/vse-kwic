import * as vscode from "vscode";
import { SidebarViewPanel } from "./panels/SidebarViewPanel";
import { SidebarProvider } from "./panels/SidebarProvider";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "kwic" is now active!');

  const sidebarProvider = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("kwic-sidebar", sidebarProvider)
  );

  let disposable = vscode.commands.registerCommand("kwic.helloWorld", () => {
    // vscode.window.showInformationMessage("Hello subramani from kwic!");
    SidebarViewPanel.render(context.extensionUri);
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
